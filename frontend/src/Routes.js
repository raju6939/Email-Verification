import React from "react";
import { BrowserRouter, Routes as RoutesAlt, Route } from "react-router-dom";

//Importing Components
import Home from "./components/Home/home";
import Otp from "./components/OTP/Otp";
import Form from "./components/Form/form";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesAlt>
        <Route path='/' exact element={<Form/>} />
        <Route path='/home' exact element={<Home/>} />
        <Route path='/otp' exact element={<Otp/>} />
      </RoutesAlt>
    </BrowserRouter>
  );
};

export default Routes;
