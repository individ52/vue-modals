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
    <div class="input-container">
        <label class="input-label" for="">{{ label }}</label>
        <input :class="'input-input ' + (invalid ? 'input-input-invalid' : '')" type="text" :placeholder="placeholder" :value="modelValue" @input="updateInput" />
        <transition name="input-error">
            <label class="input-error" v-if="error" for=""><error-icon /> {{ error }}</label>
        </transition>
    </div>
</template>

<style scoped></style>
