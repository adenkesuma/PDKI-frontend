import { cache } from "react";

export const fetchVideoDetail = cache(async (id: string) => {
    const res = await fetch(`${process.env.BASE_URL}/api/route/video/${id}`, {
        mode: 'cors',
        method: 'GET',
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error
    }

    const videoDetail = await res.json()
    return videoDetail
})