import axios from "axios";
import {
  DEPOSITE_ERROR,
  DEPOSITE_LOADING,
  DEPOSITE_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  PIN_ERROR,
  PIN_LOADING,
  PIN_SUCCESS,
  SIGNUP_LOADING,
  SINGUP_ERROR,
  SINGUP_SUCCESS,
  WITHDRAWAL_ERROR,
  WITHDRAWAL_LOADING,
  WITHDRAWAL_SUCCESS,
} from "./actionTypes";
import { toast } from "react-toastify";

let baseURL = "https://mobile-banking-backend.onrender.com";

export const UserLogin = (value) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  return axios
    .post(`${baseURL}/user/login`, value)
    .then((res) => {
      console.log(res.data);
      if (res.data.msg === "Invalid Credentials.") {
        toast.error("Invalid credentials");
      } else if (res.data.msg === "User doesnt exist, please register.") {
        toast.error("User doesnt exist, please register.");
      } else {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        toast.success("Login Sucessful");
      }
    })
    .catch((err) => {
      dispatch({ type: LOGIN_ERROR });
      toast.error(err);
      console.log(err);
    });
};

export const UserSignup = (value) => (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  return axios
    .post(`${baseURL}/user/register`, value)
    .then((res) => {
      console.log(res.data);
      if (res.data.msg === "User Already Exist") {
        toast.error("User Already Exist");
      } else if (res.data.msg === "Register Sucessful") {
        dispatch({ type: SINGUP_SUCCESS, payload: res.data });
        toast.success("Signup Sucessful");
      }
    })
    .catch((err) => {
      dispatch({ type: SINGUP_ERROR });
      toast.error(err);
      console.log(err);
    });
};

export const Deposite_Money =
  ({ data, token }) =>
  async (dispatch) => {
    dispatch({ type: DEPOSITE_LOADING });

    try {
      const response = await axios.post(`${baseURL}/trans/deposit`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        dispatch({ type: DEPOSITE_SUCCESS, payload: response.data.userData });
        console.log(response.data);
        toast.success("Deposite Successfull");
      } else {
        dispatch({
          type: DEPOSITE_ERROR,
        });
        toast.error("Something went wrong");
      }
    } catch (error) {
      dispatch({
        type: PIN_ERROR,
      });
      toast.error(error);
      console.error("Error:", error);
    }
  };

export const Withdraw_Money =
  ({ data, token }) =>
  async (dispatch) => {
    dispatch({ type: WITHDRAWAL_LOADING });

    try {
      const response = await axios.post(`${baseURL}/trans/withdraw`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        dispatch({ type: WITHDRAWAL_SUCCESS, payload: response.data.userData });
        console.log(response.data);
        toast.success("Withdrawal Successfull");
      } else {
        dispatch({
          type: WITHDRAWAL_ERROR,
        });
        toast.error("Something went wrong");
      }
    } catch (error) {
      dispatch({
        type: PIN_ERROR,
      });
      toast.error(error);
      console.error("Error:", error);
    }
  };

export const Pin_update =
  ({ updatePin, token }) =>
  async (dispatch) => {
    dispatch({ type: PIN_LOADING });

    try {
      const response = await axios.post(
        `${baseURL}/trans/pin`,
        { updatePin: updatePin },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        dispatch({ type: PIN_SUCCESS, payload: updatePin });
        toast.success("Pin Updated Successfully");
      } else {
        dispatch({
          type: PIN_ERROR,
        });
        toast.error("Something went wrong");
      }
    } catch (error) {
      dispatch({
        type: PIN_ERROR,
      });
      toast.error(error);
      console.error("Error:", error);
    }
  };

export const Logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
  toast.success("Logout Successfull");
};
