<script lang="ts">
import { defineComponent } from "vue";
import NextModalStep1 from "./NextModal1Step1.vue";
import NextModalStep2 from "./NextModal1Step2.vue";
export default defineComponent({
    props: {
        show: Boolean,
    },
    emits: ["close"],
    data: () => ({
        step: 1,
    }),
    methods: {
        nextStep() {
            this.step++;
        },
        close() {
            this.step = 1;
            this.$emit("close");
        },
    },
    components: { NextModalStep1, NextModalStep2 },
});
</script>

<template>
    <next-modal-step-1 :show="show && step == 1" @close="$emit('close')" @next="nextStep()" />
    <next-modal-step-2 :show="show && step == 2" @close="close()" />
</template>
