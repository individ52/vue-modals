<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../UI/Modal.vue";
export default defineComponent({
    props: {
        show: Boolean,
    },
    setup: () => {},
    components: { Modal },
});
</script>

<template>
    <Modal :show="show" @close="$emit('close')">
        <template v-slot:header>Saada praktikaavaldus</template>
    </Modal>
</template>

<style scoped></style>
