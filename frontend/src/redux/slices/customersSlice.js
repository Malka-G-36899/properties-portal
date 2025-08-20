import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./loginThunk";
import { logonThunk } from "./logonThunk";
import { getPropertiesForSaleThunk } from "./getPropertiesForSaleThunk";
import { getRequiredPropertiesThunk } from "./getRequiredPropertiesThunk";
import { addRequiredPropertyThunk } from "./addRequiredProperty";
import { addPropertyForSaleThunk } from "./addPropertyForSaleThunk";
import { getFavoritePropertiesThunk } from "./getFavoritePropertiesThunk";
import { deleteRequiredPropertyThunk } from "./deleteRequiredPropertyThunk";
import { deletePropertyForSaleThunk } from "./deletePropertyForSaleThunk";
import { searchPropertiesThunk } from "./searchPropertiesThunk";
import { removePropertyFromFavoriteListThunk } from "./removePropertyFromFavoriteListThunk";
import { updateRequiredPropertyThunk } from "./updateRequiredPropertyThunk";
import { addPropertyFoFavoriteListThunk } from "./addPropertyFoFavoriteListThunk";
import { updatePropertyForSaleThunk } from "./updatePropertyForSaleThunk";

export const INITIAL_CUSTOMER = {
  user: {},
  customer_id: 0,
  customer_name: "",
  // customer_credit_card_nuber:"",
  // customer_cvv:"",
  // customer_valid_thru:"",
  customer_month_price: 0,
  // customer_email:"",
  customer_password: "",
  propertiesForPurchases: [],
  propertyForSales: [],
  favoriteProperties:null,
  propertiesFromSearch: null,
  price_for_advertisement_property: 6
}

