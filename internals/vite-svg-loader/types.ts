import { Config } from 'svgo'

export interface Options {
  svgoConfig: Config
}

export type UserOptions = Partial<Options>

export type ResolvedOptions = Options
