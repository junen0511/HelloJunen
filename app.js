import { getOpenid } from "./global/user";
import { setOpenid } from "./utils/util";

//app.js
App({
  onLaunch: function() {
    let that = this;

    // 登录
    wx.login({
      success: async res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const { code } = res;
        const { openid } = await getOpenid({ code });
        setOpenid(openid);
      }
    });

    wx.getSystemInfo({
      success: function(res) {
        const windowWidth = res.windowWidth;
        const statusBarHeight = res.statusBarHeight;
        that.globalData = { ...that.globalData, windowWidth, statusBarHeight };
      }
    });
  },
  globalData: {
    windowWidth: 0,
    statusBarHeight: 0
  }
});
