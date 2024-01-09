import { GifInformation } from "./gifInformation.model"

export interface TenorResponse {
    results: GifInformation[]
    next: string
  }