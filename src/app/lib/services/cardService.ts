import {BankCard} from "@/app/lib/models/bankCard";
import {NewBankCard} from "@/app/lib/models/newBankCard";

export async function getCards(): Promise<BankCard[]> {
    const response = await fetch(process.env.baseUrl + "Card/get")

    if (!response.ok) {
        console.log(response.statusText)
        return []
    } else {
        return response.json()
    }
}

export async function addCard(card: NewBankCard): Promise<any> {
    const response = await fetch(process.env.baseUrl + "Card/add",
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(card)
        })
    
    return response.ok;
}

export async function editOrDeleteCard(card: BankCard): Promise<any> {
    const response = await fetch(process.env.baseUrl + "Card/edit",
        {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(card)
        })
    
    return response.ok;
}