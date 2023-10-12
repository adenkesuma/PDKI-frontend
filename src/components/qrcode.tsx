"use client"
import QRCodeLib from 'qrcode'
import FC, { useEffect } from 'react';

interface PropsValue {
    value: string;
}

const QRCode = ({ value }: any) => {

    useEffect(() => {
        QRCodeGenerator()
    }, [value])

    const QRCodeGenerator = () => {
        const canvas = document.getElementById(value)
        QRCodeLib.toCanvas(canvas, value, (err) => {
            if (err) {
                console.log(err)
            }
        })
    }

    return (
        <div className='flex justify-center'>
            <canvas id={value} />
        </div>
    )
}

export default QRCode