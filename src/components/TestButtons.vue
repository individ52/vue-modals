<script lang="ts">
import { defineComponent } from "vue";
import TestModal from "./modal/TestModal.vue";
export default defineComponent({
  components: { TestModal },
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
});
</script>

<template>
    <div class="page-buttons flex justify-content-between">
        <button class="btn btn--primary" @click="showModal">Nupp 1</button>
        <button class="btn2 btn2--primary">Modal 2</button>
    </div>
    <test-modal :show="show" @close="hideModal" />
</template>

<style scoped></style>
