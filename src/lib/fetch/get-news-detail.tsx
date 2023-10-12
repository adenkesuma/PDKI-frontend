import { cache } from "react"

export const fetchNewsDetail = cache(async (id: number) => {
    const res = await fetch(`${process.env.BASE_URL}/api/route/news/${id}`, {
        mode: 'cors',
        method: 'GET',
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error
    }

    const newsDetail = await res.json()

    return newsDetail
})