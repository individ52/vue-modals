<script lang="ts">
import Card from "@/components/UI/Cards/Card.vue";
import MainInput from "@/components/UI/Input/MainInput.vue";
import NextInput from "@/components/UI/Input/NextInput.vue";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
    components: { Card, MainInput, NextInput },
    data: () => ({
        inputErrors: {} as any,
    }),
    methods: {
        displayInputErorrs() {
            if (Object.keys(this.inputErrors).length) {
                this.inputErrors = {} as any;
            } else {
                this.inputErrors["valueA"] = this.$t("modal-1.errors.a");
            }
        },
    },
    setup: () => {
        const { t } = useI18n({ useScope: "global" });
        return { t };
    },
});
</script>

<template>
    <div class="container doc-page">
        <h1 class="doc-page__title">DOCUMENTATION</h1>
        <div class="doc-page__block">
            <h2 class="doc-page__block__title">Buttons</h2>
            <p class="doc-page__block__description">
                In this project was made 5 button designs and many of them have animation on hover. They different by font stylistic, background colors and actions, that is after click. Also was
                created directive 'ripple' that add ripple effect on click.
            </p>
            <div class="doc-page__block__block flex justify-content-between align-items-center flex-wrap">
                <button class="next-btn next-btn--primary ripple-effect" v-ripple>Button</button>
                <button class="btn btn--primary" v-ripple>Button</button>
                <button class="btn btn--primary pulse--text" v-ripple><div>Button</div></button>
                <button :class="'btn btn--gray'" v-ripple>Button</button>
                <button :class="'next-btn next-btn--warning'" v-ripple>Button</button>
            </div>
        </div>
        <div class="doc-page__block">
            <h2 class="doc-page__block__title">Inputs</h2>
            <p class="doc-page__block__description">
                In this project was made 2 input designs. Each input has validation and if input is empty there will appear error label. Translations are also implemented.
            </p>
            <button class="next-btn next-btn--warning ripple-effect" @click="displayInputErorrs" v-ripple>Display errors</button>
            <div class="doc-page__block__block flex justify-content-between align-items-center flex-wrap">
                <div class="doc-page__block__block__item">
                    <main-input :disabled="false" :error="inputErrors['valueA']" :invalid="!!inputErrors['valueA']" label="Value A" modelValue="" placeholder="Value A" />
                </div>
                <div class="doc-page__block__block__item">
                    <main-input :disabled="true" :error="inputErrors['valueA']" :invalid="!!inputErrors['valueA']" label="Value A" modelValue="" placeholder="Value A" />
                </div>
                <div class="doc-page__block__block__item">
                    <next-input :disabled="false" :error="inputErrors['valueA']" :invalid="!!inputErrors['valueA']" modelValue="" label="Value B" />
                </div>
                <div class="doc-page__block__block__item">
                    <next-input :disabled="true" :error="inputErrors['valueA']" :invalid="!!inputErrors['valueA']" modelValue="" label="Value B" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
