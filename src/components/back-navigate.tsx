import Link from "next/link"
import { MdArrowBackIosNew } from "react-icons/md"

interface Props {
    path: string,
    text: string,
}

const BackNavigate = ({ path, text }: Props) => {
    return (
        <div>
            <Link href={`/admin/${path}`} className="flex gap-6 items-center font-medium">
                <MdArrowBackIosNew className="text-[24px]" />
                Kembali
            </Link>
            <h2 className="text-center mt-8 mb-10 font-semibold text-[30px]">
                {text}
            </h2>
        </div>
    )
}

export default BackNavigate