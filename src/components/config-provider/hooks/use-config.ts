import type { ConfigProviderProps } from '../src/props'
import { configProviderContextKey } from '../index'
import { hooks } from '@tinysmall/common'

export function useConfig(): ConfigProviderProps | {} {
  return hooks.inject(configProviderContextKey) ?? {}
}
