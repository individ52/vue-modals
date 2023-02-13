<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import MenuBtn from "./UI/Icons/MenuBtn.vue";
import { useI18n } from "vue-i18n";
import { AppLinks } from "@/router";
export default defineComponent({
    components: { MenuBtn },
    data: () => ({
        isShowMenu: false,
        AppLinks,
    }),
    setup: () => {
        const { t, locale } = useI18n({ useScope: "global" });
        const lang = ref<string>(localStorage.getItem("lang") ?? "ee");
        locale.value = lang.value;

        function switchLang(e: any) {
            const switchedLangCode = e.target.value;
            localStorage.setItem("lang", switchedLangCode);
            lang.value = switchedLangCode;
            locale.value = switchedLangCode;
        }
        return { t, switchLang, lang };
    },
    watch: {
        isShowMenu() {
            if (this.isShowMenu) {
                document.querySelector("body")?.classList.add("body--no-scroll");
            } else {
                document.querySelector("body")?.classList.remove("body--no-scroll");
            }
        },
    },
});
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__wrap flex align-items-center justify-content-between">
                <div class="header__logo">
                    <router-link :to="AppLinks.HOME">
                        <img src="/assets/Group_31391.svg" alt="logo" />
                    </router-link>
                </div>
                <div class="header__body">
                    <nav class="header__body__nav">
                        <router-link :to="AppLinks.HOME" class="header__body__nav__item" active-class="header__body__nav__item--active">{{ $t("home-title") }}</router-link>
                        <router-link :to="AppLinks.AUTHOR" class="header__body__nav__item" active-class="header__body__nav__item--active">{{ $t("author-title") }}</router-link>
                        <router-link :to="AppLinks.AUTHOR" class="header__body__nav__item" active-class="header__body__nav__item--active">{{ $t("author-title") }}</router-link>
                        <select class="header__body__lang" @change="switchLang" v-model="lang">
                            <option value="ee">EE</option>
                            <option value="en">EN</option>
                            <option value="fi">FI</option>
                        </select>
                    </nav>
                    <div class="header__burger" @click="isShowMenu = !isShowMenu">
                        <menu-btn :show="isShowMenu" />
                    </div>
                </div>
            </div>
            <transition name="sub-menu">
                <div class="header__sub-menu" v-if="isShowMenu">
                    <nav class="header__sub-menu__content">
                        <router-link :to="AppLinks.HOME" class="header__sub-menu__item" active-class="header__sub-menu__item--active">{{ $t("home-title") }}</router-link>
                        <router-link :to="AppLinks.AUTHOR" class="header__sub-menu__item" active-class="header__sub-menu__item--active">{{ $t("author-title") }}</router-link>
                        <select class="header__body__lang" @change="switchLang" v-model="lang">
                            <option value="ee">EE</option>
                            <option value="en">EN</option>
                            <option value="fi">FI</option>
                        </select>
                    </nav>
                </div>
            </transition>
        </div>
    </header>
</template>

<style scoped></style>
