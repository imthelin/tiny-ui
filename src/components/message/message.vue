<!--
 * @Author: imthelin
 * @since: 2021-03-25 14:47:16
 * @lastTime: 2021-03-25 14:50:12
 * @LastAuthor: Do not edit
 * @FilePath: /tiny-ui/src/components/message/message.vue
 * @Description: 
-->
<template>
  <transition name="the-message-fade">
    <div v-if="visible" :class="wrapClasses">
      <Icon :iconType="type"></Icon>
      <span :class="[prefixCls + '-content']">
        {{ message }}
      </span>
    </div>
  </transition>
</template>

<script>
const prefixCls = 'the-message'
import Icon from './icon.vue'
export default {
  name: 'the-message',
  data() {
    return {
      visible: false,
      type: 'info',
      message: '',
      duration: 1500,
      prefixCls: prefixCls
    }
  },
  components: {
    Icon: Icon
  },
  computed: {
    wrapClasses() {
      return [`${prefixCls}`, `${prefixCls}-${this.type}`]
    }
  },
  methods: {
    setTimer() {
      setTimeout(() => {
        this.close() // 3000ms之后调用关闭方法
      }, this.duration)
    },
    close() {
      this.visible = false
      setTimeout(() => {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
      }, 500)
    }
  },
  mounted() {
    this.setTimer() // 挂载的时候就开始计时，3000ms后消失
  }
}
</script>
