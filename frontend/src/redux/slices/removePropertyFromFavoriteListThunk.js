import { createAsyncThunk } from "@reduxjs/toolkit";

export const removePropertyFromFavoriteListThunk=createAsyncThunk(
    'removePropertyFromFavoriteList',
    async ({customerCode,propertyCode}) => {
        console.log("removePropertyFromFavoriteList");
        console.log(customerCode);
        console.log(propertyCode);
        const res = await fetch(`https://localhost:7033/api/Customers/removePropertyFromFavoriteListByCustomerCodeAndPropertyCode/${customerCode}/${propertyCode}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            debugger
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
