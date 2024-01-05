
import { Info } from "./info.model"
import { Result } from "./result.model"

export interface Response {
    info: Info
    results: Result[]
  }