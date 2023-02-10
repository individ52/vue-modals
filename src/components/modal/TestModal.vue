<script lang="ts">
import { defineComponent } from "vue";
import MainInput from "../UI/Input/MainInput.vue";
import Modal from "../UI/Modal.vue";

interface AdsForm {}

export default defineComponent({
    props: {
        show: Boolean,
    },
    data: () => ({
        invalid: true,
    }),
    setup: () => {},
    components: { Modal, MainInput },
});
</script>

<template>
    <Modal :show="show" @close="$emit('close')">
        <template v-slot:header>Saada praktikaavaldus</template>
        <template v-slot:body>
            <form>
                <main-input :label="'VÄÄRTUS A'" :placeholder="'Väärtus A'" :invalid="invalid" />
                <main-input :label="'VÄÄRTUS B'" :placeholder="'Väärtus B'" :invalid="invalid" />
            </form>
        </template>
        <template v-slot:footer_button>
            <button class="btn btn--primary" @click="invalid = !invalid">OK</button>
        </template>
    </Modal>
</template>

<style scoped></style>
