<script lang="ts">
import { placeholder } from "@babel/types";
import { defineComponent } from "vue";
import ErrorIcon from "../Icons/ErrorIcon.vue";
export default defineComponent({
    components: { ErrorIcon },
    props: {
        label: String,
        placeholder: String,
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
    setup: () => {},
});
</script>

<template>
    <div class="input-container input-container--invalid">
        <label class="input-label" for="">{{ label }}</label>
        <input :disabled="disabled" :class="'input-input ' + (invalid ? 'input-input-invalid' : '')" type="text" :placeholder="placeholder" :value="modelValue" @input="updateInput" />
        <transition name="height-increase">
            <label class="input-error flex justify-content-end align-items-center" v-if="error" for=""><error-icon /> {{ error }}</label>
        </transition>
    </div>
</template>

<style scoped></style>
