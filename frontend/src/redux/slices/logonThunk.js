import { createAsyncThunk } from "@reduxjs/toolkit";

export const logonThunk = createAsyncThunk(
    'logonThunk',
    async (customer) => {
        debugger
        const res = await fetch(`https://localhost:7033/api/Customers/addCustomer`, {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );
        if (res.ok) {
            const data = await res.json();
            return data;
        }
        else {
            throw new Error('faild to fetch');
        }
    }
)