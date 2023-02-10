<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
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
                </div>
            </div>
        </div>  
    </header>
</template>

<style scoped></style>
