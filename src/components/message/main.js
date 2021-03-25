/*
 * @Author: imthelin
 * @since: 2021-03-25 14:51:32
 * @lastTime: 2021-03-25 15:27:12
 * @LastAuthor: Do not edit
 * @FilePath: /tiny-ui/src/components/message/main.js
 * @Description:
 */
import Vue from 'vue'
import msgTemplate from './message.vue'

/*
根据 vue 模板去 extend 一个子类出来,
参考 extend 说明： https://cn.vuejs.org/v2/api/#Vue-extend
*/
const msgConstructor = Vue.extend(msgTemplate)

let nId = 1

const Message = options => {
  if (JSON.stringify(options) == undefined) return false
  let id = 'messageInstance-' + nId++
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  // 传入 options 覆盖 data 的一些属性
  const msgInstance = new msgConstructor({
    data: options
  })
  msgInstance.id = id
  msgInstance.vm = msgInstance.$mount()
  msgInstance.vm.visible = true
  msgInstance.dom = msgInstance.vm.$el
  document.body.appendChild(msgInstance.dom)
  return msgInstance.vm
}

;['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})
export default Message
