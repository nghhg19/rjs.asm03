import { configureStore } from "@reduxjs/toolkit";
import PopupSlice from "./slice/PopupSlice";
import dataReducer from "../redux/slice/ProductSlice";
import CountSlice from "./slice/CountSlice";
import UserSlice from "./slice/UserSlice";
import CartSlice from "./slice/CartSlice";

const store = configureStore({
  reducer: {
    popup: PopupSlice,
    products: dataReducer,
    count: CountSlice,
    user: UserSlice,
    carts: CartSlice,
  },
});

export default store;
