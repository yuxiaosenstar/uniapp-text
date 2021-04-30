/*
 * @Author: 余畅畅
 * @Date: 2021-04-30 13:56:35
 * @LastEditTime: 2021-04-30 14:41:17
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \my-new-test01\src\components\my-input\my-num-input.ts
 *
 */

import { Component, Emit, Vue, Watch } from 'vue-property-decorator'

/**
 * 数字输入框
 */
@Component
export default class MyNumInput extends Vue {
  public value: string = ''
  public showClearIcon: boolean = false
  public isActive: boolean = false

  /**
   * 清楚输入框
   */
  public clearInput() {
    this.value = ''
    this.showClearIcon = false
  }

  public onBulr() {
    // 优先触发其他事件
    setTimeout(() => {
      this.isActive = false
      this.showClearIcon = false
    })
  }

  public onFocus() {
    this.isActive = true
    this.showClearIcon = !!this.value
  }

  @Watch('value')
  onContChanged(val: string) {
    this.deal(val)
    this.showClearIcon = !!val
  }

  @Emit('changeValue')
  private deal(val: string) {
    return val
  }
}
