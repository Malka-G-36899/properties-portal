import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRequiredPropertiesThunk=createAsyncThunk(
    'getRequiredProperties',
    async(customerId)=>{
        console.log(customerId);
        const res=await fetch(`https://localhost:7033/api/PropertiesForPurchase/getPropertiesForPurchaseByCustomerCode/${customerId}`)
        if(res.ok)
            {const data=await res.json();
                console.log(data);
            return data;}
            else throw new Error("faild to fetch");
    }
)