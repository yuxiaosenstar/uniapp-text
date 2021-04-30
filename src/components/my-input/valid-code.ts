/*
 * @Author: 余畅畅
 * @Date: 2021-04-30 16:04:51
 * @LastEditTime: 2021-04-30 16:12:09
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \my-new-test01\src\components\my-input\valid-code.ts
 *
 */
import { Component, Emit, Vue, Watch, Prop } from 'vue-property-decorator'

@Component
export default class ValidCode extends Vue {
  // 最大长度 值为4或者6
  @Prop({ default: 4, type: Number }) public maxlength!: number
  // 是否是密码
  @Prop({ default: false, type: Boolean }) public isPwd!: boolean

  // 下标
  public codeIndex: number = 1
  public codeArr: Array<string> = []
  // 输入框的值
  public val: string = ''

  /**
   * 取值
   * @param e
   */
  getVal(e) {
    let { value } = e.detail
    this.val = value
    // console.log('验证码:', value);
    let arr = value.split('')
    this.codeIndex = arr.length + 1
    this.codeArr = arr
    // console.log(this.codeIndex, this.pwdArr);
    if (this.codeIndex > Number(this.maxlength)) {
      // 输入完成
      this.$emit('finish', this.codeArr.join(''))
    }
  }

  /**
   * 清除验证码或者密码
   */
  clear() {
    this.codeIndex = 1
    this.codeArr = []
    this.val = ''
  }
}
