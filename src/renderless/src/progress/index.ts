/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { $constants } from './constants'
import type {
  IProgressRenderlessParams,
  IProgressBarStyle,
  IProgressPathStyle,
  IProgressIconStyle,
  IProgressColorItem
} from '../../types'

export const computedBarStyle =
  ({ api, props }: Pick<IProgressRenderlessParams, 'api' | 'props'>) =>
  (): IProgressBarStyle => ({
    width: props.percentage + '%',
    backgroundColor: api.getCurrentColor(props.percentage)
  })

export const computedRelativeStrokeWidth =
  ({ state }: Pick<IProgressRenderlessParams, 'state'>) =>
  (): number => {
    if (state.width === 0 || state.strokeWidth === 0) return $constants.REL_STROKE_WIDTH
    return Number(((state.strokeWidth / state.width) * 100).toFixed(1))
  }

export const computedRadius =
  ({ props, state }: Pick<IProgressRenderlessParams, 'props' | 'state'>) =>
  (): number =>
    props.type === $constants.PROGRESS_TYPE.CIRCLE || props.type === $constants.PROGRESS_TYPE.DASHBOARD
      ? parseInt(String(50 - parseFloat(state.relativeStrokeWidth) / 2), 10)
      : 0

export const computedTrackPath =
  ({ props, state }: Pick<IProgressRenderlessParams, 'props' | 'state'>) =>
  (): string => {
    const radiusValue = state.radius
    const isDashboardType = props.type === $constants.PROGRESS_TYPE.DASHBOARD

    return `
    M 50 50
    m 0 ${isDashboardType ? '' : '-'}${radiusValue}
    a ${radiusValue} ${radiusValue} 0 1 1 0 ${isDashboardType ? '-' : ''}${radiusValue * 2}
    a ${radiusValue} ${radiusValue} 0 1 1 0 ${isDashboardType ? '' : '-'}${radiusValue * 2}
    `
  }

export const computedPerimeter =
  ({ state }: Pick<IProgressRenderlessParams, 'state'>) =>
  (): number =>
    2 * Math.PI * state.radius

export const computedRate =
  ({ props }: Pick<IProgressRenderlessParams, 'props'>) =>
  (): number =>
    props.type === $constants.PROGRESS_TYPE.DASHBOARD ? 0.75 : 1

export const computedStrokeDashoffset =
  ({ state }: Pick<IProgressRenderlessParams, 'state'>) =>
  (): string =>
    `${(-1 * state.perimeter * (1 - state.rate)) / 2}px`

export const computedTrailPathStyle =
  ({ state }: Pick<IProgressRenderlessParams, 'state'>) =>
  (): IProgressPathStyle => ({
    strokeDasharray: `${state.perimeter * state.rate}px, ${state.perimeter}px`,
    strokeDashoffset: state.strokeDashoffset
  })

export const computedCircleStyle =
  ({ state }: Pick<IProgressRenderlessParams, 'state'>) =>
  () =>
    state.width ? { height: state.width + 'px', width: state.width + 'px' } : {}

export const computedCirclePathStyle =
  ({ props, state }: Pick<IProgressRenderlessParams, 'props' | 'state'>) =>
  (): IProgressPathStyle => ({
    strokeDasharray: `${state.perimeter * state.rate * (props.percentage / 100)}px, ${state.perimeter}px`,
    strokeDashoffset: state.strokeDashoffset,
    transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
  })

export const computedStroke =
  ({ api, props }: Pick<IProgressRenderlessParams, 'api' | 'props'>) =>
  (): string =>
    (props.color && api.getCurrentColor(props.percentage)) ||
    $constants.STATUS_TO_COLOR[props.status] ||
    $constants.STATUS_DEFAULT_COLOR

