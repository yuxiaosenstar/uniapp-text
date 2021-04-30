<template>
  <view :class="['password', 'input-box', isActive ? 'active' : '']">
    <input v-model="value" @focus="onFocus" @blur="onBulr" :password="isPass" placeholder="请输入密码" />
    <view v-show="showClearIcon" class="clear-btn" @click="clearInput"></view>
    <view :class="['eye', isPass ? 'close' : 'open']" @click="togglePass"></view>
  </view>
</template>

<script lang="ts" src="./my-pass-input"></script>

<style lang="scss">
@import './input.scss';

.password {
  padding-right: 96rpx;
  input {
    width: 100%;
  }

  .eye {
    position: absolute;
    right: 0;
    width: 48rpx;
    height: 48rpx;
    &.open {
      background: no-repeat 100%/100% url(@/assets/eye-open.png);
    }
    &.close {
      background: no-repeat 100%/100% url(@/assets/eye-close.png);
    }
  }

  .clear-btn {
    right: 48rpx;
  }
}
</style>
