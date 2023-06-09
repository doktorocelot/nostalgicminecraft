import {EpisodeDefinition} from '../episode-definition.ts'
import {YOUTUBE_STREAM} from '../streaming/youtube-stream.ts'
import torrent4k from '../../torrents/00/Nostalgic_Minecraft.s01e01.4k.mkv.torrent'
import torrent1080 from '../../torrents/00/Nostalgic_Minecraft.s01e01.1080p.mkv.torrent'
import subsEn from '../../subs/00/Nostalgic_Minecraft.s01e01.en.ass'
import subsEs from '../../subs/00/Nostalgic_Minecraft.s01e01.es.ass'
import thumb from '../../img/thumb/00/e01.webp'

export const EPISODE_DEFINITION_01: EpisodeDefinition = {
    num: 1,
    magnet4k: 'magnet:?xt=urn:btih:09978615b77f6001307ed379f9d915f67ec8c02c&dn=Nostalgic_Minecraft.s01e01.4k.mkv',
    magnet1080: 'magnet:?xt=urn:btih:bab1959dffacb889e784b37e64f8972d8e0a260d&dn=Nostalgic_Minecraft.s01e01.1080p.mkv',
    dl4k: torrent4k,
    dl1080: torrent1080,
    bg: thumb,
    title: 'The First Night',
    streamList: [
        {
            site: YOUTUBE_STREAM,
            url: 'https://youtu.be/_55p2vKzsM8',
        },
    ],
    subsList: [
        {
            dl: subsEn,
            lang: 'en',
            author: 'Dr Ocelot',
        },
        {
            dl: subsEs,
            lang: 'es',
            author: 'Mine_Tetris',
        },
    ],
}