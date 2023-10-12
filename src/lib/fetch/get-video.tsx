import { cache } from "react"

export const fetchVideo = cache(async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/route/video`, {
    mode: 'cors',
    method: 'GET',
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error
  }

  const video = await res.json()

  return video
})