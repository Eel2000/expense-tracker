import {UUID} from "node:crypto";

export type Expense = {
    id: UUID,
    cardId: UUID
    cardNumber: string
    expenseDate: Date,
    amount: number,
    reason: string,
    isActive: boolean
}