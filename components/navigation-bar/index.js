Component({
  options: {
    multipleSlots: true
  },
  properties: {
    value: {
      type: String,
      value: "",
      observer: function(n, o) {
        this.setData({
          searchValue: n
        });
      }
    },
    type: {
      type: String,
      value: "default",
      observer: function(n, o) {
        this.setData({
          barType: n
        });
      }
    },
    title: {
      type: String,
      value: "",
      observer: function(n, o) {
        this.setData({
          barTitle: n
        });
      }
    },
    barHeight: {
      type: Number,
      value: 0,
      observer: function(n, o) {
        this.setData({
          topBarHeight: n
        });
      }
    }
  },
  data: {
    searchValue: "搜索热榜",
    topBarHeight: 0,
    barTitle: "",
    barType: "default"
  },
  methods: {
    tapSearch() {
      wx.navigateTo({ url: "/pages/search/index" });
    },
    tapBack() {
      wx.navigateBack({ delta: 1 });
    },
    tapHome() {
      wx.navigateTo({ url: "/pages/index/index" });
    }
  }
});
