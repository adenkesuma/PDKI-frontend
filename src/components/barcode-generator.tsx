import { useEffect, useRef } from 'react'
import JsBarcode from 'jsbarcode'

interface Props {
  code: string;
}

const BarcodeGenerator = ({ code }: Props) => {
  const barcodeRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, code, {
        format: 'CODE128', 
        displayValue: true, 
      })
    }
  }, [code])

  return <canvas className='w-full' ref={barcodeRef}></canvas>
}

export default BarcodeGenerator
