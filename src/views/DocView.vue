<script lang="ts">
import SubMenu from "@/components/Headers/SubMenu.vue";
import Card from "@/components/UI/Cards/Card.vue";
import MenuBtn from "@/components/UI/Icons/MenuBtn.vue";
import LangSelect from "@/components/UI/Input/LangSelect.vue";
import MainInput from "@/components/UI/Input/MainInput.vue";
import NextInput from "@/components/UI/Input/NextInput.vue";
import NextSelect from "@/components/UI/Input/NextSelect.vue";
import NextTextarea from "@/components/UI/Input/NextTextarea.vue";
import NextUploadFile from "@/components/UI/Input/NextUploadFile.vue";
import ServerResponse, { ResponseStatus } from "@/components/UI/ServerResponse/ServerResponse.vue";

import { AppLinks } from "@/router";
import { useGlobalStore } from "@/store/global";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
    components: { Card, MainInput, NextInput, NextSelect, NextTextarea, NextUploadFile, ServerResponse, LangSelect, MenuBtn, SubMenu },
    data: () => ({
        AppLinks,
        ResponseStatus,
        inputErrors: {} as any,
        specialErrors: {} as any,
        files: [],
        showMessage: true,
    }),
    methods: {
        displayInputErorrs() {
            if (Object.keys(this.inputErrors).length) {
                this.inputErrors = {} as any;
            } else {
                this.inputErrors["valueA"] = this.$t("modal-1.errors.a");
            }
        },
        hideMessage() {
            this.showMessage = false;
            setTimeout(() => {
                this.showMessage = true;
            }, 1000);
        },
        displaySpecialErrors() {
            if (Object.keys(this.specialErrors).length) {
                this.specialErrors = {} as any;
            } else {
                this.specialErrors["gender"] = this.$t("modal-3.errors.gender");
                this.specialErrors["description"] = this.$t("modal-3.errors.description");
            }
        },
    },
    setup: () => {
        const { t } = useI18n({ useScope: "global" });
        const global = useGlobalStore();
        return { t, global };
    },
});
</script>

<template>
    <div class="container doc-page">
        <h1 class="doc-page__title">DOCUMENTATION</h1>
        <div class="doc-page__block">
            <h2 class="doc-page__block__title">{{ t("doc-block-1.title") }}</h2>
            <p class="doc-page__block__description" v-html="t('doc-block-1.description')"></p>
            <div class="doc-page__block__block flex justify-content-between align-items-center flex-wrap">
                <button class="next-btn next-btn--primary ripple-effect" v-ripple>Button</button>
                <button class="btn btn--primary" v-ripple>Button</button>
                <button class="btn btn--primary pulse--text" v-ripple><div>Button</div></button>
                <button :class="'btn btn--gray'" v-ripple>Button</button>
                <button :class="'next-btn next-btn--warning'" v-ripple>Button</button>
            </div>
        </div>
        <div class="doc-page__block">
            <h2 class="doc-page__block__title">{{ t("doc-block-2.title") }}</h2>
            <p class="doc-page__block__description" v-html="t('doc-block-2.description')"></p>
            <button class="next-btn next-btn--warning ripple-effect" @click="displayInputErorrs" v-ripple>
                {{ Object.keys(inputErrors).length ? "Hide" : "Display" }}
                errors
            </button>
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
        <div class="doc-page__block">
            <h2 class="doc-page__block__title">{{ t("doc-block-3.title") }}</h2>
            <p class="doc-page__block__description" v-html="t('doc-block-3.description')"></p>
            <button class="next-btn next-btn--warning ripple-effect" @click="displaySpecialErrors" v-ripple>{{ Object.keys(specialErrors).length ? "Hide" : "Display" }} errors</button>
            <div class="doc-page__block__block flex justify-content-between align-items-center flex-wrap">
                <div class="doc-page__block__block__item">
                    <next-select :disabled="false" :error="specialErrors['gender']" :label="$t('modal-3.label.gender')" :values="[$t('modal-3.gender.male'), $t('modal-3.gender.female')]" />
                </div>
                <div class="doc-page__block__block__item">
                    <next-select :disabled="true" :error="specialErrors['gender']" :label="$t('modal-3.label.gender')" :values="[$t('modal-3.gender.male'), $t('modal-3.gender.female')]" />
                </div>
                <div class="doc-page__block__block__item">
                    <next-textarea :disabled="false" :error="specialErrors['description']" :label="$t('modal-3.label.description')" />
                </div>
                <div class="doc-page__block__block__item">
                    <next-textarea :disabled="true" :error="specialErrors['description']" :label="$t('modal-3.label.description')" />
                </div>
            </div>
        </div>
        <div class="doc-page__block">
            <h2 class="doc-page__block__title">
                {{ t("doc-block-4.title") }}
            </h2>
            <p class="doc-page__block__description" v-html="t('doc-block-4.description')"></p>
            <div class="doc-page__block__block flex justify-content-between align-items-center flex-wrap">
                <div class="doc-page__block__block__uploader">
                    <next-upload-file :label="$t('modal-3.label.files')" :error="false" :disabled="false" v-model="files" />
                </div>
            </div>
        </div>
        <div class="doc-page__block">
            <h2 class="doc-page__block__title">{{ t("doc-block-5.title") }}</h2>
            <p class="doc-page__block__description" v-html="t('doc-block-5.description', { linkPage: `<a href='${AppLinks.HOME}'>${t('doc-block-5.link-text')}</a>` })"></p>
            <div class="doc-page__block__block flex justify-content-between align-items-center flex-wrap">
                <div class="doc-page__block__block__uploader">
                    <transition name="height-increase">
                        <server-response v-if="showMessage" message="Click on cross to remove message" :status="ResponseStatus.FAIL" @close="hideMessage" />
                    </transition>
                </div>
                <div class="doc-page__block__block__uploader">
                    <server-response :status="ResponseStatus.LOADING" />
                </div>
            </div>
        </div>
        <div class="doc-page__block">
            <h2 class="doc-page__block__title">{{ t("doc-block-6.title") }}</h2>
            <p class="doc-page__block__description" v-html="t('doc-block-6.description')"></p>
            <div class="doc-page__block__block flex justify-content-between align-items-center flex-wrap">
                <lang-select class="header__body__lang" />
                <div class="header__burger" :style="{ display: 'block' }" @click="global.toggleSubMenu">
                    <menu-btn :show="global.isSubMenu" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
