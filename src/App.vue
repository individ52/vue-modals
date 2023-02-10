<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";
import Header from "./components/Header.vue";

export default defineComponent({
    setup: () => {},
    components: { Header },
});
</script>

<template>
    <Header />
    <router-view />
</template>
