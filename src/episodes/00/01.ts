import {EpisodeDefinition} from '../episode-definition.ts'
import {YOUTUBE_STREAM} from '../streaming/youtube-stream.ts'

export const EPISODE_DEFINITION_01: EpisodeDefinition = {
    num: 1,
    magnet4k: 'magnet:?xt=urn:btih:09978615b77f6001307ed379f9d915f67ec8c02c&dn=Nostalgic_Minecraft.s01e01.4k.mkv',
    magnet1080: 'magnet:?xt=urn:btih:bab1959dffacb889e784b37e64f8972d8e0a260d&dn=Nostalgic_Minecraft.s01e01.1080p.mkv',
    dl4k: '/torrents/00/Nostalgic_Minecraft.s01e01.4k.mkv.torrent',
    dl1080: '/torrents/00/Nostalgic_Minecraft.s01e01.1080p.mkv.torrent',
    streamList: [
        {
            site: YOUTUBE_STREAM,
            url: 'https://youtu.be/_55p2vKzsM8',
        },
    ],
    subsList: [
        {
            dl: '/subs/00/Nostalgic_Minecraft.s01e01.en.ass',
            lang: 'en',
            author: 'Dr Ocelot',
        },
        {
            dl: '/subs/00/Nostalgic_Minecraft.s01e01.es.ass',
            lang: 'es',
            author: 'Mine_Tetris',
        },
    ],
}