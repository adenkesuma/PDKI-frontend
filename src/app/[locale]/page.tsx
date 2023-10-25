import TrendingNews from "../../components/trending-news"
import UpcomingConference from "../../components/upcoming-conference"
import Quote from "../../components/quote"
import LatestNews from "../../components/latest-news"
import Header from "../../components/header"
import TrendingVideo from "../../components/trending-video"
import LatestConference from "../../components/latest-conference"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import Whathsapp from "@/components/whatshapp.tsx"
import { useTranslations } from "next-intl"


const Home = () => {
  const t = useTranslations("Header")

  return (
    <div className="bg-white relative">
      <Navbar />
      <main className="relative px-4 sm:px-0 container mx-auto">
        {/* header dari halaman awal */}
        <Header heading="PDKI" subheading={t("1.description")} />

        <section className="mt-8 grid grid-cols-1 gap-6 items-end md:grid-cols-3 px-6 xl:px-12">
          <TrendingVideo />
          <UpcomingConference />
          <TrendingNews />
        </section>

        <section className="mt-8 mb-8 px-6 xl:px-12">
          <Quote />
          <LatestConference />
          <LatestNews />
        </section>
      </main>
      <Footer />
      <Whathsapp />
    </div>
  )
}

export default Home
