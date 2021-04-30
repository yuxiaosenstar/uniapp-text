/*
 * @Author: 余畅畅
 * @Date: 2021-04-30 14:26:11
 * @LastEditTime: 2021-04-30 14:40:12
 * @LastEditors: 余畅畅
 * @Description: 
 * @FilePath: \my-new-test01\src\components\my-input\my-pass-input.ts
 * 
 */

import { Component, Emit, Vue, Watch } from 'vue-property-decorator'

/**
 * 密码输入框
 */
@Component
export default class MyPassInput extends Vue {
  public value = ''
  public showClearIcon = false
  public isActive = false
  public isPass = true

  /**
   * 清楚输入框
   */
  public clearInput() {
    this.value = ''
    this.showClearIcon = false
  }

  /**
   * 切换密码框显示
   */
  public togglePass() {
    this.isPass = !this.isPass
  }

  /**
   * 失焦
   */
  public onBulr() {
    // 优先触发其他事件
    setTimeout(() => {
      this.isActive = false
      this.showClearIcon = false
    })
  }

  /**
   * 聚焦
   */
  public onFocus() {
    this.isActive = true
    this.showClearIcon = !!this.value
  }

  @Watch('value')
  public onContChanged(val: string) {
    this.showClearIcon = !!val
    this.deal(val)
  }

  @Emit('changeValue')
  private deal(val: string) {
    return val
  }
}
