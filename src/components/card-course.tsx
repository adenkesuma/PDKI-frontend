"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export interface ITrainingData {
  target_candidate: string;
  tujuan: string;
  kriteria: string;
  kompetensi: string;
  catatan: string;
  id: string;
  nama: string;
  member: string;
  deskripsi: string;
  quota: number;
  tahun_pelaksanaan: number;
  batch: number;
  training_start: string;
  training_end: string;
  regis_start: string;
  regis_end: string;
  location: string;
  price: number;
  trainingType: { nama: string };
  trainingOrganizer: {
    nama: string;
    no_rekening: string;
    tipe_rekening: string;
    nama_rekening: string;
  };
}

const CardCourse: FC<{
  data: ITrainingData;
}> = ({ data }) => {
  const [img, setImg] = useState(
    `${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${data?.id}.webp`
  );
  useEffect(() => {
    setImg(
      `${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${data?.id}.webp`
    );
  }, [data]);

  return (
    <div className=" bg-[#f7f7f7] p-2 sm:p-3 border border-[#274698]">
      <figure>
        <Image
          src={img}
          alt="thumnail pelatihan image"
          className="h-28 lg:h-40 w-full bg-cover object-cover"
          width={2000}
          height={100}
          onError={() => setImg("/assets/images/default-image-course.jpg")}
        />
      </figure>
      <div className="p-1 text-center rounded-md border-gray-300 border-[1.4px] text-[10px] sm:text-xs font-medium text-[#274684] w-full mt-4">
        <span className="font-semibold">{data.member.split("_").join(" ")}</span>
      </div>

      <div className="flex justify-between flex-col gap-2">
        <h2 className="font-medium sm:font-semibold text-base sm:text-lg mt-4 line-clamp-1 leading-5 sm:leading-6">
          {data.nama}
        </h2>
        <p className="font-regular text-gray-600 line-clamp-1 text-xs">
          {data.deskripsi}
        </p>

        <div className="sm:flex flex-col gap-1 mt-2 sm:mt-6 hidden">
          <p className="text-xs font-regular text-gray-600">
            Pendaftaran dibuka:{" "}
            <span className="font-semibold text-gray-700">
              {moment(new Date(data.regis_start)).format("DD MMMM yyyy")}
            </span>
          </p>
          <p className="text-xs font-regular text-gray-600">
            Pendaftaran ditutup:{" "}
            <span className="font-semibold text-gray-700">
              {moment(new Date(data.regis_end)).format("DD MMMM yyyy")}
            </span>
          </p>
        </div>

        {/* button detail */}
        <Link
          href={`${process.env.NEXT_PUBLIC_P2KB_URL}/courses/${data.id}`}
          className="text-center text-white font-medium text-xs sm:text-sm mt-2 w-full p-2 bg-[#274684]"
        >
          Detail
        </Link>
      </div>
    </div>
  );
};

export default CardCourse;