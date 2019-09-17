import request from "../utils/request";

export function fetchOpenid(data) {
  return request({
    url: "/api/auth/get_openid",
    method: "POST",
    data
  });
}

export function saveUserInfo(data) {
  return request({
    url: "/api/auth/save_user",
    method: "POST",
    data
  });
}
