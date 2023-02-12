<script lang="ts">
import { defineComponent } from "vue";
import NextModalSteps from "./NextModal/NextModalSteps.vue";
import TestModalSteps from "./TestModal/TestModalSteps.vue";
export default defineComponent({
    data: () => ({
        showTest: false,
        showNext: false,
    }),
    components: { TestModalSteps, NextModalSteps },
});
</script>

<template>
    <div class="page-buttons flex justify-content-center align-items-center">
        <div class="page-buttons__wrap flex justify-content-around">
            <button class="btn btn--primary" @click="showTest = !showTest">Nupp 1</button>
            <button class="btn2 btn2--primary" @click="showNext = !showNext">Nupp 2</button>
        </div>
    </div>
    <test-modal-steps :show="showTest" @close="showTest = false" />
    <next-modal-steps :show="showNext" @close="showNext = false" />
</template>

<style scoped></style>
