import Image from 'next/image'

import Fasilitas1 from '@/../public/assets/images/test-1.jpg'
import Fasilitas2 from '@/../public/assets/images/test-2.jpg'
import Fasilitas3 from '@/../public/assets/images/test-3.jpg'
import Fasilitas4 from '@/../public/assets/images/test-4.jpg'
import Fasilitas5 from '@/../public/assets/images/test-5.jpg'
import Fasilitas6 from '@/../public/assets/images/test-6.jpg'
import Fasilitas7 from '@/../public/assets/images/test-7.jpg'
import Fasilitas8 from '@/../public/assets/images/test-8.jpg'
import Fasilitas9 from '@/../public/assets/images/test-9.jpg'
import Fasilitas10 from '@/../public/assets/images/test-10.jpg'

const FacilitiesOrganization = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8'>
        <Image 
            src={Fasilitas1}
            alt="fasilitas 1"
            width={1000}
            height={100}
            className='bg-cover h-52 rounded-lg object-cover bg-center'
        />
        <Image 
            src={Fasilitas2}
            alt="fasilitas 2"
            width={1000}
            height={100}
            className='bg-cover h-52 rounded-lg object-cover bg-center'
        />
        <Image 
            src={Fasilitas3}
            alt="fasilitas 3"
            width={1000}
            height={100}
            className='bg-cover h-52 rounded-lg object-cover bg-center'
        />
        <Image 
            src={Fasilitas4}
            alt="fasilitas 4"
            width={1000}
            height={100}
            className='bg-cover h-52 rounded-lg object-cover bg-center'
        />
        <Image 
            src={Fasilitas5}
            alt="fasilitas 5"
            width={1000}
            height={100}
            className='bg-cover h-52 rounded-lg object-cover bg-center'
        />
        <Image 
            src={Fasilitas6}
            alt="fasilitas 6"
            width={1000}
            height={100}
            className='bg-cover h-52 rounded-lg object-cover bg-center'
        />
        <Image 
            src={Fasilitas7}
            alt="fasilitas 7"
            width={1000}
            height={100}
            className='bg-cover h-52 rounded-lg object-cover bg-center'
        />
        <Image 
            src={Fasilitas8}
            alt="fasilitas 8"
            width={1000}
            height={100}
            className='bg-cover h-52 rounded-lg object-cover bg-center'
        />
        <Image 
            src={Fasilitas9}
            alt="fasilitas 9"
            width={1000}
            height={100}
            className='bg-cover h-52 rounded-lg object-cover bg-center'
        />
        <Image 
            src={Fasilitas10}
            alt="fasilitas 10"
            width={1000}
            height={100}
            className='bg-cover h-52 rounded-lg object-cover bg-center'
        />
    </div>
  )
}

export default FacilitiesOrganization