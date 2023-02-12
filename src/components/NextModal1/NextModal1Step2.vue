<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { useI18n } from "vue-i18n";
import Modal from "../UI/Modals/Modal.vue";
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
    setup() {
        const { t } = useI18n({ useScope: "global" });
        return { t };
    },
    watch: {
        show() {
            if (this.closeTimeout) clearTimeout(this.closeTimeout);
            if (this.show) {
                this.closeTimeout = setTimeout(() => {
                    this.$emit("close");
                }, 5000);
            }
        },
    },
});
</script>

<template>
    <Modal type="next" :show="show" @close="$emit('close')" :flip="true">
        <template v-slot:header>{{ $t("modal-2.final-block.title") }}</template>
        <template v-slot:body>
            <h4>{{ $t("modal-2.final-block.h4") }}</h4>
            <p>{{ $t("modal-2.final-block.p") }}</p>
        </template>
    </Modal>
</template>

<style scoped></style>
