import './style/style.css'
import {EPISODES} from './episodes/episodes.ts'
import {EpisodeDefinition} from './episodes/episode-definition.ts'
import magnetSvg from './img/magnet.svg'
import saveSvg from './img/save.svg'

const displayNames = new Intl.DisplayNames(['en'], {type: 'language'})

;

(() => {
    const episodeListSection = document.getElementById('episodes')
    if (episodeListSection == null) throw new Error('\'downloads\' id wasn\'t defined in the HTML.')

    for (const episode of EPISODES) {
        episodeListSection.appendChild(document.createElement('hr'))

        const episodeSection = document.createElement('section')

        episodeSection.appendChild(createEpisodeHeading(episode))

        episodeSection.appendChild(createStreamSection(episode))

        episodeSection.appendChild(createTorrentDownloadSection(episode))

        episodeSection.appendChild(createSubsDownloadSection(episode))

        episodeListSection.appendChild(episodeSection)
    }
})()

function createButtonSection() {
    const section = document.createElement('div')
    section.classList.add('download-section')
    return section
}


function createEpisodeHeading(episode: EpisodeDefinition) {
    const heading = document.createElement('h2')
    heading.textContent = `Episode ${episode.num.toString()}`
    return heading
}

function createButton({side, link, image, text, imageAlt, isDownload}: {
    side: string | null,
    link: string,
    image: string,
    text: string | null,
    imageAlt: string,
    isDownload: boolean
}) {
    const button = document.createElement('a')
    button.classList.add('btn')
    if (side != null) button.classList.add(side)
    button.href = link
    if (isDownload) button.setAttribute('download', '')

    const img = document.createElement('img')
    img.src = image
    img.classList.add(text == null ? 'alone' : 'with-text')
    img.alt = imageAlt

    button.appendChild(img)
    if (text != null) {
        const buttonText = document.createElement('span')
        buttonText.textContent = text
        button.appendChild(buttonText)
    }
    return button
}

function createDownloadGroup() {
    const group = document.createElement('span')
    group.classList.add('download-group')
    return group
}

function createFullDownloadGroup(magnet: string, dl: string, text: string) {
    const group = createDownloadGroup()
    const magnetButton = createButton({
        side: 'left',
        link: magnet,
        image: magnetSvg,
        text: text,
        imageAlt: 'Magnet link',
        isDownload: false,
    })
    const downloadButton = createButton({
        side: 'right',
        link: dl,
        image: saveSvg,
        text: null,
        imageAlt: 'Torrent download link',
        isDownload: true,
    })
    group.appendChild(magnetButton)
    group.appendChild(downloadButton)
    return group
}

function createTorrentDownloadSection(episode: EpisodeDefinition) {
    const torrentDownloadSection = createButtonSection()

    const torrentHeading = createSubheading('Torrents')
    torrentDownloadSection.appendChild(torrentHeading)

    const group4k = createFullDownloadGroup(episode.magnet4k, episode.dl4k, '4k (UHD)')
    const group1080 = createFullDownloadGroup(episode.magnet1080, episode.dl1080, '1080p (FHD)')

    torrentDownloadSection.appendChild(group4k)
    torrentDownloadSection.appendChild(group1080)
    return torrentDownloadSection
}

function createSubheading(text: string) {
    const heading = document.createElement('h3')
    heading.textContent = text
    return heading
}

function createSubsDownloadSection(episode: EpisodeDefinition) {
    const subsDownloadSection = createButtonSection()

    const subsHeading = createSubheading('Subtitles')
    subsDownloadSection.appendChild(subsHeading)

    for (const subs of episode.subsList) {
        const subsDownloadGroup = createDownloadGroup()
        const subsButton = createButton({
            side: null,
            link: subs.dl,
            image: saveSvg,
            text: `${displayNames.of(subs.lang)} Subs (by ${subs.author})`,
            imageAlt: 'Subtitle download link',
            isDownload: true,
        })
        subsDownloadGroup.appendChild(subsButton)
        subsDownloadSection.appendChild(subsDownloadGroup)
    }
    return subsDownloadSection
}

function createStreamSection(episode: EpisodeDefinition) {
    const streamSection = createButtonSection()

    const streamHeading = createSubheading('Stream Online')
    streamSection.appendChild(streamHeading)

    for (const stream of episode.streamList) {
        const streamGroup = createDownloadGroup()
        const streamButton = createButton({
            side: null,
            link: stream.url,
            image: stream.site.icon,
            text: stream.site.name,
            imageAlt: `${stream.site.name} link`,
            isDownload: false,
        })
        streamGroup.appendChild(streamButton)
        streamSection.appendChild(streamGroup)
    }
    return streamSection
}
