<template>
  <view class="user">
    <!--头部-->
    <view class="user-section">
      <image class="bg" src="/static/user-bg.png"></image>
      <!-- 用户信息 -->
      <view class="user-info">
        <image class="logo" src="/static/author.png" />
        <view class="info">
          <view class="row1">
            <text class="name">鲸小采</text>
            <view class="detail">
              <text>个人信息</text>
              <view class="btn"></view>
            </view>
          </view>
          <view class="row2">
            <text>上海海鼎信息工程股份有限公司</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 个人中心 内容区 -->
    <view class="user-container">
      <!-- 我的额度 -->
      <view class="user-limit">
        <view class="left">
          <image class="logo" src="/static/yue.png"></image>
          <text class="title">我的额度</text>
        </view>
        <view class="right">
          <text class="number">
            <text :style="{ fontSize: '24rpx', fontWeight: 400 }">￥</text>
            500.00
          </text>
          <view class="detail"></view>
        </view>
      </view>
      <!-- 我的服务 -->
      <view class="user-service">
        <view class="title">我的服务</view>
        <view class="content">
          <view class="one-service">
            <image class="logo" src="/static/bill.png"></image>
            <text>我的订单</text>
          </view>
          <view class="one-service">
            <image class="logo" src="/static/address.png"></image>
            <text>地理管理</text>
          </view>
          <view class="one-service">
            <image class="logo" src="/static/setting.png"></image>
            <text>设置</text>
          </view>
          <view class="one-service">
            <image class="logo" src="/static/info.png"></image>
            <text>关于</text>
          </view>
        </view>
      </view>
      <!-- 联系客服 -->
      <view class="user-help">
        <view class="left">
          <image class="logo" src="/static/service.png"></image>
          <text class="text">联系客服</text>
        </view>
        <view class="right">
          <view>
            <view class="number">0571-87238647</view>
            <view class="time">周一至周五 9:00～17:00</view>
          </view>
          <view class="detail"></view>
        </view>
      </view>
    </view>
    <!-- slogan -->
    <view class="footer">
      <image class="slogan" src="/static/slogan.png"></image>
    </view>
  </view>
</template>

<script>
export default {}
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
}

.user {
  .user-section {
    padding: 100rpx 24rpx 0;
    background-color: #333;
    height: 230rpx;
    position: relative;

    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 408rpx;
      opacity: 0.84;
    }

    .user-info {
      display: flex;
      align-items: center;
      height: 88rpx;

      .logo {
        margin-left: 18rpx;
        margin-right: 24rpx;
        width: 72rpx;
        height: 72rpx;
      }

      .info {
        flex: 1;
        height: 100%;

        .row1 {
          display: flex;
          align-items: center;

          .name {
            font-size: 36rpx;
            font-weight: 500;
            margin-right: 20rpx;
            color: #ffffff;
          }

          .detail {
            font-size: 20rpx;
            color: #949494;
            background: rgba(247, 247, 247, 0.1);
            height: 40rpx;
            line-height: 40rpx;
            padding-left: 12rpx;
            padding-right: 8rpx;
            border-radius: 21rpx;
            display: flex;
            align-items: center;

            .btn {
              width: 24rpx;
              height: 24rpx;
              background: no-repeat 100%/100% url('../../assets/more.png');
            }
          }
        }

        .row2 {
          font-size: 24rpx;
          color: #949494;
          margin-top: 9rpx;
        }
      }
    }
  }

  .user-container {
    padding: 0 24rpx;
    margin-top: -75px;
    position: relative;

    .user-limit {
      height: 144rpx;
      background: #ffffff;
      border-radius: 20rpx;
      margin-top: 42rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32rpx;

      .left {
        display: flex;
        align-items: center;

        .logo {
          width: 48rpx;
          height: 48rpx;
        }

        .title {
          margin-left: 12rpx;
          font-size: 28rpx;
        }
      }

      .right {
        display: flex;
        align-items: center;

        .number {
          color: #333333;
          font-size: 36rpx;
          font-weight: 500;
        }

        .detail {
          width: 48rpx;
          height: 48rpx;
          background: no-repeat 100%/100% url('../../assets/more-dark.png');
        }
      }
    }

    .user-service {
      margin-top: 24rpx;
      height: 288rpx;
      background: #ffffff;
      border-radius: 20rpx;

      .title {
        font-weight: 500;
        color: #333333;
        font-size: 32rpx;
        padding-left: 32rpx;
        height: 92rpx;
        line-height: 92rpx;
      }

      .content {
        display: flex;
        justify-content: space-between;
        height: 196rpx;
        text-align: center;
        padding: 24rpx 33rpx 0;
        box-sizing: border-box;

        .one-service {
          font-size: 24rpx;
          color: #333333;
          width: 156rpx;
          display: flex;
          flex-direction: column;
          align-items: center;
          .logo {
            width: 84rpx;
            height: 84rpx;
          }
        }
      }
    }

    .user-help {
      height: 140rpx;
      border-radius: 20rpx;
      background: #ffffff;
      margin-top: 24rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32rpx;

      .left {
        display: flex;
        align-items: center;
        .logo {
          width: 48rpx;
          height: 48rpx;
        }

        .text {
          margin-left: 12rpx;
          font-weight: 500;
          font-size: 28rpx;
          color: #333333;
        }
      }

      .right {
        display: flex;
        align-items: center;
        text-align: center;

        .number {
          font-size: 28rpx;
          font-weight: 500;
          color: #333333;
          letter-spacing: 1rpx;
        }

        .time {
          font-size: 20rpx;
          color: #949494;
        }

        .detail {
          margin-left: 6rpx;
          width: 48rpx;
          height: 48rpx;
          background: no-repeat 100%/100% url('../../assets/more-dark.png');
        }
      }
    }
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 160rpx;
    width: 100%;
    text-align: center;

    .slogan {
      width: 131rpx;
      height: 32rpx;
    }
  }
}
</style>
