<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import MainInput from "../UI/Input/MainInput.vue";
import Modal from "../UI/Modals/Modal.vue";
import useFetch from "@/hooks/useFetch";
import TestAPI from "@/services/TestAPI";
import ServerResponse, { ResponseStatus } from "../UI/ServerResponse/ServerResponse.vue";
import { useI18n } from "vue-i18n";
export interface TestForm {
    valueA: string;
    valueB: string;
}

export default defineComponent({
    props: {
        show: Boolean,
    },
    data: () => ({
        errors: {} as TestForm,
        ResponseStatus,
    }),
    methods: {
        async submitForm(e: any) {
            e.preventDefault();
            if (this.checkForm()) {
                await this.makeRequest();
                if (this.status == ResponseStatus.SUCCESS) {
                    this.$emit("next");
                    this.testFormData = {
                        valueA: "",
                        valueB: "",
                    };
                }
            }
        },
        checkForm() {
            const errors = {} as TestForm;
            if (!this.testFormData.valueA) errors["valueA"] = this.$t("modal-1.errors.a");
            if (!this.testFormData.valueB) errors["valueB"] = this.$t("modal-1.errors.b");
            this.errors = errors;
            return !Object.keys(errors).length;
        },
    },
    components: { MainInput, Modal, ServerResponse },
    setup: () => {
        const { t } = useI18n({ useScope: "global" });
        const testFormData: Ref<TestForm> = ref<TestForm>({
            valueA: "test a",
            valueB: "",
        });
        const { message, makeRequest, status, close } = useFetch(async function () {
            return await TestAPI.postTest(testFormData.value);
        });

        return {
            testFormData,
            message,
            makeRequest,
            status,
            close,
            t,
        };
    },
});
</script>

<template>
    <Modal :show="show" @close="$emit('close')">
        <template v-slot:header>{{ $t("modal-1.title") }}</template>
        <template v-slot:body>
            <div class="flex justify-content-center" v-if="true"><server-response :status="status" :message="message" @close="close" /></div>
            <form @submit="submitForm" id="test-form">
                <main-input
                    :disabled="status == ResponseStatus.LOADING"
                    v-model.trim="testFormData.valueA"
                    :label="$t('modal-1.label.a')"
                    :placeholder="$t('modal-1.label.a')"
                    :error="errors['valueA']"
                />
                <main-input
                    :disabled="status == ResponseStatus.LOADING"
                    v-model.trim="testFormData.valueB"
                    :label="$t('modal-1.label.b')"
                    :placeholder="$t('modal-1.label.b')"
                    :error="errors['valueB']"
                />
            </form>
        </template>
        <template v-slot:footer_button>
            <button type="submit" form="test-form" class="btn btn--primary pulse--text" :disabled="status == ResponseStatus.LOADING">
                <div>{{ $t("modal-1.buttons.send") }}</div>
            </button>
        </template>
    </Modal>
</template>

<style scoped></style>
