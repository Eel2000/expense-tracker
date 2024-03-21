'use client'

import {useState} from "react";
import Link from "next/link";

export default function Page() {
    const [check, setCheck] = useState<boolean>(false)
    const handleClick = () => {
        if (!check)
            setCheck(true)
        else
            setCheck(false)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="grid grid-cols-2 gap-4">
                <div onClick={() => handleClick()}
                     className="w-[500px] h-[500px] group grid grid-cols-1 bg-white rounded shadow hover:shadow-xl hover:border-blue-600 cursor-pointer">
                    <input type="radio" checked={check}
                           className="group-active:outline-blue-500 h-3.5 w-3.5 rounded-3xl"/>
                    
                    <Link href="/modules/services/cards/" className="text-2xl font-semibold text-center cursor-pointer">Cards services & Management</Link>
                </div>
                <div onClick={() => handleClick()}
                     className="w-[500px] h-[500px] group grid grid-cols-1 bg-white rounded shadow hover:shadow-xl hover:border-blue-600 cursor-pointer">
                    <input type="radio" checked={!check}
                           className="group-active:outline-blue-500 h-3.5 w-3.5 rounded-3xl"/>
                    <Link href="/modules/services/invoices/" className="text-2xl font-semibold text-center cursor-pointer">Invoices services & Management</Link>
                </div>
            </div>
        </main>
    )
}