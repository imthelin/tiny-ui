<template>
    <div class="input-wrapper" :style="{ width: width, height: height }">
        <input
            type="text"
            class="input"
            :class="{'input-disabled': disabled}"
            :disabled="disabled"
            :value="inValue"
            @input="onInput"
            :placeholder="placeHolder"
        />
    </div>
</template>

<script>
export default {
    name: 'Input',

    props: {
        placeHolder: {
            type: String,
            default: '请输入'
        },
        value: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '40px'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            inValue: this.value
        }
    },
    watch: {
        value(val) {
            this.setValue(val)
        }
    },
    methods: {
        setValue(value) {
            if (value === this.inValue) return
            this.inValue = value
        },
        onInput(event) {
            let value = event.target.value
            this.$emit('update:value', value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>
