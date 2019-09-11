import request from"../utils/request";

export function userLogin(data) {
  return request({
    url: "/api/login",
    method: "POST",
    data
  });
}
