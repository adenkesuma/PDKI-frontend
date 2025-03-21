"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
import Search from "@/components/search"
import Link from "next/link"
import { TbUser } from "react-icons/tb"
import NewsData from "@/components/news-data"

const News = () => {
  const [search, setSearch] = useState<string>('')
  const [news, setNews] = useState<[]>([])

  // session
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/api/route/news?title=${search}`, {
      cache: 'no-store',
      mode: 'cors',
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => {
        console.log(err)
      })
  }, [search])

  const onSetSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  if (status === "authenticated") {
    return (
      <div className="container mx-auto w-full inherit flex flex-col gap-2 relative pb-6">
        {/* navigation for News data */}
        <nav className="sticky top-0 ml-[236px] right-[14px] flex justify-between items-center pb-6 pr-4 pt-6 z-[999]">
          <h3 className="font-semibold text-[30px] text-[#1a1a1a]">Berita</h3>
          {/* search */}
          <div className="flex items-center justify-between gap-6">
            <Search search={search} onSetSearch={onSetSearch} holder={"Cari sesuai judul berita..."} />
            <div className="flex gap-4 items-center justify-between">
              <Link href={`#`} className="rounded-2xl bg-[#fff] shadow-md shadow-gray-300 p-3">
                <TbUser className="text-lg text-[#888]" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="mr-6 flex flex-col gap-6 ml-[240px]">
          <NewsData news={news} />
        </div>
      </div>
    )
  }

  if (status === "unauthenticated") {
    redirect('/')
  }
}

export default News

