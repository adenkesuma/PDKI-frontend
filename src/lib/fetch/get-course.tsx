import { cache } from "react"

export const fetchCourses = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_P2KB_API}/training`, {
    method: 'GET',
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error
  }

  const courses = await res.json()
  const coursesData = courses.data

  return coursesData
})

