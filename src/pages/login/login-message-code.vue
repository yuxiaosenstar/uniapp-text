<template>
  <view class="container">
    <hd-toast />
    <view class="title">
      <text>输入验证码</text>
    </view>
    <view class="phone-number">
      <text v-cloak>验证码已发送至 +86 {{ phonenumber }}</text>
    </view>
    <valueCode @finish="login" />
    <view class="count-down">
      <text v-show="count > 0" v-cloak>{{ count }} 秒后重新获取验证码</text>
      <text v-show="count === 0" class="recapture" @click="recaptureCode">重新获取验证码</text>
    </view>
  </view>
</template>

<script lang="ts" src="./login-message-code"></script>

<style lang="scss">
.container {
  padding: 32rpx 80rpx;

  .title {
    margin-top: 99rpx;
    font-size: 48rpx;
    font-weight: 500;
    color: #333;
  }

  .phone-number {
    margin-top: 16rpx;
    font-size: 28rpx;
    color: #333;
    margin-bottom: 24rpx;
  }

  .count-down {
    color: #65686f;
    font-size: 28rpx;
    margin-top: 93rpx;

    .recapture {
      color: #fdc548;
    }
  }
}
</style>
