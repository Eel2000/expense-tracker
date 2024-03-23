import {UUID} from "node:crypto";

export type BankCard = {
    id: UUID,
    cardNumber: string,
    sold: number,
    isActive: boolean
    addedOn: string
}