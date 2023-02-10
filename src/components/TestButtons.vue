<script lang="ts">
import { defineComponent } from "vue";
import AddAdsModal from "./modal/AddAdsModal.vue";
export default defineComponent({
  components: { AddAdsModal },
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
        <button class="btn2">Modal 2</button>
    </div>
    <add-ads-modal :show="show" @close="hideModal" />
</template>

<style scoped></style>
