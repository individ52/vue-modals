<script lang="ts">
import { placeholder } from "@babel/types";
import { defineComponent } from "vue";
export default defineComponent({
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
            <label v-if="error" class="input-error" for="">{{ error }}</label>
        </transition>
    </div>
</template>

<style scoped></style>
