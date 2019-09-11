import request from "../../utils/request";

export function fetchHotList(data) {
  return request({
    url: "/api/hot/list",
    method: "POST",
    data
  });
}
