import Image from "next/image"
import Metaporfosis from "@/../public/assets/svg/metaporfosis.svg"
import PDKILeader from "@/../public/assets/images/pdki-leader.png"
import { studyGroup } from "@/utils/constant.tsx"
import Header from "@/components/header.tsx"
import Navbar from "@/components/navbar"
import { Metadata } from "next"
import { useTranslations } from "next-intl"
import Footer from "@/components/footer"
import { ReactElement } from "react"

// metadata for about page
export const metadata: Metadata = {
  title: 'PDKI | About',
  description: 'PDKI history here',
}

const About = () => {
  const t = useTranslations("About")

  return (
    <div>
      <Navbar />
      <main>
        {/* header dari halaman tentang */}
        <Header />

        <section className="my-8 mx-auto container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
            <p className="text-sm font-regular text-gray-600">
              {t.rich("p1", {
                span: (children) => (
                  <span className="text-2xl font-bold text-[#274698]">
                    {children}
                  </span>
                ),
              })}
            </p>
            <p className="text-sm font-regular text-gray-600">
              {t.rich("p2", {
                span: (children) => (
                  <span className="text-2xl font-bold text-[#274698]">
                    {children}
                  </span>
                ),
              })}
            </p>
          </div>

          <div className="flex justify-between flex-col items-start gap-12 mt-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a]">
              {t.rich("h-founder", {
                span: (children) => (
                  <span className="text-[#274698]">{children}</span>
                ),
              })}
            </h2>
            <div className="flex flex-col items-start gap-12">
              <div className="flex justify-between flex-col flex-wrap items-center gap-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {studyGroup.map((people, idx) => (
                    <li
                      key={idx}
                      className="font-medium text-[#fff] text-sm px-4 text-center py-3 bg-[#274698] rounded-xl"
                    >
                      {people}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-regular text-sm text-gray-600">
                {t.rich("p-founder", {
                  //@ts-ignore
                  br: <br />,
                })}
              </p>
            </div>
          </div>

          <div className="flex justify-between flex-col gap-12 mt-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {t.rich("metamorphosis.h", {
                span: (children) => (
                  <span className="text-[#329E93]">{children}</span>
                ),
              })}
            </h2>
            <Image
              className="w-full md:w-[80%] mx-auto"
              src={Metaporfosis}
              alt="metahorfosis PDKI siklus"
            />
            <div>
              <p className="font-regular text-gray-600 text-sm">
                {t.rich("metamorphosis.p1")}
              </p>
              <br />
              <p className="font-regular text-gray-600 text-sm">
                {t.rich("metamorphosis.p2", {
                  //@ts-ignore
                  br: <br />,
                })}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-8">
            <h2 className="font-bold text-2xl text-gray-800">
              {t.rich("association-chairman.h")}
            </h2>
            <Image
              className="w-full md:w-[80%] mx-auto"
              src={PDKILeader}
              alt="PDKI Leader image"
            />
            <p className="text-sm font-regular text-gray-600">
              {t.rich("association-chairman.p", {
                //@ts-ignore
                br: <br />,
                strong: (children) => <strong>{children}</strong>,
              })}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
