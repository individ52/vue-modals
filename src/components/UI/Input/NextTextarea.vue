<script lang="ts">
import { defineComponent } from "vue";
import NextErrorIcon from "../Icons/NextErrorIcon.vue";
export default defineComponent({
    components: { NextErrorIcon },
    props: {
        label: String,
        invalid: Boolean,
        error: String || null || undefined,
        modelValue: String,
        disabled: undefined || Boolean,
    },
    methods: {
        updateInput(e: any) {
            this.$emit("update:modelValue", e.target.value);
        },
    },
});
</script>

<template>
    <div
        :class="{
            'next-input__content': true,
            'next-input__content--error': error,
        }"
    >
        <textarea
            :disabled="disabled"
            :class="{ 'next-input__input': true, 'next-input__input-invalid': invalid, 'next-input__input--filed': modelValue?.length }"
            type="text"
            :value="modelValue"
            @input="updateInput"
            rows="3"
        />
        <label class="next-input__label" for="">{{ label }}</label>
        <transition name="height-increase">
            <label class="next-input__error flex align-items-center" v-if="error" for=""><next-error-icon /> {{ error }}</label>
        </transition>
    </div>
</template>

<style scoped></style>
