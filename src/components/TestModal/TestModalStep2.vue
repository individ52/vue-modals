<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import Modal from "../UI/Modal/Modal.vue";
export interface TestForm {
    valueA: string;
    valueB: string;
}

export default defineComponent({
    components: { Modal },
    props: {
        show: Boolean,
    },
    data: () => ({
        closeTimeout: null || 0,
    }),
    watch: {
        show() {
            if (this.show) {
                this.closeTimeout = setTimeout(() => {
                    this.$emit("close");
                }, 5000);
            }
        },
    },
    unmounted() {
        if (this.closeTimeout) clearTimeout(this.closeTimeout);
    },
});
</script>

<template>
    <modal :show="show" @close="$emit('close')" :flip="true">
        <template v-slot:header>Saada praktikaavaldus</template>
        <template v-slot:body>
            <h4>Suur Aitäh!</h4>
            <p>Teie taotlus on edukalt saadetud, võtame teiega peagi ühendust.</p>
        </template>
    </modal>
</template>

<style scoped></style>
