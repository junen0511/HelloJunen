import { Login, isLogin } from "./global/user";

//app.js
App({
  onLaunch: function() {
    // 登录
    wx.login({
      success: async res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const { code } = res;
        const data = await Login({ code });
      }
    });

    let that = this;
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
