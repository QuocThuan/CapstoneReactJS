import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TOKEN, USER_LOGIN } from "../../util/config";

//xử lý load giá trị ban đầu cho state từ localstorage
let userLoginDefault = {
  email: "",
  accessToken: "",
};

if (localStorage.getItem(USER_LOGIN)) {
  userLoginDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
  userLogin: userLoginDefault,
  isLogin: false,
  arrProduct: [],
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
    logOutAction: (state, action) => {
      state.userLogin = { email: "", accessToken: "" };
      state.isLogin = false;
    },
  },
});

export const { loginAction, logOutAction, loginFacebookAction } =
  UserReducers.actions;

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
export const logoutApiAction = (userLogin) => {
  return async (dispatch) => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER_LOGIN);
    const action = logOutAction();
    dispatch(action);
  };
};
