const app = getApp();

Page({
  data: {
    statusBarHeight: 0
  },
  onLoad() {
    const statusBarHeight = app.globalData.statusBarHeight;
    this.setData({
      statusBarHeight
    });
  }
});
