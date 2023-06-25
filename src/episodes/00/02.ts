import {EpisodeDefinition} from '../episode-definition.ts'
import {YOUTUBE_STREAM} from '../streaming/youtube-stream.ts'
import torrent4k from '../../torrents/00/Nostalgic_Minecraft.s01e02.4k.mkv.torrent'
import torrent1080 from '../../torrents/00/Nostalgic_Minecraft.s01e02.1080p.mkv.torrent'
import subsEn from '../../subs/00/Nostalgic_Minecraft.s01e02.en.ass'
import thumb from '../../img/thumb/00/e02.webp'

export const EPISODE_DEFINITION_02: EpisodeDefinition = {
    num: 2,
    magnet4k: 'magnet:?xt=urn:btih:c923bba483e78bd5faffe00ad6788aabb56bce54&xt=urn:btmh:12208339f889639aa3495fbe4f10e84ccabb5a3c4ba2d10d5b81011a063d74ceef24&dn=Nostalgic_Minecraft.s01e02.4k.mkv&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce',
    magnet1080: 'magnet:?xt=urn:btih:92f2e7dd38365904ffd9464c7d55bbcb34f34065&xt=urn:btmh:1220fa499d262d5f0af9aba19071186bd6cb3dccef2d1fca232354d140641cd7b896&dn=Nostalgic_Minecraft.s01e02.1080p.mkv&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce',
    dl4k: torrent4k,
    dl1080: torrent1080,
    bg: thumb,
    title: 'Terraforming and Spelunking',
    streamList: [
        {
            site: YOUTUBE_STREAM,
            url: 'https://youtu.be/FgvUcRAekOU',
        },
    ],
    subsList: [
        {
            dl: subsEn,
            lang: 'en',
            author: 'Dr Ocelot',
        }
    ],
}