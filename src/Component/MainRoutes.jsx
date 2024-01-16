import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { LandingPage } from "../Pages/LandingPage";
import { Account } from "../Pages/Account";
import { Deposit } from "../Pages/Deposit";
import { Withdraw } from "../Pages/Withdraw";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};