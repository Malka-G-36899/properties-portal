import { createAsyncThunk } from "@reduxjs/toolkit";

export const addPropertyFoFavoriteListThunk=createAsyncThunk(
    'addPropertyFoFavoriteList',
    async ({customerCode,propertyCode}) => {

                const res = await fetch(`https://localhost:7033/api/Customers/addPropertyToFavoriteListByCustomerCodeAndPropertyCode/${customerCode}/${propertyCode}`, {
                    method: 'POST',
                    body: JSON.stringify(),
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