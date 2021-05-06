/*
 * @Author: 余畅畅
 * @Date: 2021-05-06 09:38:27
 * @LastEditTime: 2021-05-06 10:01:17
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \new-projects\my-new-test01\src\pages\user\user.ts
 *
 */

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class User extends Vue {
  public username = ''
  public address = ''

  onLoad() {
    this.username = uni.getStorageSync('username')
    this.address = uni.getStorageSync('address')
  }
}
