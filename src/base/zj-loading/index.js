/*
 * @Author: 子君
 * @Date: 2020-06-22 15:44:52
 * @LastEditors: 子君
 * @LastEditTime: 2020-06-23 18:07:44
 * @Description: 文件说明
 * @FilePath: \glink-eai-portal-mobile\src\base\gld-loading\index.js
 */
import Vue from 'vue'

import { Loading } from 'element-ui'

let loadingInstance = undefined

function loading() {
  loadingInstance = Loading.service()
  return loadingInstance
}

export default {
  install() {
    Vue.prototype.$loading = loading
  },
  service: loading
}
