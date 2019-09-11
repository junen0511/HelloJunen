import config from "../config";

function request({ url, method, data }) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.API_HOST + url,
      method,
      data,
      success({ data }) {
        if (data && !data.status) {
          wx.showToast({
            title: `${data.data.message}`,
            icon: "none",
            duration: 2000
          });
        }
        resolve(data);
      },
      fail: () => {
        reject();
      }
    });
  });
}

export default request;
