const app = getApp();

Page({
  data: {
    tabs: ["热榜", "为你推荐"],
    activeIndex: 0,
    windowWidth: 0,
    statusBarHeight: 0,
    tabPadding: 85,
    sliderOffset: 0,
    sliderLeft: 0,
    isLoading: true,
    isEnding: false,
    listQuery: {
      current: 1,
      pageSize: 10
    },
    hotMaps: []
  },
  onLoad() {
    let sliderWidth = 36;
    const tabsLength = this.data.tabs.length;
    const tabPadding = this.data.tabPadding;
    const windowWidth = app.globalData.windowWidth;
    const statusBarHeight = app.globalData.statusBarHeight;

    this.setData({
      windowWidth,
      statusBarHeight,
      sliderLeft: (windowWidth / tabsLength - sliderWidth) / 2 + tabPadding / 2,
      sliderOffset: (windowWidth / tabsLength) * this.data.activeIndex
    });

    const { listQuery } = this.data;
    this.getHotList(listQuery);
  },
  tabTap(e) {
    const activeIndex = e.currentTarget.dataset.index;
    const sliderOffset = e.currentTarget.offsetLeft;
    if (this.data.activeIndex !== activeIndex) {
      this.setData({
        activeIndex,
        sliderOffset
      });
    }
  },
  onSwiperChange(e) {
    const windowWidth = this.data.windowWidth;
    const tabsLength = this.data.tabs.length;
    const tabPadding = this.data.tabPadding;
    const activeIndex = e.detail.current;
    const sliderOffset =
      activeIndex > 0 ? windowWidth / tabsLength - tabPadding : 0;

    this.setData({
      activeIndex,
      sliderOffset
    });
  },
  onScrollEnd() {
    let { current, pageSize } = this.data.listQuery;
    current++;
    this.getHotList({ current, pageSize });
  },
  getHotList(queryForm) {
    const that = this;
    const { hotMaps } = this.data;
    wx.request({
      url: "http://mp.annajunen.top/api/hot/list",
      method: "POST", //仅为示例，并非真实的接口地址
      data: queryForm,
      success(res) {
        const { current, list, pageSize } = res.data.data;
        const isEnding = list.length === 0;
        that.setData(
          {
            isLoading: false,
            isEnding,
            hotMaps: [...hotMaps, ...list],
            listQuery: {
              current,
              pageSize
            }
          },
          () => {
            that.setData({
              isLoading: true
            });
          }
        );
      }
    });
  }
});
