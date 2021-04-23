<!--
 * @Author: 余畅畅
 * @Date: 2021-04-23 17:56:35
 * @LastEditTime: 2021-04-23 18:34:43
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \my-new-test01\src\pages\login\login.vue
 *
-->
<template>
  <view class="container">
    <view class="title">
      欢迎使用联华鲸采
      <br />
      团购小程序
    </view>
    <view class="phonenumber">
      <view class="num">+86</view>
      <input type="text" placeholder="请输入手机号" />
    </view>
    <view class="password">
      <input type="password" placeholder="请输入密码" />
    </view>
  </view>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  padding: 32rpx 80rpx 148rpx;

  input {
    font-family: PingFangSC-Regular, PingFang SC;
    font-size: 36rpx;
    color: #ccc;
    height: 100%;
  }

  .title {
    width: 590rpx;
    height: 134rpx;
    font-size: 48rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333;
    line-height: 67rpx;
  }

  .phonenumber {
    box-sizing: border-box;
    margin-top: 80rpx;
    margin-bottom: 24rpx;
    width: 590rpx;
    height: 96rpx;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    .num {
      flex: 1;
      font-size: 32rpx;
      color: #FDC548;
    }
    input {
      flex: 5;
    }
  }

  .password {
    width: 590rpx;
    height: 96rpx;
    border-bottom: 1px solid #ccc;
  }
}
</style>
