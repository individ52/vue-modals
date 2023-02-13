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
import { useI18n } from "vue-i18n";
export interface NextForm {
    firstname: string;
    lastname: string;
    gender: string;
    email: string;
    description: string;
    files: any;
}

export default defineComponent({
    props: {
        show: Boolean,
    },
    data: () => ({
        errors: {} as NextForm,
        ResponseStatus,
        // message: "",
        // status: ResponseStatus.NONE,
    }),
    methods: {
        async submitForm(e: any) {
            e.preventDefault();
            if (this.checkForm()) {
                await this.makeRequest();
                if (this.status == ResponseStatus.SUCCESS) {
                    this.$emit("next");
                    this.nextFormData = {
                        firstname: "",
                        lastname: "",
                        gender: "",
                        email: "",
                        description: "",
                        files: [],
                    };
                }
            }
        },
        checkForm() {
            const errors = {} as NextForm;
            if (!this.nextFormData.firstname) errors["firstname"] = this.$t("modal-3.errors.firstname");
            if (!this.nextFormData.lastname) errors["lastname"] = this.$t("modal-3.errors.lastname");
            if (!this.nextFormData.gender) errors["gender"] = this.$t("modal-3.errors.gender");
            if (!this.nextFormData.email) errors["email"] = this.$t("modal-3.errors.email");
            if (!this.nextFormData.description) errors["description"] = this.$t("modal-3.errors.description");
            this.errors = errors;
            return !Object.keys(errors).length;
        },
    },
    components: { MainInput, Modal, ServerResponse, NextInput, NextSelect, NextTextarea, NextUploadFile },
    setup: () => {
        const { t } = useI18n({ useScope: "global" });
        const nextFormData: Ref<NextForm> = ref<NextForm>({
            firstname: "",
            lastname: "",
            gender: "",
            email: "",
            description: "",
            files: [],
        });
        const { message, makeRequest, status, close } = useFetch(async function () {
            return await TestAPI.postTest(nextFormData.value);
        });

        return {
            nextFormData,
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
    <Modal type="next" :show="show" @close="$emit('close')">
        <template v-slot:header>{{ $t("modal-3.title") }}</template>
        <template v-slot:body>
            <div class="flex justify-content-center" v-if="true"><server-response :status="status" :message="message" @close="close" /></div>
            <form @submit="submitForm" id="next-form">
                <next-input :disabled="false" :error="errors['firstname']" :label="$t('modal-3.label.firstname')" v-model="nextFormData.firstname" />
                <next-input :disabled="false" :error="errors['lastname']" :label="$t('modal-3.label.lastname')" v-model="nextFormData.lastname" />
                <next-select
                    :disabled="false"
                    :error="errors['gender']"
                    :label="$t('modal-3.label.gender')"
                    v-model="nextFormData.gender"
                    :values="[$t('modal-3.gender.male'), $t('modal-3.gender.female')]"
                />
                <next-input :disabled="false" :error="errors['email']" label="E-mail" v-model="nextFormData.email" />
                <next-upload-file :disabled="false" :error="errors['files']" :label="$t('modal-3.label.files')" v-model="nextFormData.files" />
                <next-textarea :disabled="false" :error="errors['description']" :label="$t('modal-3.label.description')" v-model="nextFormData.description" />
            </form>
        </template>
        <template v-slot:footer_button>
            <button type="submit" form="next-form" class="next-btn next-btn--primary pulse--text" :disabled="status == ResponseStatus.LOADING">
                <div>{{ $t("modal-3.buttons.send") }}</div>
            </button>
        </template>
    </Modal>
</template>

<style scoped></style>