export const customersSlice = createSlice({
  name: 'customers',
  initialState: INITIAL_CUSTOMER,
  reducers: {
    editNameAndPassword: (state, action) => {
      console.log("editNameAndPassword");
      state.customer_name = action.payload.name;
      state.customer_password = action.payload.password;
    },
    editMonthPrice: (state) => {
      console.log("editMonthPrice");
      state.customer_month_price += state.price_for_advertisement_property;
      console.log(sessionStorage.getItem("userPrice"));
      console.log(sessionStorage.getItem("userPrice") + state.price_for_advertisement_property);
      sessionStorage.setItem("userPrice", Number(sessionStorage.getItem("userPrice")) + Number(state.price_for_advertisement_property));
      console.log(sessionStorage.getItem("userPrice"));
    },
    editMonthPriceN: (state) => {
      console.log("editMonthPrice");
      state.customer_month_price -= state.price_for_advertisement_property;
      console.log(sessionStorage.getItem("userPrice"));
      console.log(sessionStorage.getItem("userPrice") + state.price_for_advertisement_property);
      sessionStorage.setItem("userPrice", Number(sessionStorage.getItem("userPrice")) - Number(state.price_for_advertisement_property));
      console.log(sessionStorage.getItem("userPrice"));
    }
  },
  extraReducers: (builder) => {
    //login
    //הוספת מקרה שהטנק מתחיל
    builder.addCase(loginThunk.pending, (state) => {

    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      if (action.payload) {
        sessionStorage.setItem("userName", action.payload.customerName);
        sessionStorage.setItem("userId", action.payload.customerId);
        sessionStorage.setItem("userPrice", action.payload.customerMonthPrice);
        // state.customer_month_price = action.payload.customerMonthPrice;
      }
      // state.isLogin=false;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(loginThunk.rejected, (state) => {

    });
    //logon
    //הוספת מקרה שהטנק מתחיל
    builder.addCase(logonThunk.pending, (state) => {

    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(logonThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      if (action.payload) {
        sessionStorage.setItem("userName", action.payload.customerName);
        sessionStorage.setItem("userId", action.payload.customerId);
        sessionStorage.setItem("userPrice", action.payload.customerMonthPrice);
        // state.customer_month_price = action.payload.customerMonthPrice;
      }
      // state.isLogin=false;

      // sessionStorage.setItem("userName",action.payload.customerName);
      // state.isLogin=false;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(logonThunk.rejected, (state) => {
    });
    //getPropertiesForSale
    //הוספת מקרה שהטנק מתחיל
    builder.addCase(getPropertiesForSaleThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(getPropertiesForSaleThunk.fulfilled, (state, action) => {
      state.propertyForSales = action.payload;
      // sessionStorage.setItem("userName",action.payload.customerName);
      // state.isLogin=false;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(getPropertiesForSaleThunk.rejected, (state) => {
    });
    //getRequiredPropertiesThunk
    //הוספת מקרה שהטנק מתחיל
    builder.addCase(getRequiredPropertiesThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(getRequiredPropertiesThunk.fulfilled, (state, action) => {
      state.propertiesForPurchases = action.payload;
      // sessionStorage.setItem("userName",action.payload.customerName);
      // state.isLogin=false;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(getRequiredPropertiesThunk.rejected, (state) => {
    });
    //addRequiredPropertyThunk
    //הוספת מקרה שהטנק מתחיל
    builder.addCase(addRequiredPropertyThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(addRequiredPropertyThunk.fulfilled, (state, action) => {
      state.propertiesForPurchases = action.payload;
      // sessionStorage.setItem("userName",action.payload.customerName);
      // state.isLogin=false;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(addRequiredPropertyThunk.rejected, (state) => {
    });
    //addPropertyForSaleThunk
    //הוספת מקרה שהטנק מתחיל
    builder.addCase(addPropertyForSaleThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(addPropertyForSaleThunk.fulfilled, (state, action) => {
      state.propertyForSales = action.payload;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(addPropertyForSaleThunk.rejected, (state) => {
    });
    //getFavoritePropertiesThunk
    //הוספת מקרה שהטנק מתחיל
    builder.addCase(getFavoritePropertiesThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(getFavoritePropertiesThunk.fulfilled, (state, action) => {
      state.favoriteProperties = action.payload;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(getFavoritePropertiesThunk.rejected, (state) => {
    });
    //deleteRequiredPropertyThunk
    //הוספת מקרה שהטנק מתחיל
    builder.addCase(deleteRequiredPropertyThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(deleteRequiredPropertyThunk.fulfilled, (state, action) => {
      if (action.payload != null)
        state.propertiesForPurchases = action.payload;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(deleteRequiredPropertyThunk.rejected, (state) => {
    });
    //deletePropertyForSaleThunk
    //הוספת מקרה שהטנק מתחיל
    builder.addCase(deletePropertyForSaleThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(deletePropertyForSaleThunk.fulfilled, (state, action) => {
      if (action.payload != null)
        state.propertyForSales = action.payload;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(deletePropertyForSaleThunk.rejected, (state) => {
    });
    //searchPropertiesThunk
    builder.addCase(searchPropertiesThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(searchPropertiesThunk.fulfilled, (state, action) => {
      if (action.payload != null)
        state.propertiesFromSearch = action.payload;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(searchPropertiesThunk.rejected, (state) => {
    });
    //removePropertyFromFavoriteListThunk
    builder.addCase(removePropertyFromFavoriteListThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(removePropertyFromFavoriteListThunk.fulfilled, (state, action) => {
      if (action.payload != null)
        state.favoriteProperties = action.payload;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(removePropertyFromFavoriteListThunk.rejected, (state) => {
    });
    //updateRequiredPropertyThunk
    builder.addCase(updateRequiredPropertyThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(updateRequiredPropertyThunk.fulfilled, (state, action) => {
      if (action.payload != null)
        state.propertiesForPurchases = action.payload;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(updateRequiredPropertyThunk.rejected, (state) => {
    });
    //updatePropertyForSaleThunk
    builder.addCase(updatePropertyForSaleThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(updatePropertyForSaleThunk.fulfilled, (state, action) => {
      if (action.payload != null)
        state.propertyForSales = action.payload;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(updatePropertyForSaleThunk.rejected, (state) => {
    });
    //addPropertyFoFavoriteListThunk
    builder.addCase(addPropertyFoFavoriteListThunk.pending, (state) => {
    });
    //הוספת מקרה שהטנק הצליח
    builder.addCase(addPropertyFoFavoriteListThunk.fulfilled, (state, action) => {
      if (action.payload != null)
      state.favoriteProperties = action.payload;
    });
    //הוספת מקרה שהטנק נכשל
    builder.addCase(addPropertyFoFavoriteListThunk.rejected, (state) => {
    });
  }
})
export const { editNameAndPassword, editMonthPrice, editMonthPriceN } = customersSlice.actions;