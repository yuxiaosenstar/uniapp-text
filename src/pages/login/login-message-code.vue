<template>
  <view class="container">
    <view class="title">
      <text>输入验证码</text>
    </view>
    <view class="phone-number">
      <text>验证码已发送至 +86 133 8191 9377</text>
    </view>
    <view class="code">
      <input
        :focus="item.active === 'active'"
        :ref="'input' + index"
        @focus="item.active = 'active'"
        @blur="item.active = ''"
        :class="item.active"
        v-for="(item, index) in codeArr"
        maxlength="1"
        type="number"
        v-model="item.value"
        :key="index"
      />
    </view>
    <view class="count-down">
      <text v-show="count > 0">{{ count }} 秒后重新获取验证码</text>
      <text v-show="count === 0" class="recapture" @click="recaptureCode">重新获取验证码</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      count: 59,
      codeArr: [
        { value: '', active: '' },
        { value: '', active: '' },
        { value: '', active: '' },
        { value: '', active: '' }
      ]
    }
  },
  mounted() {
    // 默认第一个
    this.codeArr[0].active = 'active'
    this.minusCount()
  },
  methods: {
    minusCount() {
      let timer = setInterval(() => {
        if (this.count === 0) {
          clearInterval(timer)
        } else {
          this.count -= 1
        }
      }, 1000)
    },
    recaptureCode() {
      this.count = 59
      this.minusCount()
    }
  }
}
</script>

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
  }

  .code {
    margin-top: 24rpx;
    height: 96rpx;
    display: flex;
    justify-content: space-between;

    input {
      flex: 1;
      height: 100%;
      border-bottom: 1rpx solid #ccc;
      margin-right: 64rpx;
      text-align: center;
      font-size: 48rpx;

      &:last-child {
        margin-right: 0;
      }

      &.active {
        caret-color: #fdc548;
        border-bottom-color: #fdc548;
      }
    }
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
