<script lang="ts">
import { defineComponent } from "vue";
import MainInput from "../UI/Input/MainInput.vue";
import Modal from "../UI/Modal.vue";

interface TestForm {
    valueA: string;
    valueB: string;
}

export default defineComponent({
    props: {
        show: Boolean,
    },
    data: () => ({
        testFormData: {
            valueA: "test a",
            valueB: "",
        } as TestForm,
        errors: {} as TestForm,
    }),
    methods: {
        submitForm(e: any) {
            e.preventDefault();
            if (this.checkForm()) {
                console.log("correct", this.testFormData);
            }
        },
        checkForm() {
            const errors = {} as TestForm;
            if (!this.testFormData.valueA) errors["valueA"] = "Väärtus A on kohustuslik.";
            if (!this.testFormData.valueB) errors["valueB"] = "Väärtus B on kohustuslik.";
            this.errors = errors;
            return !Object.keys(errors).length;
        },
    },
    components: { Modal, MainInput },
});
</script>

<template>
    <Modal :show="show" @close="$emit('close')">
        <template v-slot:header>Saada praktikaavaldus</template>
        <template v-slot:body>
            <form @submit="submitForm" id="test-form">
                <main-input v-model.trim="testFormData.valueA" :label="'VÄÄRTUS A'" :placeholder="'Väärtus A'" :error="errors['valueA']" />
                <main-input v-model.trim="testFormData.valueB" :label="'VÄÄRTUS B'" :placeholder="'Väärtus B'" :error="errors['valueB']" />
            </form>
        </template>
        <template v-slot:footer_button>
            <button type="submit" form="test-form" class="btn btn--primary">OK</button>
        </template>
    </Modal>
</template>

<style scoped></style>
