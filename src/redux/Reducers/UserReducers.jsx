import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TOKEN, USER_LOGIN } from "../../services/config";

//xử lý load giá trị ban đầu cho state từ localstorage
let userLoginDefault = {
  email: "",
  accessToken: "",
};
let userRegisterDefault = {
  email: "",
  password: "",
  name: "",
  gender: "",
  phone: "",
};

if (localStorage.getItem(USER_LOGIN)) {
  userLoginDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
  userLogin: userLoginDefault,
  isLogin: false,
  arrProduct: [],
  userRegister: userRegisterDefault,
  productFavourite: [],
};
const UserReducers = createSlice({
  name: "UserReducers",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
      state.isLogin = true;
    },
    loginFacebookAction: (state, action) => {
      //state.userLogin = action.payload;
      state.isLogin = true;
    },
    setArrayProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    registerAction: (state, action) => {
      state.userRegister = action.payload;
    },
    logOutAction: (state, action) => {
      state.userLogin = { email: "", accessToken: "" };
      state.isLogin = false;
    },
    setProductFavoriteAction: (state, action) => {
      console.log(action.payload);
      state.productFavourite = action.payload;
    },
  },
});

export const {
  loginAction,
  logOutAction,
  loginFacebookAction,
  setArrayProductAction,
  registerAction,
  setProductFavoriteAction,
} = UserReducers.actions;

export default UserReducers.reducer;

// action thunk

export const loginApiAction = (userLogin) => {
  return async (dispatch) => {
    try {
      //call api login
      const res = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: {
          email: userLogin.email,
          password: userLogin.password,
        },
      });
      //Sau khi có được token thì lưu vào storage
      localStorage.setItem(TOKEN, res.data.content.accessToken);
      localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content));
      //gửi dữ liệu sau khi thành công vào reducer
      const action = loginFacebookAction(res.data.content);
      dispatch(action);
      window.location.href = "/";
    } catch (error) {
      if (error.response?.status === 404) {
        alert("Tài khoản hoặc mật khẩu không đúng !");
        window.location.href = "/login";
        //history.push("/login");
      }
    }
  };
};
export const loginApiFacebookAction = (response) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
        method: "POST",
        data: {
          facebookToken: response.accessToken,
        },
      });
      console.log("res", res);
      localStorage.setItem(TOKEN, res.data.content.accessToken);
      localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content));
      const action = loginFacebookAction(res.data.content);
      dispatch(action);
      window.location.href = "/";
    } catch (error) {
      if (error.response?.status === 404) {
        alert("Đăng nhập bằng facebook thất bại");
        window.location.href = "/login";
      }
    }
  };
};
export const getAllProductApiAction = () => {
  return async (dispatch) => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    //sau khi có dữ liệu
    const action = setArrayProductAction(res.data.content);
    dispatch(action);
  };
};
export const registerApiAction = (userRegister) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: {
          email: userRegister.email,
          password: userRegister.password,
          name: userRegister.name,
          gender: userRegister.gender,
          phone: userRegister.phone,
        },
      });
      const action = registerAction(res.data.content);
      dispatch(action);

      alert(res.data.message);
      window.location.href = "/login";
    } catch (error) {
      if (error.response?.status === 400) {
        alert("Email đã tồn tại !");
        window.location.href = "/register";
      }
    }
  };
};
export const logoutApiAction = (userLogin) => {
  return async (dispatch) => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER_LOGIN);
    const action = logOutAction();
    dispatch(action);
  };
};

export const getProductFavouriteApiAction = (userLogin) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getproductfavorite",
        method: "GET",
        headers: {
          Authorization: `Bearer ${userLogin.accessToken}`,
        },
      });
      console.log(res);

      // const action = setProductFavoriteAction(
      //   res.data.content?.productsFavorite
      // );

      dispatch(setProductFavoriteAction(res.data.content?.productsFavorite));
    } catch (error) {
      if (error.response.status === 401) {
        console.log("Đăng nhập để có danh sách sản phẩm yêu thích", error);
      }
    }
  };
};
