'use client'

import {NewBankCard} from "@/app/lib/models/newBankCard";
import {ChangeEvent, useState} from "react";
import {BankCard} from "@/app/lib/models/bankCard";
import Swal from 'sweetalert2'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell
} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import CardTable from "@/app/components/cardTable";

export default function Page() {
    const crd: NewBankCard = {
        cardNumber: '',
        sold: 0.0,
        isActive: true,
        addedOn: new Date()
    }

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
        alert(card, "data sent")
        onOpenChange()

        setNewCard(crd)
    }

    const alert = (data: any, message: string) => {
        Swal.fire({
            title: "Good job!",
            text: `${message} : ${JSON.stringify(data)}`,
            icon: "success"
        }).then(() => console.log('done'))
    }


    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-3xl">Cards - Management</h1>
            <Button color="primary" variant="solid" className="my-4" onPress={onOpen}>Add new card</Button>
            <CardTable cards={cards}/>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 mx-5">Bank Card informations</ModalHeader>
                            <ModalBody>
                                <form action={saveCard} className="grid gap-5 w-full px-5">
                                    <div className="grid grid-cols-1 gap-2">
                                        <label>Card Number</label>
                                        <input
                                            className="w-full p-2 outline outline-1 active:border-blue-600 focus:outline-blue-600 rounded"
                                            type="text" name="cardNumber" value={newCard.cardNumber}
                                            onChange={handleTodoChanges}
                                            placeholder="enter the amount" aria-required="true" required={true}/>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2">
                                        <label>Sold ( $ )</label>
                                        <input
                                            className="w-full p-2 outline outline-1 focus:border-none focus:outline-blue-600 rounded"
                                            type="number" name="sold" value={newCard.sold}
                                            onChange={handleTodoChanges}
                                            placeholder="enter the amount" aria-required="true" required={true}/>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <input type="submit" value="Save"
                                               className="rounded bg-blue-600 h-[150%] active:bg-blue-700 text-white"/>
                                        <input type="reset" value="cancel & clean"
                                               className="rounded bg-gray-600 h-[150%] active:bg-gray-700 text-white"/>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </main>
    )
}