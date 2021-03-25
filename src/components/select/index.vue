<template>
    <div class="select" @click="toggle" ref="sel">
        <div class="input">
            <input
                type="text"
                :placeholder="placeholder"
                readonly
                :class="{ 'input-disabled': disabled }"
                :disabled="disabled"
                :value="inputValue"
                @blur="handle"
            />
            <div class="drop"></div>
        </div>
        <ul
            class="content"
            :class="{ bottom: position == 'bottom', top: position == 'top' }"
            v-show="show && values.length"
            ref="content"
        >
            <li
                v-for="item in values"
                :key="item.value"
                :class="{ selected: item.value === value }"
            >{{ item.label }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Select',

    props: {
        values: {
            type: Array,
            default() {
                return []
            }
        },
        value: {},
        placeholder: {
            type: String,
            default: '请选择'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            val: '',
            show: false,
            position: 'bottom',
            inputValue: ''
        }
    },

    watch: {
        value: {
            immediate: true,
            handler: function(newVal) {
                let aim = this.values.find(item => item.value === newVal)
                aim && (this.inputValue = aim.label)
            }
        }
    },

    mounted() {
        // this.judgeDirection()
    },

    methods: {
        getElementTop(element) {
            var actualTop = element.offsetTop
            var current = element.offsetParent
            while (current !== null) {
                actualTop += current.offsetTop
                current = current.offsetParent
            }
            return actualTop
        },

        // 计算选择框是往上弹出还是往下弹出
        judgeDirection() {
            let elHeight = this.$refs.sel.offsetHeight
            let absPos = this.getElementTop(this.$refs.sel)
            let contentHeight = this.values.length * 40

            let docScrollHeight =
                document.body.scrollTop ||
                document.documentElement.scrollTop ||
                0

            let docHeight =
                document.documentElement.clientHeight ||
                document.body.clientHeight ||
                0

            if (elHeight + absPos + contentHeight - docScrollHeight > docHeight) {
                this.position = 'top'
            } else {
                this.position = 'bottom'
            }
        },

        fixedOptions() {
            console.log(this.$refs.content.getBoundingClientRect().top)
        },

        setVal(item) {
            let option = this.values.find(option => option.label === item)
            option && this.$emit('update:value', option.value)
        },

        handle() {
            this.$emit('blur')
        },

        showSel() {
            if (this.disabled) return
            this.show = true
            this.fixedOptions()
            document.addEventListener('click', this.hideSel, true)
        },

        hideSel(e) {
            this.show = false
            if (this.$refs.sel && this.$refs.sel.contains(e.target)) {
                e.stopImmediatePropagation()
                e.stopPropagation()
                this.setVal(e.target.innerHTML)
            }
            document.removeEventListener('click', this.hideSel, true)
        },

        toggle() {
            if (this.disabled) return
            (this.show && this.hideSel()) || this.showSel()
        }
    }
}
</script>

<style scoped lang="scss">
@import './select.scss';
</style>
