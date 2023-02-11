<script lang="ts">
import { defineComponent } from "vue";
import TestModalStep1 from "./TestModal/TestModalStep1.vue";
import TestModalSteps from "./TestModal/TestModalSteps.vue";
export default defineComponent({
    data: () => ({
        show: false,
    }),
    methods: {
        showModal() {
            this.show = true;
        },
        hideModal() {
            this.show = false;
        },
    },
    components: { TestModalSteps },
});
</script>

<template>
    <div class="page-buttons flex justify-content-center align-items-center">
        <div class="page-buttons__wrap flex justify-content-around">
            <button class="btn btn--primary" @click="showModal">Nupp 1</button>
            <button class="btn2 btn2--primary">Modal 2</button>
        </div>
    </div>
    <test-modal-steps :show="show" @close="hideModal" />
</template>

<style scoped></style>
