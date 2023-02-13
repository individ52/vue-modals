<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";
import Header from "./components/Headers/Header.vue";
import SubMenu from "./components/Headers/SubMenu.vue";

export default defineComponent({
    components: { Header, SubMenu },
});
</script>

<template>
    <Header />
    <sub-menu />

    <router-view />
</template>
