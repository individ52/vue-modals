<script lang="ts">
import { placeholder } from "@babel/types";
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        label: String,
        placeholder: String,
        invalid: Boolean,
    },
    setup: () => {},
});
</script>

<template>
    <div class="input-container">
        <label class="input-label" for="">{{ label }}</label>
        <input :class="'input-input ' + (invalid ? 'input-input-invalid' : '')" type="text" :placeholder="placeholder" />
        <transition name="input-error">
            <label v-if="invalid" class="input-error" for="">Väli on täitmata</label>
        </transition>
    </div>
</template>

<style scoped></style>
