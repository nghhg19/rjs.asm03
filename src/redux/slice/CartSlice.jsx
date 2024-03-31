import { createSlice } from "@reduxjs/toolkit";

const getCarts = JSON.parse(localStorage.getItem("carts")) || [];

const initialState = {
  listCarts: getCarts,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    ADD_CART: (state, action) => {
      const { cart } = action.payload;

      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const existingProduct = state.listCarts.find(
        (item) => item.cart.product === cart.product
      );

      if (existingProduct) {
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng
        existingProduct.cart.quantity += cart.quantity;
        existingProduct.cart.total += cart.price * cart.quantity;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
        state.listCarts.push(action.payload);
      }
      // state.listCarts =[]
      // Lưu giỏ hàng vào localStorage
      localStorage.setItem("carts", JSON.stringify(state.listCarts));
    },
    UPDATE_CART: (state, action) => {
      const uppdateCart = action.payload;
      console.log(uppdateCart);
      // Xử lý cập nhật giỏ hàng
      let viTri = state.listCarts.findIndex(
        (item) => item.cart.product === uppdateCart.cart.product
      );

      // Nếu object cũ tồn tại trong mảng, thì thay thế bằng object mới
      if (viTri !== -1) {
        state.listCarts[viTri] = uppdateCart;
      }
      localStorage.setItem("carts", JSON.stringify(state.listCarts));
    },
    DELETE_CART: (state, action) => {
      // Xử lý xóa sản phẩm khỏi giỏ hàng
      const delleteCart = action.payload;
      // Xử lý cập nhật giỏ hàng
      let viTri = state.listCarts.findIndex(
        (item) => item.cart.product === delleteCart
      );

      // Nếu object cũ tồn tại trong mảng, thì thay thế bằng object mới
      if (viTri !== -1) {
        state.listCarts.splice(viTri, 1);
      }
      localStorage.setItem("carts", JSON.stringify(state.listCarts));
    },
  },
});

export const { ADD_CART, UPDATE_CART, DELETE_CART } = CartSlice.actions;
export default CartSlice.reducer;
