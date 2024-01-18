import React from "react";
import { Route, Routes } from "react-router-dom";

import { LandingPage } from "../Pages/LandingPage";
import { Account } from "../Pages/Account";
import { Deposit } from "../Pages/Deposit";
import { Withdraw } from "../Pages/Withdraw";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { Profile } from "../Pages/Profile";
import { Transaction } from "../Pages/Transaction";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  );
};
