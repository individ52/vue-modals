<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import MainInput from "../UI/Input/MainInput.vue";
import Modal from "../UI/Modals/Modal.vue";
import useFetch from "@/hooks/useFetch";
import TestAPI from "@/services/TestAPI";
import ServerResponse, { ResponseStatus } from "../UI/ServerResponse/ServerResponse.vue";
import NextInput from "../UI/Input/NextInput.vue";
import NextSelect from "../UI/Input/NextSelect.vue";
import NextTextarea from "../UI/Input/NextTextarea.vue";
import NextUploadFile from "../UI/Input/NextUploadFile.vue";
import { TestForm } from "../TestModal/TestModalStep2.vue";
export interface NextForm {
    valueA: string;
    valueB: string;
}

export default defineComponent({
    props: {
        show: Boolean,
    },
    data: () => ({
        errors: {} as NextForm,
        ResponseStatus,
    }),
    methods: {
        async submitForm(e: any) {
            e.preventDefault();
            if (this.checkForm()) {
                await this.makeRequest();
                if (this.status == ResponseStatus.SUCCESS) {
                    this.$emit("next");
                }
            }
        },
        checkForm() {
            const errors = {} as NextForm;
            if (!this.nextFormData.valueA) errors["valueA"] = "Eesnimi on kohustuslik.";
            if (!this.nextFormData.valueB) errors["valueB"] = "Perekonnanimi on kohustuslik.";
            this.errors = errors;
            return !Object.keys(errors).length;
        },
    },
    components: { MainInput, Modal, ServerResponse, NextInput, NextSelect, NextTextarea, NextUploadFile },
    setup: () => {
        const nextFormData: Ref<NextForm> = ref<NextForm>({
            valueA: "",
            valueB: "",
        });
        const { message, makeRequest, status, close } = useFetch(async function () {
            return await TestAPI.postTest({} as TestForm);
        });

        return {
            nextFormData,
            message,
            makeRequest,
            status,
            close,
        };
    },
});
</script>

<template>
    <Modal type="next" :show="show" @close="$emit('close')">
        <template v-slot:header>Saada praktikaavaldus (Uus view)</template>
        <template v-slot:body>
            <div class="flex justify-content-center" v-if="true"><server-response :status="status" :message="message" @close="close" /></div>
            <form @submit="submitForm" id="next-form">
                <next-input :disabled="false" :error="errors['valueA']" label="Nimi" v-model="nextFormData.valueA" />
                <next-input :disabled="false" :error="errors['valueB']" label="Perekonnanimi" v-model="nextFormData.valueB" />
            </form>
        </template>
        <template v-slot:footer_button>
            <button type="submit" form="next-form" class="next-btn next-btn--primary pulse--text" :disabled="status == ResponseStatus.LOADING"><div>Saada</div></button>
        </template>
    </Modal>
</template>

<style scoped></style>
