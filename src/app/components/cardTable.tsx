import {
    Checkbox,
    Modal,
    ModalBody,
    ModalContent, ModalFooter, ModalHeader,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tooltip,
    useDisclosure
} from "@nextui-org/react";
import {BankCard} from "@/app/lib/models/bankCard";
import React, {ChangeEvent, useState} from "react";
import {CheckIcon, CloseIcon, DeleteIcon, EditIcon, EyeIcon, LockFilledIcon} from "@nextui-org/shared-icons";
import {Chip} from "@nextui-org/chip";
import {BiCross} from "react-icons/bi";
import {Button} from "@nextui-org/button";
import {editOrDeleteCard} from "@/app/lib/services/cardService";
import Swal from "sweetalert2";

export default function CardTable({cards, operation, refresh}: {
    cards: BankCard[],
    operation: (p: any) => any,
    refresh: () => any
}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    let crd: BankCard = {
        id: 'xxxx-xxxx-xxxx-xxxx-xxxx',
        sold: 0,
        addedOn: '',
        cardNumber: '',
        isActive: false
    }

    const [card, setCard] = useState<BankCard>(crd)
    const [active, setActive] = useState(false);
    const performEdition = async (c: BankCard) => {
        editOrDeleteCard(c).then((c) => {
            Swal.fire({
                title: "E-Tracker",
                text: 'operation completed successfully',
                icon: "success"
            }).then()
        }).catch((err) => {
            Swal.fire({
                title: "E-Tracker",
                text: err,
                icon: "error"
            }).then()
        })
    }

    const handleTodoChanges = (event: ChangeEvent<any>) => {
        event.preventDefault()

        setCard((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const formatDate = (date: string) => {
        let dateToForma = new Date(date)
        return dateToForma.toDateString()
    }

    const saveCard = (form: FormData) => {
        let cardForm = {
            cardNumber: form.get('cardNumber'),
            sold: form.get('sold')
        }

        let c = card;
        c.isActive = active
        console.log(c)
        // performEdition(card).then(() => {
        //     setCard(crd)
        //     refresh()
        //     onOpenChange()
        // })
    }

    const onEditRequested = (c: BankCard) => {
        Swal.fire({
            title: "E-Tracker",
            text: "Do you want to modify the card operations?",
            showDenyButton: true,
            confirmButtonText: "continue",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                setCard(c)
                setActive(c.isActive)
                onOpen()
            } else if (result.isDenied) {
                Swal.fire("Operation cancelled. Changes are not saved", "", "info");
            }
        });

    }

    const onShowRequested = (c: BankCard) => {
        Swal.fire({
            title: "E-Tracker",
            text: "Do you want to re-enable the current card",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "E-Tracker",
                    text: "Operation ongoing",
                    timerProgressBar: true,
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                        c.isActive = true;
                        performEdition(c).then(() => {
                            Swal.fire({
                                title: "E-Tracker",
                                text: "Operation completed",
                                icon: "success",
                                timer: 1000
                            }).then(()=>{
                                refresh()
                            })

                            Swal.close()
                        })
                    },
                    willClose: () => {

                    }
                }).then()
            }
        })
    }

    return (
        <>
            <Table removeWrapper aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>NUMBER</TableColumn>
                    <TableColumn>SOLD</TableColumn>
                    <TableColumn>ADDED DATE</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No data to display."}>
                    {
                        cards.map(c =>
                            <TableRow key={c.id}>
                                <TableCell>{c.cardNumber}</TableCell>
                                <TableCell>${c.sold}</TableCell>
                                <TableCell>{formatDate(c.addedOn)}</TableCell>
                                <TableCell>
                                    {c.isActive ?
                                        <Chip startContent={<CheckIcon fontSize={18}/>}
                                              variant="faded"
                                              color="success">
                                            On
                                        </Chip>
                                        :
                                        <Chip startContent={<CloseIcon fontSize={18}/>}
                                              variant="faded"
                                              color="danger">
                                            Off
                                        </Chip>
                                    }
                                </TableCell>
                                <TableCell>
                                    <div className="relative flex items-center gap-2">
                                        {
                                            !c.isActive?
                                            <Tooltip content="Show">
                                              <span onClick={() => onShowRequested(c)}
                                                    className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                <LockFilledIcon color="success"/>
                                              </span>
                                            </Tooltip>:<></>
                                        }
                                        {
                                            c.isActive ?
                                                <Tooltip content="Edit card">
                                                  <span onClick={() => onEditRequested(c)}
                                                        className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                    <EditIcon/>
                                                  </span>
                                                </Tooltip> : <></>
                                        }
                                        {
                                            c.isActive ?
                                                <Tooltip color="danger" content="Delete card">
                                                  <span
                                                      className="text-lg text-danger cursor-pointer active:opacity-50">
                                                    <DeleteIcon onClick={() => operation(c)}/>
                                                  </span>
                                                </Tooltip> : <></>
                                        }
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>

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
                                            type="text" name="cardNumber" value={card.cardNumber}
                                            onChange={handleTodoChanges}
                                            placeholder="enter the amount" aria-required="true" required={true}/>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2">
                                        <label>Sold ( $ )</label>
                                        <input
                                            className="w-full p-2 outline outline-1 focus:border-none focus:outline-blue-600 rounded"
                                            type="number" name="sold" value={card.sold}
                                            onChange={handleTodoChanges}
                                            placeholder="enter the amount" aria-required="true" required={true}/>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2">
                                        <label>Status</label>
                                        {/*<input*/}
                                        {/*    className="w-full p-2 outline outline-1 focus:border-none focus:outline-blue-600 rounded"*/}
                                        {/*    type="checkbox" name="isActive" checked={card.isActive}*/}
                                        {/*    onChange={handleTodoChanges}*/}
                                        {/*    placeholder="enter the amount" aria-required="true" required={true}/>*/}

                                        <Checkbox onValueChange={setActive} isSelected={active}>Status</Checkbox>
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
        </>
    )
}