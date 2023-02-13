<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import MenuBtn from "@/components/UI/Icons/MenuBtn.vue";
import { useI18n } from "vue-i18n";
import { AppLinks } from "@/router";
import LangSelect from "@/components/UI/Input/LangSelect.vue";
import SubMenu from "@/components/Headers/SubMenu.vue";
import { useStore } from "vuex";
import { useGlobalStore } from "@/store/global";
export default defineComponent({
    components: { MenuBtn, LangSelect, SubMenu },
    data: () => ({
        AppLinks,
    }),
    setup: () => {
        const { t, locale } = useI18n({ useScope: "global" });
        const lang = ref<string>(localStorage.getItem("lang") ?? "ee");
        locale.value = lang.value;
        const global = useGlobalStore();
        return { t, global };
    },
});
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__wrap flex align-items-center justify-content-between">
                <div class="header__logo">
                    <router-link :to="AppLinks.HOME">
                        <img src="/assets/pictures/Group_31391.svg" alt="logo" />
                    </router-link>
                </div>
                <div class="header__body">
                    <nav class="header__body__nav">
                        <router-link :to="AppLinks.HOME" class="header__body__nav__item" active-class="header__body__nav__item--active">{{ $t("home-title") }}</router-link>
                        <router-link :to="AppLinks.AUTHOR" class="header__body__nav__item" active-class="header__body__nav__item--active">{{ $t("author-title") }}</router-link>
                        <router-link :to="AppLinks.DOC" class="header__body__nav__item" active-class="header__body__nav__item--active">Documentation</router-link>
                    </nav>
                    <lang-select class="header__body__lang" />
                    <div class="header__burger" @click="global.toggleSubMenu">
                        <menu-btn :show="global.isSubMenu" />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped></style>
