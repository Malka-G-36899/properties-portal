import { createAsyncThunk } from "@reduxjs/toolkit";

export const addRequiredPropertyThunk = createAsyncThunk(
    'addRequiredProperty',
    async ({property,price}) => {
console.log(property);
console.log(price);
        const res = await fetch(`https://localhost:7033/api/PropertiesForPurchase/addPropertiesForPurchaseByCustomerCode/${price}`, {
            method: 'POST',
            body: JSON.stringify(property),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            return data;
        }
        else throw new Error("faild to fetch");
    }
)