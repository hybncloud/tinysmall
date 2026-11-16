import { describe, expect, it } from 'vitest'
import {
  KEY_CODE,
  POSITION,
  SORT,
  DATE,
  DATEPICKER,
  MOUSEDELTA,
  VALIDATE_STATE,
  CASCADER
} from '../index'

describe('通用常量工具测试', () => {
  describe('KEY_CODE', () => {
    it('应该包含正确的键盘按键码', () => {
      expect(KEY_CODE.Enter).toBe(13)
      expect(KEY_CODE.Space).toBe(32)
      expect(KEY_CODE.ArrowLeft).toBe(37)
      expect(KEY_CODE.ArrowRight).toBe(39)
      expect(KEY_CODE.KeyA).toBe(65)
      expect(KEY_CODE.Digit1).toBe(49)
    })
  })

  describe('POSITION', () => {
    it('应该包含正确的位置常量', () => {
      expect(POSITION.Left).toBe('left')
      expect(POSITION.Right).toBe('right')
      expect(POSITION.Top).toBe('top')
      expect(POSITION.Bottom).toBe('bottom')
    })
  })

  describe('SORT', () => {
    it('应该包含正确的排序方向常量', () => {
      expect(SORT.Asc).toBe('asc')
      expect(SORT.Desc).toBe('desc')
    })
  })

  describe('DATE', () => {
    it('应该包含正确的日期格式常量', () => {
      expect(DATE.Date).toBe('yyyy-MM-dd')
      expect(DATE.Time).toBe('hh:mm')
      expect(DATE.Datetime).toBe('yyyy-MM-dd hh:mm')
      expect(DATE.YearMonth).toBe('yyyy-MM')
    })
  })

  describe('DATEPICKER', () => {
    it('应该包含日期选择器的基本格式常量', () => {
      expect(DATEPICKER.Day).toBe('day')
      expect(DATEPICKER.Date).toBe('date')
      expect(DATEPICKER.Month).toBe('month')
      expect(DATEPICKER.Week).toBe('week')
      expect(DATEPICKER.Year).toBe('year')
    })

    it('应该包含正确的日期格式映射', () => {
      expect(DATEPICKER.DateFormats.date).toBe('yyyy-MM-dd')
      expect(DATEPICKER.DateFormats.month).toBe('yyyy-MM')
      expect(DATEPICKER.DateFormats.datetime).toBe('yyyy-MM-dd HH:mm:ss')
    })

    it('应该包含周和月份的简称列表', () => {
      expect(DATEPICKER.Weeks).toHaveLength(7)
      expect(DATEPICKER.Weeks[0]).toBe('sun')
      expect(DATEPICKER.MonhtList).toHaveLength(12)
      expect(DATEPICKER.MonhtList[0]).toBe('jan')
    })
  })

  describe('MOUSEDELTA', () => {
    it('应该是正确的鼠标滚轮增量值', () => {
      expect(MOUSEDELTA).toBe(120)
    })
  })

  describe('VALIDATE_STATE', () => {
    it('应该包含正确的表单验证状态常量', () => {
      expect(VALIDATE_STATE.Validating).toBe('validating')
      expect(VALIDATE_STATE.Success).toBe('success')
      expect(VALIDATE_STATE.Error).toBe('error')
    })
  })

  describe('CASCADER', () => {
    it('应该包含级联选择器的常量', () => {
      expect(CASCADER.CascaderMenu).toBe('.tiny-cascader-menu')
      expect(CASCADER.InputClass).toBe('.tiny-input__inner')
      expect(CASCADER.MenuConnector).toBe('cascader-menu-')
    })

    it('应该包含属性映射对象', () => {
      expect(CASCADER.PropsObject).toHaveProperty('expand-trigger')
      expect(CASCADER.PropsObject).toHaveProperty('change-on-select')
      expect(CASCADER.PropsObject).toHaveProperty('hover-threshold')
    })

    it('应该包含事件映射对象', () => {
      expect(CASCADER.EventObject).toHaveProperty('active-item-change')
    })
  })
})
