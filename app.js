import { Login, isLogin } from "./global/user";

//app.js
App({
  onLaunch: function() {
    console.log(123, isLogin());
    // 登录
    // wx.login({
    //   success: async res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     const { code } = res;
    //     const data = await Login({ code });
    //     console.log(123, data);
    //   }
    // });

    wx.checkSession({
      success() {
        //session_key 未过期，并且在本生命周期一直有效
        console.log("success");
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        console.log("error");
      }
    });

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          });
        }
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
    userInfo: null,
    windowWidth: 0,
    statusBarHeight: 0
  }
});
