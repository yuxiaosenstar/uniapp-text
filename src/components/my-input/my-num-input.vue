<template>
  <view :class="['phonenumber', 'input-box', isActive ? 'active' : '']">
    <view class="num">+86</view>
    <input @focus="onFocus" @blur="onBulr" v-model="value" type="number" placeholder="请输入手机号" maxlength="11" />
    <view v-show="showClearIcon" class="clear-btn" @click="clearInput"></view>
  </view>
</template>

<script lang="ts" src="./my-num-input"></script>

<style lang="scss">
@import './input.scss';

.phonenumber {
  margin-top: 80rpx;
  margin-bottom: 24rpx;
  padding-left: 93rpx;
  padding-right: 48rpx;
  .num {
    position: absolute;
    left: 0;
    font-size: 32rpx;
    color: #fdc548;
  }
  input {
    width: 100%;
  }
}
</style>
