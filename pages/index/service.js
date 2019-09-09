const request = require("../../utils/request");

exports.fetchHotList = function(data) {
  return request({
    url: "/api/hot/list",
    method: "POST",
    data
  });
};
