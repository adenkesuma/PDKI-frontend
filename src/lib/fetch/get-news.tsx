import { cache } from "react"

export const fetchNews = cache(async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/route/news`, {
    mode: 'cors',
    method: 'GET',
    cache: "no-store"
  })


  if (!res.ok) {
    throw new Error
  }

  const news = await res.json()

  return news
})