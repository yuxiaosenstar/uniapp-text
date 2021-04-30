<template>
  <view :class="['password', 'input-box', isActive ? 'active' : '']">
    <input v-model="value" @focus="onFocus" @blur="onBulr" @input="onInput" :password="isPass" placeholder="请输入密码" />
    <view v-show="showClearIcon" class="clear-btn" @click="clearInput"></view>
    <view :class="['eye', isPass ? 'close' : 'open']" @click="togglePass"></view>
  </view>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      value: store.state.password,
      showClearIcon: false,
      isActive: false,
      isPass: true
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
    /**
     * 切换密码框显示
     */
    togglePass() {
      this.isPass = !this.isPass
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
    onInput(e) {
      this.showClearIcon = !!this.value
    }
  },
  watch: {
    value() {
      store.commit('setPassword', this.value)
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
