import { TbCheck } from "react-icons/tb"

const PopupSuccess = () => {
    return (
      <div className="w-[300px] rounded-2xl bg-blue-100 p-4 z-[99999] absolute top-5">
        <div className="flex justify-center gap-[20px] items-center">
          <p className="font-medium text-[16px]">Anda berhasil terhubung</p>
          <div className="p-2 rounded-[50%] bg-green-300">
              <TbCheck className="text-2xl font-bold text-green-800" />
          </div>
        </div>
      </div>
    )
}

export default PopupSuccess