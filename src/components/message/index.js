/*
 * @Author: imthelin
 * @since: 2021-03-25 14:47:25
 * @lastTime: 2021-03-25 14:50:26
 * @LastAuthor: Do not edit
 * @FilePath: /tiny-ui/src/components/message/index.js
 * @Description:
 */
import Message from './main.js'
export default {
  install(Vue, options = {}) {
    console.log(options)
    Vue.prototype.$message = Message
  }
}
