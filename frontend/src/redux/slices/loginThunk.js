import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk=createAsyncThunk(
    'login',
    async({name,password}) =>{
        console.log("name "+name+" password "+password);
        const res=await fetch(`https://localhost:7033/api/Customers/getCustomerByPasswordAndName/${name}/${password}`)
        if(res.ok){
          if(res.status===204){
            return null;
          }
          else{const data=await res.json();
            console.log("fetch success login");
            console.log(data);
            return data;}
        }
        else throw new Error("faild to fetch");
    }

)