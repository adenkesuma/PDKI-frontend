import { cache } from "react"


export const fetchMemberDetail = cache(async (id: string) => {
    const res = await fetch(`${process.env.BASE_URL}/api/route/admin/${id}`, {
        mode: 'cors',
        method: 'GET',
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error
    }

    const memberDetail = await res.json()

    return memberDetail
})