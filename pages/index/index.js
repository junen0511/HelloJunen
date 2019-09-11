const app = getApp();
import { fetchHotList } from "./service";

Page({
  data: {
    tabs: ["热榜", "为你推荐"],
    activeIndex: 0,
    windowWidth: 0,
    statusBarHeight: 0,
    tabPadding: 85,
    sliderOffset: 0,
    sliderLeft: 0,
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
  async getHotList(listQuery) {
    const { hotMaps } = this.data;
    const response = await fetchHotList(listQuery);
    const { list, current, pageSize } = response.data;
    this.setData(
      {
        hotMaps: [...hotMaps, ...list],
        listQuery: {
          current,
          pageSize
        }
      },
      function() {
        this.setData({
          isEnding: list.length === 0
        });
      }
    );
  }
});
