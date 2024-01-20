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
import { PrivateRoute } from "./PrivateRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/account"
        element={
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        }
      />
      <Route
        path="/deposit"
        element={
          <PrivateRoute>
            <Deposit />
          </PrivateRoute>
        }
      />
      <Route
        path="/withdraw"
        element={
          <PrivateRoute>
            <Withdraw />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/transaction"
        element={
          <PrivateRoute>
            <Transaction />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
