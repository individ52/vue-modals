<script lang="ts">
import TestButtons from "@/components/TestButtons.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    components: { TestButtons },
});
</script>

<template>
    <div class="container">
        <div class="author-page">
            <div class="author-page__picture" :style="{ backgroundImage: 'url(/assets/pictures/author-picture.jpg)' }"></div>
            <h1 class="author-page__title">Leonid Demidov</h1>
            <h2 class="author-page__title">Front-end developer (work experience ~ 3 years)</h2>
        </div>
    </div>
</template>
