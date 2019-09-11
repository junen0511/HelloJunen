import config from "../config";
import { userLogin } from "./service";

export async function Login(formData) {
  const { data } = await userLogin(formData);
  wx.setStorageSync(config.USER_SESSION_KEY, data.session_key);
  return data;
}

export function isLogin() {
  return wx.getStorageSync(config.USER_SESSION_KEY) !== "";
}
