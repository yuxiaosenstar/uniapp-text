/*
 * @Author: 余畅畅
 * @Date: 2021-04-25 16:38:29
 * @LastEditTime: 2021-04-25 18:02:37
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \my-new-test01\src\api\login.ts
 *
 */
import fly from '@/network/fly'
import config from '@/config'

const { tenant, appId } = config
const apiv1 = `/v1/${tenant}/gp/app`

/**
 * 登录接口
 * @param param
 * @returns
 */
export function login(params: { mobile: string; password: string }) {
  return fly.post(`${apiv1}/user/login`, { appId, ...params }).then(res => res)
}

/**
 * 获取验证码
 * @param params
 * @returns
 */
export function sendCode(params: { mobile: string }) {
  return fly
    .post(`${apiv1}/verificationCode/send`, {
      appId,
      ...params
    })
    .then(res => res)
}
