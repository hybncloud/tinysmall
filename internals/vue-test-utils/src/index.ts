import { mount as _mount, type ComponentMountingOptions } from '@vue/test-utils'

const mount = (inputComponent: any, options: ComponentMountingOptions<any> = {}) => {
  let mount$ = _mount
  const wrapper = mount$(inputComponent, options)
  return wrapper
}

const mountWithMode = (mode: string, inputComponent: any, options: ComponentMountingOptions<any> = {}) => {
  options.props = { ...options.props, tiny_mode: mode }

  return mount(inputComponent, options)
}

export const mountPcMode = (inputComponent: any, options: ComponentMountingOptions<any> = {}) =>
  mountWithMode('pc', inputComponent, options)

export type { MountingOptions } from '@vue/test-utils'
