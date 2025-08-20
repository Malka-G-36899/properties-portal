import { createAsyncThunk } from "@reduxjs/toolkit";


export const updatePropertyForSaleThunk = createAsyncThunk(
    'updatePropertyForSale',
    async (property) => {
        debugger
        console.log(property);
        const res = await fetch(`https://localhost:7033/api/PropertiesForSale/updateProperty`, {
            method: 'PUT',
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
