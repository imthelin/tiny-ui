/* * @Author: imthelin * @since: 2021-03-25 14:48:49 * @lastTime: 2021-03-25
14:49:05 * @LastAuthor: Do not edit * @FilePath:
/tiny-ui/src/components/message/icon.js * @Description: */
<script>
const prefixCls = 'the-icon'
export default {
  name: 'the-icon',
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  props: {
    iconType: {
      type: String,
      default: 'info'
    }
  },
  render: function(h) {
    return h(
      'i',
      {
        attrs: {
          class: `${this.prefixCls}`
        }
      },
      [
        h('img', {
          attrs: {
            src: require(`../../assets/logo.png`),
            class: 'icon'
          }
        })
      ]
    )
  }
}
</script>
<style scoped lang="scss">
.the-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  color: #fff;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 15px;
  & .icon {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>
