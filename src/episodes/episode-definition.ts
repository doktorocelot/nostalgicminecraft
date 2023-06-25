export interface EpisodeDefinition {
    num: number
    magnet1080: string
    magnet4k: string
    dl1080: string
    dl4k: string
    bg: string
    title: string
    streamList: StreamMirrorDefinition[]
    subsList: SubtitleDefinition[]
}

export interface SubtitleDefinition {
    dl: string
    lang: string
    author: string
}

export interface StreamMirrorDefinition {
    url: string
    site: StreamSiteDefinition
}

export interface StreamSiteDefinition {
    icon: string
    name: string
}
