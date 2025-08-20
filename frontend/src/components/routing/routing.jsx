// import { Routes, Route, useNavigate } from "react-router-dom"
// import { Login } from "../login/login"
// import { Logon } from "../logon/logon"
// import { Home } from "../home/home"
// import { RequiredProperties } from "../requiredProperties/requiredProperties"
// import { PropertiesForSale } from "../propertiesForSale/propertiesForSale"
// import { FavoriteProperties } from "../favoriteProperties/favoriteProperties"
// import { Search } from "../search/search"
// import { Welcome } from "../welcome/welcome"
// import { About } from "../about/about"

// export const Routing = () => {

//     return <div>
//         <Routes>
//             <Route path={'/welcome'} element={<Welcome />} />
//             <Route path={'/about'} element={<About />} />
//             <Route path={'/'} element={<Login />} />
//             <Route path={'/login'} element={<Login />} />
//             <Route path={'/logon'} element={<Logon />} />
//             <Route path={'/home'} element={<Home />}>
//                 <Route path={'requiredProperties'} element={<RequiredProperties />}></Route>
//                 <Route path={'propertiesForSale'} element={<PropertiesForSale />} />
//                 <Route path={'favoriteProperties'} element={<FavoriteProperties />} />
//                 <Route path={'search'} element={<Search />} />
//             </Route>
//             {/* <Route path={'/requiredProperties'} element={<RequiredProperties/>}/>  
//         <Route path={'/propertiesForSale'} element={<PropertiesForSale/>}/> 
//         <Route path={'/favoriteProperties'} element={<FavoriteProperties/>}/>
//         <Route path={'/search'} element={<Search/>}/> */}
//         </Routes></div>

// }
// Routing.js
import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Login } from "../login/login";
import { Logon } from "../logon/logon";
import { Home } from "../home/home";

import { PropertiesForSale } from "../propertiesForSale/propertiesForSale";

import { Search } from "../search/search";



import Welcome from "../welcome/welcome";
import About from "../about/about";
import { RequiredProperties } from "../requiredProperties/requiredProperties";
import FavoriteProperties from "../favoriteProperties/favoriteProperties";


export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path={"/welcome"} element={<Welcome />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/"} element={<Welcome />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/logon"} element={<Logon />} />
        <Route path={"/home"} element={<Home />}>
          <Route path={"requiredProperties"} element={<RequiredProperties />} />
          <Route path={"propertiesForSale"} element={<PropertiesForSale />} />
          <Route path={"favoriteProperties"} element={<FavoriteProperties />} />
          <Route path={"search"} element={<Search />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};