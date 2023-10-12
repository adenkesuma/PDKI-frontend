import { cache } from "react"


export const fetchConference = cache(async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/route/conference`, {
    mode: 'cors',
    method: 'GET',
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error
  }

  const conference = await res.json()

  return conference
})
