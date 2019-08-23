const Numeral = require("numeral");
import hotMaps from "../../data/hotMaps";
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

    this.setData({
      hotMaps: hotMaps.map(item => ({
        ...item,
        heatNum: Numeral(item.heatNum)
          .divide(10000)
          .value()
      }))
    });
  },
  tabTap(e) {
    const activeIndex = e.currentTarget.dataset.index;
    const sliderOffset = e.currentTarget.offsetLeft;

    this.setData({
      activeIndex,
      sliderOffset
    });
  },
  onSwiperChange(e) {
    const windowWidth = this.data.windowWidth;
    const tabsLength = this.data.tabs.length;
    const tabPadding = this.data.tabPadding;
    const activeIndex = e.detail.current;
    const sliderOffset = activeIndex > 0 ? windowWidth / tabsLength - tabPadding : 0;

    this.setData({
      activeIndex,
      sliderOffset
    });
  }
});
