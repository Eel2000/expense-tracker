'use client'

import {ChangeEvent, useState} from "react";
import {NewExpense} from "@/app/lib/models/newExpense";
import {Input} from "postcss";
import {BankCard} from "@/app/lib/models/bankCard";

export default function Page() {
    const exp: NewExpense = {
        reason: '',
        expenseDate: '',
        cardId: '',
        amount: 0
    }

    const [bankCards, setBankCards] = useState<BankCard[]>([])
    const [newExpense, setNewExpense] = useState<NewExpense>(exp)


    const handleTodoChanges = (event: ChangeEvent<any>) => {
        event.preventDefault()

        setNewExpense((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    
    const saveExpense = (form: FormData) => {
        let expense = {
            cardId: form.get('cardId'),
            expenseDate: form.get('expenseDate'),
            amount: form.get('amount'),
            reason: form.get('reason')
        }

        // console.log(`before ${expense}`)

        setNewExpense({
            cardId: expense.cardId as string,
            expenseDate: expense.expenseDate as string,
            amount: Number(expense.amount as string),
            reason: expense.reason as string
        })

        console.log(newExpense)

    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>New expense</h1>
            <form action={saveExpense} className="grid gap-5 w-[60%]">
                <div className="grid grid-cols-1 gap-2">
                    <label>Amount in ($)</label>
                    <input className="w-full p-2 active:border-blue-600 focus:outline-blue-600 rounded"
                           type="number" name="amount" value={newExpense.amount} onChange={handleTodoChanges}
                           placeholder="enter the amount" aria-required="true" required={true}/>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <label>Date</label>
                    <input className="w-full p-2 focus:border-none focus:outline-blue-600 rounded"
                           type="date" name="expenseDate" value={newExpense.expenseDate} onChange={handleTodoChanges}
                           placeholder="enter the amount" aria-required="true" required={true}/>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <label>Bank Cards</label>
                    <select className="w-full p-2 focus:border-none focus:outline-blue-600 rounded" name="cardId" value={newExpense.cardId} onChange={handleTodoChanges}>
                        <option>------- select a card ---------</option>
                        {
                            bankCards.map(card =>
                                <option key={card.id} value={card.id} className="rounded">{card.cardNumber}</option>
                            )
                        }
                    </select>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <label>Reason of the expense</label>
                    <textarea rows={5} name="reason" value={newExpense.reason} onChange={handleTodoChanges}
                              className="w-full p-2 active:border-blue-600 focus:outline-blue-600 focus:border-blue-600 rounded"
                              placeholder="enter the amount" aria-required="true" required={true}/>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <input type="submit" value="Save"
                           className="rounded bg-blue-600 h-[150%] active:bg-blue-700 text-white"/>
                    <input type="reset" value="cancel & clean"
                           className="rounded bg-gray-600 h-[150%] active:bg-gray-700 text-white"/>
                </div>
            </form>
        </main>
    )
}