'use client'

import {useState} from "react";
import Link from "next/link";
import {FaFileInvoiceDollar, FaMoneyCheck} from "react-icons/fa";
import {GiCommercialAirplane} from "react-icons/gi";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter()

    const [check, setCheck] = useState<boolean>(false)
    const getToCard = () => router.push('/modules/services/cards/')

    const getToInvoice = () => router.push('/modules/services/invoices/')

    return (
        <main
            className='w-full px-4 py-80 flex items-center justify-center flex-col pt-24 h-full'>
            <h1 className='text-[#304D30] text-center text-4xl font-bold mb-14'>
                Services
            </h1>
            <div className='flex items-center sm:flex-row flex-col sm:space-x-4 mb-6 justify-center sm:w-[80%] w-full'>
                <div onClick={getToCard}
                     className='group sm:w-1/2 w-full mb-4 sm:mb-0 bg-[#EEF0E5] p-6 rounded-lg hover:outline outline-blue-500 cursor-pointer hover:bg-white active:scale-[0.99]'>
                    <FaMoneyCheck className='text-3xl mb-4 text-[#304D30] group-hover:text-blue-500'/>
                    <h2 className='text-[#304D30] text-xl font-bold group-hover:text-blue-500'>Bank Cards</h2>
                    <p className='text-[#304D30] group-hover:text-blue-500'>
                        We believe that everyone should have access to premium quality
                        clothing at affordable prices.
                    </p>
                </div>
                <div onClick={getToInvoice}
                     className='group sm:w-1/2 w-full mb-4 sm:mb-0 bg-[#EEF0E5] p-6 rounded-lg hover:outline outline-blue-500 cursor-pointer hover:bg-white active:scale-[0.99]'>
                    <FaFileInvoiceDollar className='text-3xl mb-4 text-[#304D30] group-hover:text-blue-500'/>
                    <h2 className='text-[#304D30] text-xl font-bold group-hover:text-blue-500'>Expenses Invoices</h2>
                    <p className='text-[#304D30] group-hover:text-blue-500'>
                        We offer free shipping for orders over $200, so you can shop from
                        anywhere in the world.
                    </p>
                </div>
            </div>
        </main>
    )
}