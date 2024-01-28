import axios from "axios";
export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";

export const https = axios.create({
  baseURL: "https://shop.cyberlearn.vn",
});

https.interceptors.request.use(
  (config) => {
    //xử lý config: object mà request gửi đi
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
