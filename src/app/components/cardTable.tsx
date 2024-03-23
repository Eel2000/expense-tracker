import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip} from "@nextui-org/react";
import {BankCard} from "@/app/lib/models/bankCard";
import React from "react";
import {DeleteIcon, EditIcon, EyeIcon} from "@nextui-org/shared-icons";

export default function CardTable({cards}: { cards: BankCard[] }) {

    const formatDate = (date: string) => {
        let dateToForma = new Date(date)
        return dateToForma.toDateString()
    }

    return (
        <Table removeWrapper aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>NUMBER</TableColumn>
                <TableColumn>SOLD</TableColumn>
                <TableColumn>ADDED DATE</TableColumn>
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
                                <div className="relative flex items-center gap-2">
                                    <Tooltip content="Details">
                                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                        <EyeIcon/>
                                      </span>
                                    </Tooltip>
                                    <Tooltip content="Edit card">
                                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                        <EditIcon/>
                                      </span>
                                    </Tooltip>
                                    <Tooltip color="danger" content="Delete card">
                                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                        <DeleteIcon/>
                                      </span>
                                    </Tooltip>
                                </div>
                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    )
}