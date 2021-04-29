<template>
  <view class="container">
    <hd-toast />
    <view class="title">
      <view>欢迎使用联华鲸采</view>
      <view>团购小程序</view>
    </view>
    <view :class="['phonenumber', 'input-box', isNumberActive ? 'active' : '']">
      <view class="num">+86</view>
      <input
        @focus="isNumberActive = true"
        @blur="isNumberActive = false"
        v-model="phonenumber"
        type="number"
        placeholder="请输入手机号"
        maxlength="11"
      />
      <view v-show="phonenumber" class="clear-btn" @click="clearInput('phonenumber')"></view>
    </view>
    <view :class="['password', 'input-box', isPassActive ? 'active' : '']">
      <input @focus="isPassActive = true" @blur="isPassActive = false" v-model="password" :password="isPass" placeholder="请输入密码" />
      <view v-show="password" class="clear-btn" @click="clearInput('password')"></view>
      <view :class="['eye', isPass ? 'close' : 'open']" @click="togglePass"></view>
    </view>
    <button @click="login" class="login-btn" :disabled="!(phonenumber && password)">登录</button>
    <view class="phone-code-login">
      <navigator url="./login-phone">
        <text>手机验证码登录</text>
      </navigator>
    </view>
    <view class="footer">
      <text>仅供杭州联华华商集团及其合作公司的内部员使用</text>
    </view>
  </view>
</template>

<script>
import { login } from '@/api/login'
export default {
  data() {
    return {
      isPass: true,
      phonenumber: '',
      password: '',
      isNumberActive: false,
      isPassActive: false
    }
  },
  methods: {
    /**
     * 切换密码框显示
     */
    togglePass() {
      this.isPass = !this.isPass
    },
    /**
     * 清楚输入框
     */
    clearInput(input) {
      this[input] = ''
    },
    /**
     * 登录
     */
    login() {
      uni.showLoading({
        title: '登录中...'
      })
      login({
        mobile: this.phonenumber,
        password: this.password
      })
        .then(res => {
          uni.hideLoading()
          uni.switchTab({
            url: '/pages/user/user'
          })
        })
        .catch(err => {
          uni.showToast({
            title: err.message,
            icon: 'none'
          })
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
