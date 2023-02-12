<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import MainInput from "../UI/Input/MainInput.vue";
import Modal from "../UI/Modals/Modal.vue";
import useFetch from "@/hooks/useFetch";
import TestAPI from "@/services/TestAPI";
import ServerResponse, { ResponseStatus } from "../UI/ServerResponse/ServerResponse.vue";
import NextInput from "../UI/Input/NextInput.vue";
import NextSelect from "../UI/Input/NextSelect.vue";
export interface NextForm {
    firstname: string;
    lastname: string;
    gender: string;
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
            if (!this.nextFormData.lastname) errors["lastname"] = "Perekonnanimi B on kohustuslik.";
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
    components: { MainInput, Modal, ServerResponse, NextInput, NextSelect },
    setup: () => {
        const nextFormData: Ref<NextForm> = ref<NextForm>({
            firstname: "Leonid",
            lastname: "",
            gender: "Mees",
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
            </form>
        </template>
        <template v-slot:footer_button>
            <button type="submit" form="next-form" class="btn btn--primary pulse--text" :disabled="status == ResponseStatus.LOADING"><div>Saada</div></button>
        </template>
    </Modal>
</template>

<style scoped></style>
