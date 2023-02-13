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
            <h2 class="doc-page__block__title">Special inputs</h2>
            <p class="doc-page__block__description">
                In this project was made 2 special inputs: textarea and select that also have validation: if field is empty there will appear error label. Translations are also implemented.
            </p>
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
            <h2 class="doc-page__block__title">Upload input</h2>
            <p class="doc-page__block__description">
                In project was realized uploading input. If there are not any files to upload, there is icon. If in block are some items, item with "+" mark appears and click on it there is possible
                to upload multiple items. If Items count is greater that is possible to fit in block, there is opportunity to <b>scroll by X</b> to see all elements and manage them. To remove element
                click on it and it will removed and will not send in final request.<br />
                Display characteristics: if you upload picture, you can see the <b>small preview</b> of this picture. If you upload files, you will see <b>the extension</b> of this file and its
                <b>size</b>.
            </p>
            <div class="doc-page__block__block flex justify-content-between align-items-center flex-wrap">
                <div class="doc-page__block__block__uploader">
                    <next-upload-file :label="$t('modal-3.label.files')" :error="false" :disabled="false" v-model="files" />
                </div>
            </div>
        </div>

        <div class="doc-page__block">
            <h2 class="doc-page__block__title">Modals type and requests</h2>
            <p class="doc-page__block__description">
                There are 2 types of modal: default and with new design. To see the demo modals, go to <b><router-link :to="AppLinks.HOME">home page</router-link></b> and click on "Button 1" to see
                default view and "Button 2" to see modal with new design. <br />
                <br />
                In project is also realized handlers of server fetch: until request will not received a response from server user will see loader. After if request is succeed, modal window will show
                final modal. Else there are some issues, user will see the red error alert.
                <br />
                <i>In project was made fictional errors creation to demonstrate how error alert appears. Each second request to "server" is fatal.</i>
            </p>
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
            <h2 class="doc-page__block__title">Others</h2>
            <p class="doc-page__block__description">
                Project use I18n library to implement multilanguage into Vue 3 project. Translations is wirtten in json files and for each lanugage there are separate file but structure of all files
                is same. Project has <b>3 languages:</b> Finland, Estonian and English. <br /><br />
                Whole app is mobile addapted (for example on mobiles menu is collapsed into "burger" and menu pops up from left). <br />
                All stylize were written by native css (SCSS), external libraries (for instancce bootstrap, jquery, etc) were not used. Project state manager: pinia.
            </p>
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
