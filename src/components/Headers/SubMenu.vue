<script lang="ts">
import { AppLinks } from "@/router";
import { useGlobalStore } from "@/store/global";
import { defineComponent } from "vue";
export default defineComponent({
    data: () => ({
        AppLinks,
    }),
    methods: {
        clickOnMask(e: any) {
            if (e.target.classList.contains("header__sub-menu")) {
                this.global.hideSubMenu();
            }
        },
        hideSubMenu() {
            this.global.hideSubMenu();
        },
    },
    setup() {
        const global = useGlobalStore();
        return { global };
    },
});
</script>

<template>
    <transition name="sub-menu">
        <div class="header__sub-menu" v-if="global.isSubMenu" @click.stop="clickOnMask">
            <div class="header__sub-menu__content sub-menu__content" v-if="global.isSubMenu">
                <div class="header__sub-menu__content__header">
                    <div class="header__sub-menu__content__header__image"><img src="/assets/sub-menu_logo.png" alt="logo" /></div>
                    <div class="header__sub-menu__content__header__title">Menu</div>
                </div>
                <nav class="header__sub-menu__content__nav">
                    <router-link :to="AppLinks.HOME" @click="hideSubMenu" class="header__sub-menu__content__nav__item" active-class="header__sub-menu__content__nav__item--active">{{
                        $t("home-title")
                    }}</router-link>
                    <router-link :to="AppLinks.AUTHOR" @click="hideSubMenu" class="header__sub-menu__content__nav__item" active-class="header__sub-menu__content__nav__item--active">{{
                        $t("author-title")
                    }}</router-link>
                    <router-link :to="AppLinks.DOC" @click="hideSubMenu" class="header__sub-menu__content__nav__item" active-class="header__sub-menu__content__nav__item--active">
                        Documentation
                    </router-link>
                </nav>
            </div>
        </div>
    </transition>
</template>

<style scoped></style>
