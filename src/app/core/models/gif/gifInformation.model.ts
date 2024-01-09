import { MediaFormats } from "./mediaFormats.model"

export interface GifInformation {
    id: string
    title: string
    media_formats: MediaFormats
    created: number
    content_description: string
    itemurl: string
    url: string
    tags: string[]
    flags: any[]
    hasaudio: boolean
  }