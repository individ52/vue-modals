<script lang="ts">
import { defineComponent } from "vue";
import MenuBtn from "./UI/Icons/MenuBtn.vue";
export default defineComponent({
    components: { MenuBtn },
    data: () => ({
        isShowMenu: false,
    }),
    setup: () => {},
});
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__wrap flex align-items-center justify-content-between">
                <div class="header__logo">
                    <router-link to="/">
                        <img src="/assets/Group_31391.svg" alt="logo" />
                    </router-link>
                </div>
                <div class="header__body">
                    <nav class="header__body__nav">
                        <router-link to="/" class="header__body__nav__item" active-class="header__body__nav__item--active">Modal with Native css</router-link>
                        <router-link to="/libs" class="header__body__nav__item" active-class="header__body__nav__item--active">Modal using libries</router-link>
                    </nav>
                    <div class="header__burger" @click="isShowMenu = !isShowMenu">
                        <menu-btn :show="isShowMenu" />
                    </div>
                </div>
            </div>
            <transition name="sub-menu">
                <div class="header__sub-menu" v-if="isShowMenu">
                    <nav class="header__sub-menu__content">
                        <router-link to="/" class="header__sub-menu__item" active-class="header__sub-menu__item--active">Modal with Native css</router-link>
                        <router-link to="/libs" class="header__sub-menu__item" active-class="header__sub-menu__item--active">Modal using libries</router-link>
                    </nav>
                </div>
            </transition>
        </div>
    </header>
</template>

<style scoped></style>
