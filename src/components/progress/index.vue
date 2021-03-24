<template>
  <div
    :class="{ 'over-target': achieveValue >= targetValue }"
    class="outer-wrapper"
  >
    <div class="description-title"><span>整体续报率</span></div>
    <div class="progress-wrapper">
      <!-- 进度条区域 -->
      <div class="progress-inner-wrapper">
        <div class="progress-inner-content">
          <!-- 进度条 -->
          <div :style="achieveBar" class="progress-inner-bar" />
          <!-- 进度条指针 -->
          <div :style="achievePin" class="progress-inner-bar-pin" />
          <!-- 进度悬浮值 -->
          <div :style="achievePop" class="progress-inner-achieve-pop">
            <div class="progress-pop">
              <span>{{ achieveValue }}%</span>
            </div>
          </div>
          <!-- 目标悬浮值 -->
          <div :style="targetIndex" class="progress-inner-target">
            <div class="progress-target-mark" />
            <div class="target-pop">
              <span>{{ `目标续报率：${targetValue}%` }}</span>
            </div>
          </div>
          <!-- 左侧覆盖产生三角形 -->
          <div class="left-arrow-mask">
            <div class="left-arrow-mask-top" />
            <div class="left-arrow-mask-bottom" />
          </div>
          <!-- 右侧覆盖产生三角形 -->
          <div class="right-arrow-mask">
            <div class="right-arrow-mask-top" />
            <div class="right-arrow-mask-bottom" />
          </div>
        </div>
      </div>
      <!-- 底部渐变滤镜 -->
      <div class="progress-inner-filter">
        <div class="inside-filter" />
        <div class="out-filter" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    achieveValue: {
      type: Number,
      default: 0
    },
    targetValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  computed: {
    achieveBar() {
      return {
        width: this.achieveValue + '%'
      }
    },
    achievePop() {
      return {
        left: this.achieveValue + '%'
      }
    },
    achievePin() {
      return {
        left: `calc(${this.achieveValue}% - 1px)`
      }
    },
    targetIndex() {
      return {
        left: this.targetValue + '%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.outer-wrapper {
  height: 113px;
  width: 100%;
  position: relative;
  font-size: 14px;
  box-shadow: inset 0 0 25px rgba(50, 114, 187, 0.5);
  .description-title {
    position: absolute;
    bottom: 16px;
    left: 24px;
    color: #00ffff;
    font-weight: 400;
  }
  .progress-wrapper {
    position: absolute;
    width: 100%;
    height: 16px;
    top: 50%;
    margin-top: -8px;
    padding: 0 10px;
    box-sizing: border-box;
    .progress-inner-wrapper {
      // 两边伪元素小小箭头需要的保留宽度 46px
      width: calc(100% - 46px);
      height: 100%;
      margin: 0 auto;
      position: relative;
      .progress-inner-content {
        width: 100%;
        height: 100%;
        background: rgba(13, 27, 64, 0.7);
        position: relative;
        z-index: 3;
        border: 1px solid rgba(255, 255, 255, 0.14);
        .progress-inner-bar {
          height: 100%;
          position: absolute;
          background-image: linear-gradient(
            270deg,
            #cafbff 0%,
            rgba(21, 229, 255, 0.98) 7%,
            rgba(17, 159, 199, 0.93) 50%,
            rgba(9, 82, 166, 0.83) 100%
          );
          box-shadow: 0px 0px 12px 0px rgba(48, 255, 213, 0.37);
          transition-property: width, background-image;
          transition-duration: 2s;
          transition-timing-function: ease;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-image: linear-gradient(
              -45deg,
              rgba(255, 255, 255, 0.2) 25%,
              transparent 25%,
              transparent 50%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.2) 75%,
              transparent 75%,
              transparent 100%
            );
            z-index: 2;
            background-size: 30px 30px;
            border-radius: 20px 8px 8px 20px;
            overflow: hidden;
            animation: progress-move 2s linear infinite;
          }
          @keyframes progress-move {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 40px 50px;
            }
          }
        }
        .progress-inner-bar-pin {
          position: absolute;
          top: -5px;
          width: 2px;
          height: 26px;
          background: radial-gradient(#ffffff, transparent);
          z-index: 6;
          transition-property: left;
          transition-duration: 2s;
          transition-timing-function: ease;
        }
        .progress-inner-achieve-pop {
          position: absolute;
          // 移动到上方
          top: -33px;
          transition-property: left;
          transition-duration: 2s;
          transition-timing-function: ease;
          .progress-pop {
            // width: 40px;
            padding: 0 5px;
            // 移动自身宽度的一半
            left: -50%;
            height: 24px;
            line-height: 24px;
            position: relative;
            background: linear-gradient(270deg, #002a6e 0%, #0065de 100%);
            box-shadow: 0px 0px 6px 0px #4f83ff;
            border: 1px solid;
            border-image: radial-gradient(
                circle,
                rgba(169, 237, 255, 1),
                rgba(0, 154, 255, 1)
              )
              1 1;
            font-size: 16px;
            font-weight: bold;
            font-family: DINAlternate-Bold, DINAlternate;
            color: #ffffff;
            text-align: center;
            /*此处的边框大小会影响第二个三角形到顶部的偏移量，一般是1.4倍*/
          }
          &::before {
            content: '';
            position: absolute;
            top: 23px;
            left: -5px;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid rgba(0, 154, 255, 1);
          }
          &::after {
            content: '';
            position: absolute;
            top: 21px;
            left: -5px;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #143b79;
          }
        }
        .progress-inner-target {
          position: absolute;
          height: 100%;
          .progress-target-mark {
            position: absolute;
            width: 1px;
            height: 100%;
            background-color: #ff942a;
          }
          .target-pop {
            position: absolute;
            padding: 0 5px;
            top: 20px;
            white-space: nowrap;
            height: 28px;
            line-height: 24px;
            background: #565952;
            box-shadow: 0px 0px 10px 4px rgba(255, 128, 51, 0.15);
            border: 1px solid rgba(248, 150, 51, 0.42);
            font-size: 16px;
            font-size: 14px;
            font-weight: 600;
            color: #ffc82f;
            line-height: 28px;
            text-align: center;
            /*此处的边框大小会影响第二个三角形到顶部的偏移量，一般是1.4倍*/
            &::before {
              content: '';
              position: absolute;
              top: -6px;
              left: -1px;
              border-right: 5px solid transparent;
              border-bottom: 5px solid rgba(179, 116, 52, 0.88);
            }
            &::after {
              content: '';
              position: absolute;
              top: -4px;
              left: 0px;
              border-right: 5px solid transparent;
              // 此处不要设置透明色，我们需要配合 box-shadow 颜色，覆盖 ::before 的颜色
              border-bottom: 5px solid #565952;
            }
          }
        }
        .left-arrow-mask {
          position: absolute;
          width: 0px;
          height: 0px;
          top: 7px;
          left: 0px;
          // 上下三角形都是 8px,x y 方向各偏移 1px
          .left-arrow-mask-top {
            &::before {
              content: '';
              position: absolute;
              top: -7px;
              left: 0;
              border-right: 8px solid transparent;
              border-top: 8px solid rgb(47, 90, 111);
            }
            &::after {
              content: '';
              position: absolute;
              top: -8px;
              left: -1px;
              border-right: 8px solid transparent;
              border-top: 8px solid #113550;
            }
          }
          .left-arrow-mask-bottom {
            &::before {
              content: '';
              position: absolute;
              top: 0px;
              left: 0px;
              border-right: 8px solid transparent;
              border-bottom: 8px solid rgb(47, 90, 111);
            }
            &::after {
              content: '';
              position: absolute;
              top: 1px;
              left: -1px;
              border-right: 8px solid transparent;
              border-bottom: 8px solid #113550;
            }
          }
        }
        .right-arrow-mask {
          position: absolute;
          width: 0px;
          height: 0px;
          top: 7px;
          right: 7px;
          .right-arrow-mask-top {
            &::before {
              content: '';
              position: absolute;
              top: -7px;
              left: 0px;
              border-left: 8px solid transparent;
              border-top: 8px solid #2f3b5b;
            }
            &::after {
              content: '';
              position: absolute;
              top: -8px;
              left: 1px;
              border-left: 8px solid transparent;
              border-top: 8px solid #0f1c3f;
            }
          }
          .right-arrow-mask-bottom {
            &::before {
              content: '';
              position: absolute;
              top: 1px;
              left: 0px;
              border-left: 8px solid transparent;
              border-bottom: 8px solid #2f3b5b;
            }
            &::after {
              content: '';
              position: absolute;
              top: 2px;
              left: 1px;
              border-left: 8px solid transparent;
              border-bottom: 8px solid #0f1c3f;
            }
          }
        }
      }
    }
    .progress-inner-filter {
      width: calc(100% - 50px);
      height: 50px;
      position: absolute;
      top: -18px;
      left: 50%;
      z-index: 2;
      transform: translateX(-50%);
      .out-filter {
        height: 50px;
        width: 80%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        background: linear-gradient(
          180deg,
          rgba(23, 124, 253, 0.53) 0%,
          #0f65f2 100%
        );
        filter: blur(23px);
      }
      .inside-filter {
        height: 24px;
        width: 88%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 15px;
        background: linear-gradient(
          180deg,
          rgba(23, 124, 253, 0.53) 0%,
          #0f65f2 100%
        );
        opacity: 0.4;
        filter: blur(12px);
      }
    }
  }
  // 侧边两箭头
  .progress-wrapper {
    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border: 2px solid;
      border-color: #025593 #025593 transparent transparent;
      position: absolute;
      transform: rotate(-135deg);
      top: 2px;
      left: 18px;
      z-index: 4;
    }
    &::after {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border: 2px solid;
      border-color: #025593 #025593 transparent transparent;
      position: absolute;
      transform: rotate(45deg);
      top: 2px;
      right: 18px;
      z-index: 4;
    }
    .progress-inner-wrapper {
      &::before {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        background-color: transparent;
        border: 2px solid;
        border-color: #088bc6 #088bc6 transparent transparent;
        position: absolute;
        transform: rotate(-135deg);
        top: 1px;
        left: -7px;
        z-index: 4;
      }
      &::after {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        background-color: transparent;
        border: 2px solid;
        border-color: #088bc6 #088bc6 transparent transparent;
        position: absolute;
        transform: rotate(45deg);
        top: 1px;
        right: -7px;
        z-index: 4;
      }
    }
  }
}
.outer-wrapper.over-target {
  .progress-wrapper {
    .progress-inner-wrapper {
      .progress-inner-bar {
        background-image: linear-gradient(
          to left,
          #ffffff 0%,
          #fff5aa 28%,
          #d0d61c 65%,
          #01569b 100%
        );
      }
    }
    .progress-inner-filter {
      .out-filter {
        background: linear-gradient(
          180deg,
          rgba(103, 253, 23, 0.53) 0%,
          #feffd7 100%
        );
        opacity: 0.8;
        filter: blur(23px);
      }
      .inside-filter {
        background: #c1ffa2;
        opacity: 0.3;
        filter: blur(12px);
      }
    }
  }
}
</style>
