'use client'

import {ChangeEvent, useState} from "react";
import {NewExpense} from "@/app/lib/models/newExpense";
import {BankCard} from "@/app/lib/models/bankCard";
import {Select, SelectItem, Input, Textarea} from "@nextui-org/react";
import {Button} from "@nextui-org/button";

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
                    <input className="w-full p-2 h-[55px] bg-gray-100 hover:bg-gray-200 active:border-blue-600 focus:outline-0 rounded-xl"
                           type="number" name="amount" value={newExpense.amount} onChange={handleTodoChanges}
                           placeholder="0.00" aria-required="true" required={true}/>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <Input label="Date of expense" className="w-full focus:border-none focus:outline-blue-600 rounded"
                           type="date" name="expenseDate" value={newExpense.expenseDate} onChange={handleTodoChanges}
                           placeholder="enter the amount" aria-required="true" isRequired/>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <Select
                        isRequired
                        label="Bank card for"
                        placeholder="Select a card"
                        className="w-full">
                        {bankCards.map((card) => (
                            <SelectItem key={card.id} value={card.id}>
                                {card.cardNumber}
                            </SelectItem>
                        ))}
                    </Select>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <Textarea label="Reason of the expense" rows={5} name="reason" value={newExpense.reason} onChange={handleTodoChanges}
                              className="w-full active:border-blue-600 focus:outline-blue-600 focus:border-blue-600 rounded"
                              placeholder="enter the amount" aria-required="true" required isMultiline/>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <Button size="lg" variant="flat" type="submit" color="primary">Save</Button>
                </div>
            </form>
        </main>
    )
}