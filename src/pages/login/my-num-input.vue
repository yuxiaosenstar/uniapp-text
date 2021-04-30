<template>
  <view :class="['phonenumber', 'input-box', isActive ? 'active' : '']">
    <view class="num">+86</view>
    <input @focus="onFocus" @blur="onBulr" @input="onInput" v-model="value" type="number" placeholder="请输入手机号" maxlength="11" />
    <view v-show="showClearIcon" class="clear-btn" @click="clearInput"></view>
  </view>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      value: store.state.phonenumber,
      showClearIcon: false,
      isActive: false
    }
  },
  methods: {
    /**
     * 清楚输入框
     */
    clearInput() {
      this.value = ''
      this.showClearIcon = false
    },
    onBulr() {
      // 优先触发其他事件
      setTimeout(() => {
        this.isActive = false
        this.showClearIcon = false
      })
    },
    onFocus() {
      this.isActive = true
      this.showClearIcon = !!this.value
    },
    onInput() {
      this.showClearIcon = !!this.value
    }
  },
  watch: {
    value() {
      store.commit('setPhoneNumber', this.value)
    }
  }
}
</script>

<style lang="scss">
input {
  font-size: 36rpx;
  height: 100%;
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
</style>
