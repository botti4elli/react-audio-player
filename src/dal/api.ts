export type GetTrackDetailsOutputData= {
    id: string,
    attributes:{
        title: string,
        lyrics: string | null,

    }

}

export type GetTrackDetailsOutput = {
    data:GetTrackDetailsOutputData
}


export type AttachmentDto = {
    url: string
}

export type TrackListItemOutputAttributes = {
    title: string
    attachments:Array<AttachmentDto>
}
export type TrackListItemOutput = {
    id: string
    attributes:TrackListItemOutputAttributes

}

export type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

const prepareHeaders = () =>{
    const apiKey = import.meta.env.VITE_API_KEY
    if (!apiKey) return undefined
    return {
        'api-key': apiKey
    }
}
export const getTrack = (trackId: string) =>{
    const promise: Promise<GetTrackDetailsOutput> =  fetch(
        'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
        {
            headers: prepareHeaders()
            // {
            //     'api-key': 'adc5d65d-6203-48ff-af5e-4c82ede366f0'
            // }
        }
    )
        .then(res => res.json())
    return promise
}

export const getTracks = () =>{
    const promise  :Promise<GetTrackListOutput> =  fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: prepareHeaders()
        //     {
        //     'api-key': 'adc5d65d-6203-48ff-af5e-4c82ede366f0'
        // }
    })
        .then(res => res.json())
    return promise
}