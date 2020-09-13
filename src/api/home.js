/*
 * @Author: x
 * @Date: 2020-07-08 16:12:32
 * @LastEditors: x
 * @LastEditTime: 2020-07-17 12:51:08
 * @Description: 发送请求
 * @FilePath: \vue-base\src\api\home.js
 */

import { post } from '@/utils/request'

export const getDemoData = (data = {}) => {
  return post('user/login', data)
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       success: true,
  //       data: {
  //         name: 'x',
  //       }
  //     })
  //   }, 2000)
  // })
}
