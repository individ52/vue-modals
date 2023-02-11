<script lang="ts">
import { defineComponent } from "vue";
import TestModalStep1 from "./TestModalStep1.vue";
import TestModalStep2 from "./TestModalStep2.vue";
export default defineComponent({
    props: {
        show: Boolean,
    },
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
    components: { TestModalStep1, TestModalStep2 },
});
</script>

<template>
    <test-modal-step-1 :show="show && step == 1" @close="$emit('close')" @next="nextStep()" />
    <test-modal-step-2 :show="show && step == 2" @close="close()" />
</template>
