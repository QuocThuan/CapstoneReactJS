import axios from "axios";
export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";


export const https = axios.create({
  baseURL: "https://shop.cyberlearn.vn",

});

