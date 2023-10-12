import { ConferenceProps } from "@/utils/interface"
import { TbEdit, TbEye } from "react-icons/tb"
import { MdOutlineDelete } from "react-icons/md"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getSession } from "next-auth/react"

const CardConference = ({
  conference_id,
  title,
  description,
  image,
  start_date,
  end_date,
  location,
  organizer,
  website_url,
  registration_required,
  speakers,
  is_free,
  topic,
  created_at,
  updated_at
}: ConferenceProps) => {

  const handleDeleteConference = async () => {
    const session = await getSession()
    const deleteConfirm = window.confirm("apakah anda yakin ingin menghapus konferensi ini ?")
    if (deleteConfirm === true) {
      await fetch(`${process.env.BASE_URL}/api/route/admin/conference/${conference_id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adminUsername: session?.user.username
        }),
        credentials: "include"
      })
      window.location.reload()
    }
  }

  return (
    <div className="bg-[#fff] rounded-2xl p-3 shadow-md shadow-gray-300">
      <figure className="relative">
        <Image
          width={200}
          height={200}
          className="rounded-[12px] w-full h-[200px] lg:h-[230px] object-cover bg-center bg-cover"
          src={process.env.BASE_URL + image}
          alt={title}
        />

        {/* icons */}
        <div className="flex flex-col gap-3 absolute top-4 right-4">
          <Link href={`conference/${conference_id}`} className="hover:bg-[#274698] hover:text-[#fff] text-[#555] duration-75 bg-[#fff] rounded-lg p-2 shadow-sm shadow-gray-500">
            <TbEye className="text-[24px]" />
          </Link>
          <Link href={`/admin/conference/edit-conference/${conference_id}`} className="hover:bg-[#274698] hover:text-[#fff] text-[#555] duration-75 bg-[#fff] rounded-lg p-2 shadow-sm shadow-gray-500">
            <TbEdit className="text-[24px]" />
          </Link>
          <button
            onClick={() => handleDeleteConference()}
            className="bg-[#fff] rounded-lg p-2 shadow-sm shadow-gray-500 hover:bg-red-600 hover:text-[#fff] text-red-600"
          >
            <MdOutlineDelete className="text-[24px]" />
          </button>
        </div>
      </figure>
      <div className="mt-6 pb-4 px-4 w-full flex flex-col gap-4">
        <div>
          <h4 className="text-[16px] xl:text-[18px] text-[#1a1a1a] font-medium text-ellipsis whitespace-nowrap overflow-hidden">{title}</h4>
          <p className="text-[14px] xl:text-[16px] font-medium text-[#444]">{location}</p>
        </div>
        <div className="flex justify-between items-center gap-14 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="text-[14px] xl:text-[16px] font-medium text-[#777]">{`${new Date(start_date).getDate()} - ${new Date(start_date).getMonth()} - ${new Date(start_date).getFullYear()}`}</span>
          <span className="text-[14px] xl:text-[16px] font-medium text-[#777] text-ellipsis whitespace-nowrap overflow-hidden">{speakers}</span>
        </div>
      </div>
    </div>
  )
}

export default CardConference