const app = getApp();

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    searchKeyword: "",
    hotMap: [
      { id: 1, title: "亚马逊雨林大火" },
      { id: 2, title: "哪吒涉嫌抄袭五维记忆" },
      { id: 3, title: "EDG 3:1 击败 SN" },
      { id: 4, title: "如何挽回前男友" },
      { id: 5, title: "电影保持沉默上映" }
    ],
    historyMap: [
      { id: 1, title: "挽回前男友" },
      { id: 2, title: "沉默上映" },
      { id: 3, title: "亚马逊雨林大火" }
    ]
  },
  onLoad() {},
  tapBack() {
    wx.navigateBack({ delta: 1 });
  },
  onTapHotKeyword(e) {
    const { keyword } = e.currentTarget.dataset;
    this.setData({
      searchKeyword: keyword
    });
  },
  onTapDelete(e) {
    const { id } = e.target.dataset;
    const { historyMap } = this.data;
    this.setData({
      historyMap: historyMap.filter(item => item.id !== id)
    });
  },
  onTapDeleteAll() {
    this.setData({
      historyMap: []
    });
  }
});
