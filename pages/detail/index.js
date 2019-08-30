const Numeral = require("numeral");
const app = getApp();

Page({
  data: {
    statusBarHeight: 0,
    topicDescUnfold: false,
    rankIsNewest: true,
    responseMap: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  onLoad() {
    const statusBarHeight = app.globalData.statusBarHeight;
    this.setData({
      statusBarHeight
    });
  },
  tapUnfold() {
    this.setData({
      topicDescUnfold: true
    });
  },
  tapRankSwitch() {
    const rankIsNewest = this.data.rankIsNewest;
    this.setData({
      rankIsNewest: !rankIsNewest
    });
  }
});
