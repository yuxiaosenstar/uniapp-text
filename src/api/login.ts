/*
 * @Author: 余畅畅
 * @Date: 2021-04-25 16:38:29
 * @LastEditTime: 2021-05-06 10:09:48
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \new-projects\my-new-test01\src\api\login.ts
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
  return fly
    .post(`${apiv1}/user/login`, { appId, ...params })
    .then(res => res.data)
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

/**
 * 校检验证码
 * @param params
 * @returns
 */
export function checkCode(params: { code: string; mobile: string }) {
  return fly.post(`${apiv1}/verificationCode/checkAndLogin`, { appId, ...params }).then(res => res)
}
