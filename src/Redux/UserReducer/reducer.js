import {
  DEPOSITE_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  PIN_SUCCESS,
  WITHDRAWAL_SUCCESS,
} from "./actionTypes";

let initialState = {
  name: "",
  email: "",
  mobile: "",
  balance: "",
  token: "",
  pin: "",
  transactions: [],
  isAuth: false,
  loading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: payload.Token,
        name: payload.User.name,
        email: payload.User.email,
        mobile: payload.User.mobile,
        balance: payload.User.balance,
        pin: payload.User.pin,
        transactions: payload.User.transactions,
      };
    case LOGIN_ERROR:
      return { ...state, isError: true, isAuth: false };
    case PIN_SUCCESS:
      return { ...state, pin: payload };
    case LOGOUT_SUCCESS:
      return { ...state, isAuth: false, token: "", name: "" };
    case DEPOSITE_SUCCESS:
      return {
        ...state,
        balance: payload.balance,
        transactions: payload.transactions,
      };
    case WITHDRAWAL_SUCCESS:
      return {
        ...state,
        balance: payload.balance,
        transactions: payload.transactions,
      };
    default:
      return { ...state };
  }
};
