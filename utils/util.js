import config from "../config";

export const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

export const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

export function setOpenid(openid) {
  wx.setStorageSync(config.USER_OPENID, openid);
}

export function getOpenid() {
  return wx.getStorageSync(config.USER_OPENID);
}

export function setScopeUserInfo(scopeValue) {
  wx.setStorageSync(config.SCOPE_USER_INFO, scopeValue);
}

export function getScopeUserInfo() {
  return wx.getStorageSync(config.SCOPE_USER_INFO);
}
