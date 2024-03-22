'use client'

import Link from "next/link";
import React, {useEffect, useState} from "react";
import {Expense} from "@/app/lib/models/expense";
import {Tooltip} from "@nextui-org/react";
import {DeleteIcon, EditIcon, EyeIcon} from "@nextui-org/shared-icons";

export default function Page() {

    const [loading, setLoading] = useState<boolean>(false)
    const [expenses, setExpenses] = useState<Expense[]>([])

    const loadData = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const formatDate = (date: Date) => {
        return date.toDateString()
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className='text-[#304D30] text-center text-4xl font-bold mb-14'>Expenses</h1>

            <div className="relative overflow-x-auto w-full ">
                <div className="flex justify-between">
                    <button onClick={() => loadData()}
                            className="mb-4 hover:underline hover:text-gray-500 active:text-blue-300 active:underline">
                        reload <span aria-hidden="true">&#8634;</span>
                        {
                            loading ?
                                <span className="text-orange-700 font-bold mx-2"> loading...</span> : <>
                                </>
                        }
                    </button>
                    <button className="mb-4 hover:text-gray-500 active:text-blue-300 active:underline">
                        <Link href="../../modules/expenses/record">
                            Open <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </button>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Card Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount ( $ )
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Expense Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Reason
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        expenses.map(expense =>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {expense.cardNumber}
                                </th>
                                <td className="px-6 py-4">
                                    <span className="font-bold">$</span> {expense.amount}.00
                                </td>
                                <td className="px-6 py-4">
                                    {formatDate(expense.expenseDate)}
                                </td>
                                <td className="px-6 py-4">
                                    {expense.reason}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="relative flex items-center gap-2">
                                        <Tooltip content="Details">
                                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                        <EyeIcon/>
                                      </span>
                                        </Tooltip>
                                        <Tooltip content="Edit user">
                                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                        <EditIcon/>
                                      </span>
                                        </Tooltip>
                                        <Tooltip color="danger" content="Delete user">
                                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                        <DeleteIcon/>
                                      </span>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </main>
    )
}