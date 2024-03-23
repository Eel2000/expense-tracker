'use client'

import {NewBankCard} from "@/app/lib/models/newBankCard";
import {ChangeEvent, useEffect, useState} from "react";
import {BankCard} from "@/app/lib/models/bankCard";
import Swal from 'sweetalert2'
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import CardTable from "@/app/components/cardTable";
import {addCard, getCards} from "@/app/lib/services/cardService";

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

    useEffect(() => {
        performDataLoad().then(() => console.log("loaded cards"))
    }, []);

    const performCreation = async (card: NewBankCard) => {
        addCard(card)
            .then(() => {
                alert("new card was added")
            }).then(() => {
            performDataLoad().then(() => console.log("data refreshed"))
        }).catch((error) => {
            Swal.fire({
                title: "E-Tracker",
                text: error,
                icon: "error"
            })
        })
    }

    const performDataLoad = async () => {
        getCards()
            .then(data => {
                setCards([...data])
            })
            .catch((error) => {
                Swal.fire({
                    title: "E-Tracker",
                    text: error,
                    icon: "error"
                })
            })
    }

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

        performCreation(newCard).then(() => {
            setNewCard(crd)
            onOpenChange()
        })
    }

    const alert = (message: string, type: string = "success") => {
        Swal.fire({
            title: "E-Tracker",
            text: message,
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