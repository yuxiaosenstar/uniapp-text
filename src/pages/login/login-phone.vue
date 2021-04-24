<template>
  <view class="container">
    <view class="title">
      <view>欢迎使用联华鲸采</view>
      <view>团购小程序</view>
    </view>
    <view :class="['phonenumber', 'input-box', isNumberActive ? 'active' : '']">
      <view class="num">+86</view>
      <input
        maxlength="11"
        @focus="isNumberActive = true"
        @blur="isNumberActive = false"
        v-model="phonenumber"
        type="number"
        placeholder="请输入手机号"
      />
      <view v-show="phonenumber" class="clear-btn" @click="clearInput('phonenumber')"></view>
    </view>
    <button @click="login" class="login-btn" :disabled="phonenumber.length < 11">获取短信验证码</button>
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

<script>
export default {
  data() {
    return {
      isPass: true,
      phonenumber: '',
      isNumberActive: false
    }
  },
  methods: {
    togglePass() {
      this.isPass = !this.isPass
    },
    clearInput(input) {
      this[input] = ''
    },
    login() {
      uni.navigateTo({
        url: '../login/login-message-code'
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 32rpx 80rpx;

  input {
    font-size: 36rpx;
    height: 100%;
  }

  .title {
    font-size: 48rpx;
    font-weight: 500;
    color: #333;
  }

  .input-box {
    height: 96rpx;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    position: relative;
    box-sizing: border-box;

    &.active {
      caret-color: #fdc548;
      border-bottom-color: #fdc548;
    }

    .clear-btn {
      position: absolute;
      right: 0;
      width: 48rpx;
      height: 48rpx;
      background: no-repeat 100%/100% url(@/assets/close.png);
    }
  }

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
