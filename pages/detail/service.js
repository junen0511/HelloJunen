import request from "../../utils/request";

export function fetchHotInfo(data) {
  return request({
    url: "/api/hot/info_hotid",
    method: "GET",
    data
  });
}
