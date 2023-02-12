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
                // await this.makeRequest();
                // if (this.status == ResponseStatus.SUCCESS) {
                //     this.$emit("next");
                // }
            }
        },
        checkForm() {
            const errors = {} as NextForm;
            if (!this.nextFormData.firstname) errors["firstname"] = "Eesnimi on kohustuslik.";
            if (!this.nextFormData.lastname) errors["lastname"] = "Perekonnanimi on kohustuslik.";
            if (!this.nextFormData.gender) errors["gender"] = "Sugu on kohustuslik.";
            if (!this.nextFormData.email) errors["email"] = "E-mail on kohustuslik.";
            if (!this.nextFormData.description) errors["description"] = "Kirjeldus on kohustuslik.";
            this.errors = errors;
            return !Object.keys(errors).length;
        },
        switchResponseStatus() {
            if (this.message == "111") {
                this.message = "222";
                this.status = ResponseStatus.FAIL;
            } else if (this.message == "222") {
                this.message = "333";
                this.status = ResponseStatus.SUCCESS;
            } else {
                this.message = "111";
                this.status = ResponseStatus.LOADING;
            }
        },
    },
    components: { MainInput, Modal, ServerResponse, NextInput, NextSelect, NextTextarea, NextUploadFile },
    setup: () => {
        const car = "https://i2-prod.cambridge-news.co.uk/incoming/article15823587.ece/ALTERNATES/s615b/0_BCH-road-policingJPG.jpg";
        const nextFormData: Ref<NextForm> = ref<NextForm>({
            firstname: "Leonid",
            lastname: "",
            gender: "Mees",
            email: "",
            description: "",
            files: [],
        });
        const { message, makeRequest, status, close } = useFetch(async function () {
            // return await TestAPI.postTest(nextFormData.value);
        });

        return {
            nextFormData,
            message,
            makeRequest,
            status,
            close,
            car,
        };
    },
});
</script>

<template>
    <Modal type="next" :show="show" @close="$emit('close')">
        <template v-slot:header>Saada praktikaavaldus</template>
        <template v-slot:body>
            <div class="flex justify-content-center" v-if="true"><server-response :status="status" :message="message" @close="close" /></div>
            <form @submit="submitForm" id="next-form">
                <next-input :disabled="false" :error="errors['firstname']" label="Nimi" v-model="nextFormData.firstname" />
                <next-input :disabled="false" :error="errors['lastname']" label="Perekonnanimi" v-model="nextFormData.lastname" />
                <next-select :disabled="false" :error="errors['gender']" label="Sugu" v-model="nextFormData.gender" :values="['Mees', 'Naine']" />
                <next-input :disabled="false" :error="errors['email']" label="E-mail" v-model="nextFormData.email" />
                <next-upload-file :disabled="false" :error="errors['files']" label="Files" v-model="nextFormData.files" />
                <next-textarea :disabled="false" :error="errors['description']" label="Kirjeldus" v-model="nextFormData.description" />
            </form>
        </template>
        <template v-slot:footer_button>
            <button type="submit" form="next-form" class="next-btn next-btn--primary pulse--text" :disabled="status == ResponseStatus.LOADING"><div>Saada</div></button>
        </template>
    </Modal>
</template>

<style scoped></style>
