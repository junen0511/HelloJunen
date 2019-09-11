const app = getApp();
import { fetchHotInfo } from "./service";

Page({
  data: {
    statusBarHeight: 0,
    topicDescUnfold: false,
    rankIsNewest: true,
    hotInfo: "",
    responseMap: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  onLoad(options) {
    const statusBarHeight = app.globalData.statusBarHeight;
    const { hotId } = options;

    this.setData({
      statusBarHeight
    });

    this.getHotInfo(hotId);
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
  },
  async getHotInfo(hotId) {
    const { data } = await fetchHotInfo({ hotId });
    this.setData({
      hotInfo: data
    });
  }
});
