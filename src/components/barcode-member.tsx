"use client"
import BarcodeGenerator from './barcode-generator'

const BarcodeMember = ({ code }: any) => {
  return (
    <div className='w-[150px] mx-auto'>
        <BarcodeGenerator code={code} />
    </div>
  )
}

export default BarcodeMember