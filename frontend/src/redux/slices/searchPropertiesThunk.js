import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchPropertiesThunk=createAsyncThunk(
    'searchProperties',
    async(propertyCode)=>{
        console.log(propertyCode);
        const res=await fetch(`https://localhost:7033/api/PropertiesForSale/getPropertiesForSaleByPropertyCode/${propertyCode}`)
        if(res.ok)
        {const data=await res.json();
            console.log(data);
        return data;}
        else throw new Error("faild to fetch");
}
)