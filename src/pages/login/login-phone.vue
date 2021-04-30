<template>
  <view class="container">
    <view class="title">
      <view>欢迎使用联华鲸采</view>
      <view>团购小程序</view>
    </view>
    <MyNumInput @changeValue="setPhonenumber" />
    <button @click="toCode" class="login-btn" :disabled="isDisabled">获取短信验证码</button>
    <view class="phone-code-login">
      <navigator url="./login">
        <text>账号密码登录</text>
      </navigator>
    </view>
    <view class="footer">
      <text>仅供杭州联华华商集团及其合作公司的内部员使用</text>
    </view>
  </view>
</template>

<script lang="ts" src="./login-phone"></script>

<style lang="scss">
.container {
  padding: 32rpx 80rpx;

  .title {
    font-size: 48rpx;
    font-weight: 500;
    color: #333;
  }

  .login-btn {
    color: #333333;
    font-weight: 500;
    font-size: 28rpx;
    height: 88rpx;
    margin-top: 91rpx;
    line-height: 88rpx;
    border: none;
    border-radius: 44rpx;
    background-color: #fdc548;

    &::after {
      border: none;
    }

    &[disabled] {
      font-weight: 400;
      color: #65686f;
      background-color: #f7f7f7;
    }
  }

  .phone-code-login {
    color: #fdc548;
    font-size: 28rpx;
    height: 40rpx;
    line-height: 40rpx;
    text-align: center;
    margin-top: 48rpx;
  }

  .footer {
    font-size: 24rpx;
    text-align: center;
    color: #949494;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 80rpx;
  }
}
</style>
