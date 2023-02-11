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
    watch: {
        show() {
            if (this.show) {
                setTimeout(() => {
                    this.$emit("close");
                }, 5000);
            }
        },
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
