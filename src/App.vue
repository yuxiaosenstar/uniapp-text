<script>
import Vue from 'vue'
export default {
  mpType: 'app',
  onLaunch() {
    let sysdata = uni.getSystemInfoSync()
    // #ifndef MP
    Vue.prototype.StatusBar = sysdata.statusBarHeight
    if (sysdata.platform === 'android') {
      Vue.prototype.CustomBar = (sysdata.statusBarHeight || 0) + 50
    } else {
      Vue.prototype.CustomBar = (sysdata.statusBarHeight || 0) + 45
    }
    // #endif
    // #ifdef MP-WEIXIN
    Vue.prototype.StatusBar = sysdata.statusBarHeight
    let custom = wx.getMenuButtonBoundingClientRect()
    Vue.prototype.Custom = custom
    Vue.prototype.CustomBar = custom.bottom + custom.top - sysdata.statusBarHeight
    // #endif
    // #ifdef MP-ALIPAY
    Vue.prototype.StatusBar = sysdata.statusBarHeight
    Vue.prototype.CustomBar = sysdata.statusBarHeight + sysdata.titleBarHeight
    // #endif

    /// 自定义Tabbar的高度，处理iphonex以外的，统一设置成高度50
    let modelmes = sysdata.model
    if (
      modelmes.indexOf('iPhone X') >= 0 ||
      modelmes.indexOf('iPhone XR') >= 0 ||
      modelmes.indexOf('iPhone XS') >= 0 ||
      modelmes.indexOf('iPhone 12') >= 0 ||
      modelmes.indexOf('iPhone 11') >= 0 ||
      modelmes.indexOf('iPhone11') >= 0 ||
      modelmes.indexOf('iPhone12') >= 0 ||
      modelmes.indexOf('iPhoneXR') >= 0 ||
      modelmes.indexOf('iPhoneX') >= 0
    ) {
      Vue.prototype.safeAreaBottom = 84
    } else {
      Vue.prototype.safeAreaBottom = 50
    }
  },
  onUnload() {},
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  },
  methods: {}
}
</script>

<style lang="scss">
/*每个页面公共css */
@import 'components/hdcss/common.scss';
</style>
