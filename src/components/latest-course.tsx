import Link from "next/link"
import { TbChevronRight } from "react-icons/tb"
import { fetchCourses } from "@/lib/fetch/get-course";
import CardCourse, { ITrainingData } from "./card-course";

const LatestCoursesBox = ({ fourLatestCourses }: { fourLatestCourses: ITrainingData[] }) => {
    console.log(fourLatestCourses)

    return (
        <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-base lg:text-2xl font-semibold text-gray-800">
                 Latest Courses 
              </h2>
              <Link href="/news" className="flex justify-between items-center gap-1 sm:gap-2 text-[#274698] font-medium text-xs md:text-sm">
                Lihat Semua
                <TbChevronRight
                  className="w-6 h-6 font-semibold text-[#274684]"
                />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fourLatestCourses.map((item) => (
                  <CardCourse 
                      key={item.id}
                      data={item}
                  />
              ))}
            </div>
        </div>
    )
}

const LatestCourses = async () => {
  const getLatestCourses = await fetchCourses();
  const fourLatestCourses = await getLatestCourses.slice(0, 4);

  return (
    <div>
      <LatestCoursesBox fourLatestCourses={fourLatestCourses} />
    </div>
  );
};

export default LatestCourses;