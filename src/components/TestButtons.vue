<script lang="ts">
import { defineComponent } from "vue";
import NextModal1Steps from "./NextModal1/NextModal1Steps.vue";
import NextModal2Steps from "./NextModal2/NextModal2Steps.vue";
import TestModalSteps from "./TestModal/TestModalSteps.vue";
export default defineComponent({
    data: () => ({
        showTest1: false,
        showTest2: false,
        showNext: false,
    }),
    components: { TestModalSteps, NextModal1Steps, NextModal2Steps },
});
</script>

<template>
    <div class="page-buttons flex justify-content-center align-items-center">
        <div class="page-buttons__wrap flex justify-content-around">
            <button class="btn btn--primary" @click="showTest1 = !showTest1">Nupp 1</button>
            <button class="next-btn next-btn--primary" @click="showTest2 = !showTest2">Nupp 2</button>
            <button class="next-btn next-btn--primary" @click="showNext = !showNext">Nupp 3</button>
        </div>
    </div>
    <test-modal-steps :show="showTest1" @close="showTest1 = false" />
    <next-modal-1-steps :show="showTest2" @close="showTest2 = false" />
    <next-modal-2-steps :show="showNext" @close="showNext = false" />
</template>

<style scoped></style>
