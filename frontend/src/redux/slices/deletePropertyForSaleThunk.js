import { createAsyncThunk } from "@reduxjs/toolkit";

export const deletePropertyForSaleThunk=createAsyncThunk(
    'deletePropertyForSaleThunk',
    async ({propertyCode,price}) => {
        console.log("deleteProperty" + propertyCode);
        const res = await fetch(`https://localhost:7033/api/PropertiesForSale/removePropertyByCode/${propertyCode}/${price}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            console.log("fetch success");
            if(res.status===204){
                return null;
              }
              else{const data=await res.json();
                console.log("fetch success login");
                console.log(data);
                return data;}
        } else {
            throw new Error('failed to fetch');
        }
    });  