export const computedIconClass =
  ({ props }: Pick<IProgressRenderlessParams, 'props'>) =>
  (): string => {
    if (props.status === $constants.PROGRESS_STATUS.SUCCESS) {
      const iconClasses =
        props.type === $constants.PROGRESS_TYPE.LINE
          ? [$constants.ICON_SUCCESS, $constants.ICON_CIRCLE_SUCCESS]
          : [$constants.ICON_CIRCLE_SUCCESS, $constants.ICON_SUCCESS]
      return iconClasses[0]
    } else if (props.status === $constants.PROGRESS_STATUS.WARNING) {
      return props.type === $constants.PROGRESS_TYPE.LINE ? $constants.ICON_WARNING : $constants.ICON_CIRCLE_WARNING
    } else if (props.status === $constants.PROGRESS_STATUS.EXCEPTION) {
      const iconClasses =
        props.type === $constants.PROGRESS_TYPE.LINE
          ? [$constants.ICON_EXCEPTION, $constants.ICON_CIRCLE_EXCEPTION]
          : [$constants.ICON_CIRCLE_EXCEPTION, $constants.ICON_EXCEPTION]
      return iconClasses[0]
    } else {
      return ''
    }
  }

export const computedIconStyle =
  ({ props, state }: Pick<IProgressRenderlessParams, 'props' | 'state'>) =>
  (): IProgressIconStyle<number> | {} => {
    if (props.type === $constants.PROGRESS_TYPE.LINE) {
      return state.strokeWidth
        ? {
            width: $constants.TEXT_XS + state.strokeWidth * $constants.STROKE_WIDTH_RATE,
            height: $constants.TEXT_XS + state.strokeWidth * $constants.STROKE_WIDTH_RATE
          }
        : {}
    } else {
      return state.width
        ? { width: state.width / $constants.WIDTH_RATE_TWO, height: state.width / $constants.WIDTH_RATE_TWO }
        : {}
    }
  }

export const computedProgressTextSize =
  ({ props, state }: Pick<IProgressRenderlessParams, 'props' | 'state'>) =>
  (): number => {
    return props.type === $constants.PROGRESS_TYPE.LINE
      ? $constants.TEXT_XS + state.strokeWidth * $constants.STROKE_WIDTH_RATE
      : state.width * 0.111111 + 2
  }

export const computedContent =
  ({ props }: Pick<IProgressRenderlessParams, 'props'>) =>
  (): string =>
    typeof props.format === 'function' ? props.format() || '' : `${props.percentage}%`

export const getCurrentColor =
  ({ api, props }: Pick<IProgressRenderlessParams, 'api' | 'props'>) =>
  (percentage) => {
    if (typeof props.color === 'function') {
      return props.color(percentage)
    } else if (typeof props.color === 'string') {
      return props.color
    } else {
      return api.getLevelColor(percentage)
    }
  }

export const getLevelColor =
  ({ api }: Pick<IProgressRenderlessParams, 'api'>) =>
  (percentage: number): string => {
    const colorArray = api.getColorArray().sort((a, b) => a.percentage - b.percentage)

    for (let i = 0; i < colorArray.length; i++) {
      if (colorArray[i].percentage > percentage) {
        return colorArray[i].color
      }
    }

    return colorArray[colorArray.length - 1].color
  }

export const getColorArray =
  ({ props }: Pick<IProgressRenderlessParams, 'props'>) =>
  (): IProgressColorItem[] => {
    const color = props.color
    const span = 100 / color.length

    return color.map((seriesColor, index) => {
      if (typeof seriesColor === 'string') {
        return {
          color: seriesColor,
          progress: (index + 1) * span
        }
      }

      return seriesColor
    })
  }

export const customBeforeAppearHook =
  ({ props, state }: Pick<IProgressRenderlessParams, 'props' | 'state'>) =>
  (el: HTMLElement) => {
    if (props.type === 'line') {
      el.style.width = String(0)
    } else if (props.type === 'circle') {
      el.style.strokeDasharray = String(state.perimeter * state.content)
      el.style.strokeDashoffset = state.perimeter
    }
  }

export const customAppearHook = (el: HTMLElement) => {
  el.style.transition = 'all 0.5s'
}

export const customAfterAppearHook =
  ({ state, props }: Pick<IProgressRenderlessParams, 'state' | 'props'>) =>
  (el: HTMLElement) => {
    if (props.type === 'line') {
      el.style.width = state.barStyle.width
    } else if (props.type === 'circle') {
      el.style.strokeDashoffset = String(0)
    }
  }
