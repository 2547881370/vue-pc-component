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
