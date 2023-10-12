"use client"
import { TbEdit, TbEye } from "react-icons/tb"
import { MdOutlineDelete } from "react-icons/md"
import Link from "next/link"
import { getSession } from "next-auth/react";

interface Props {
  npa_pdki: string;
}

const PopupDetail = ({ npa_pdki }: Props) => {

  const handleDeleteMember = async () => {
    const session = await getSession()
    const deleteConfirm = window.confirm("apakah anda yakin ingin menghapus member ini ?")
    if (deleteConfirm === true) {
      await fetch(`${process.env.BASE_URL}/api/route/admin/member/${npa_pdki}`, {
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
    <div className="absolute right-6 bg-[#fff] rounded-2xl shadow-md shadow-gray-400 py-4 px-4 text-[#1a1a1a] flex flex-col gap-3">
      <Link href={`member/${npa_pdki}`} className="flex gap-3 items-center justify-start bg-[#fff] hover:bg-gray-100 duration-75 rounded-xl py-2 px-4 text-[#1a1a1a]">
        <TbEye className="text-[20px]" />
        <p className="text-[16px] font-medium">Lihat</p>
      </Link>
      <Link href={`member/edit-member/${npa_pdki}`} className="flex gap-3 items-center justify-start bg-[#fff] hover:bg-gray-100 duration-75 rounded-xl py-2 px-4 text-[#1a1a1a]">
        <TbEdit className="text-[20px]" />
        <p className="text-[16px] font-medium">Edit</p>
      </Link>
      <button
        onClick={handleDeleteMember}
        className="flex gap-3 items-center justify-start bg-[#fff] hover:bg-red-600 text-red-600 hover:text-[#fff] duration-75 rounded-xl py-2 px-4">
        <MdOutlineDelete className="text-[20px]" />
        <p className="text-[16px] font-semibold">Hapus</p>
      </button>
    </div>
  )
}

export default PopupDetail