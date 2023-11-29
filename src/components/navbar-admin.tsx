"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "./sidebar"

const NavbarAdmin = () => {
    // get current path for logical sidebar
    const pathname = usePathname() as string
    const splitArray: string[] = pathname?.split('/')
    const desiredValue: string = splitArray[splitArray.length - 1] 

    const [selectedCategory, setSelectedCategory] = useState<string>(desiredValue)

    return (
        <nav className='p-4 relative'>
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </nav>
    )
}

export default NavbarAdmin