<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import MainInput from "../UI/Input/MainInput.vue";
import Modal from "../UI/Modal/Modal.vue";
import useFetch from "@/hooks/useFetch";
import TestAPI from "@/services/TestAPI";
import ServerResponse, { ResponseStatus } from "../UI/ServerResponse/ServerResponse.vue";
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
                }
            }
        },
        checkForm() {
            const errors = {} as TestForm;
            if (!this.testFormData.valueA) errors["valueA"] = "Väärtus A on kohustuslik.";
            if (!this.testFormData.valueB) errors["valueB"] = "Väärtus B on kohustuslik.";
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
    components: { MainInput, Modal, ServerResponse },
    setup: () => {
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
        };
    },
});
</script>

<template>
    <Modal :show="show" @close="$emit('close')">
        <template v-slot:header>Saada praktikaavaldus</template>
        <template v-slot:body>
            <div class="flex justify-content-center" v-if="true"><server-response :status="status" :message="message" @close="close" /></div>
            <form @submit="submitForm" id="test-form">
                <main-input :disabled="status == ResponseStatus.LOADING" v-model.trim="testFormData.valueA" :label="'VÄÄRTUS A'" :placeholder="'Väärtus A'" :error="errors['valueA']" />
                <main-input :disabled="status == ResponseStatus.LOADING" v-model.trim="testFormData.valueB" :label="'VÄÄRTUS B'" :placeholder="'Väärtus B'" :error="errors['valueB']" />
            </form>
        </template>
        <template v-slot:footer_button>
            <button type="submit" form="test-form" class="btn btn--primary pulse--text" :disabled="status == ResponseStatus.LOADING"><div>Saada</div></button>
        </template>
    </Modal>
</template>

<style scoped></style>
