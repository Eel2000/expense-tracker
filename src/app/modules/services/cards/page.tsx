'use client'

import {NewBankCard} from "@/app/lib/models/newBankCard";
import {ChangeEvent, useState} from "react";
import {BankCard} from "@/app/lib/models/bankCard";
import Swal from 'sweetalert2'

export default function Page() {
    const crd: NewBankCard = {
        cardNumber: '',
        sold: 0.0,
        isActive: true,
        addedOn: new Date()
    }

    const [newCard, setNewCard] = useState<NewBankCard>(crd)
    const [cards, setCards] = useState<BankCard[]>([])

    const handleTodoChanges = (event: ChangeEvent<any>) => {
        event.preventDefault()

        setNewCard((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const saveCard = (form: FormData) => {
        let card = {
            cardNumber: form.get('cardNumber'),
            sold: form.get('sold')
        }

        // console.log(`before ${expense}`)

        setNewCard({
            cardNumber: card.cardNumber as string,
            addedOn: new Date(Date.now()),
            sold: Number(card.sold as string),
            isActive: true
        })

        console.log(card)

    }

    const openForm = () => {
        Swal.fire({
            title:'<div>text</div>',
            html:'<div>' +
                '<input type="search" class="rounded border-1 outline-amber-200">' +
                '</div>',
            allowOutsideClick: false
        }).catch((error) => console.log(error))
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>cards</h1>
            <button onClick={openForm}>test</button>
            <form action={saveCard} className="grid gap-5 w-[60%]">
                <div className="grid grid-cols-1 gap-2">
                    <label>Card Number</label>
                    <input className="w-full p-2 active:border-blue-600 focus:outline-blue-600 rounded"
                           type="text" name="cardNumber" value={newCard.cardNumber} onChange={handleTodoChanges}
                           placeholder="enter the amount" aria-required="true" required={true}/>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <label>Sold ( $ )</label>
                    <input className="w-full p-2 focus:border-none focus:outline-blue-600 rounded"
                           type="number" name="sold" value={newCard.sold} onChange={handleTodoChanges}
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