import axios from "axios";
export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";

// const TokenCybersoft =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0OSIsIkhldEhhblN0cmluZyI6IjA2LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTY4MzIwMDAwMCIsIm5iZiI6MTY4MjYxNDgwMCwiZXhwIjoxNzA5ODMwODAwfQ.k43D4dhebGpNofw1VImBYXXnqBcxtrDhQaHzcaN4mr8";

export const https = axios.create({
  baseURL: "https://shop.cyberlearn.vn",
  // headers: {
  //   TokenCybersoft,
  //   Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('userLogin'))?.accessToken,

  // },
  // timeout: 1000,
});
