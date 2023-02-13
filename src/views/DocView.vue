<script lang="ts">
import Card from "@/components/UI/Cards/Card.vue";
import { defineComponent } from "vue";
export default defineComponent({
    components: { Card },
    setup: () => {},
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
            <div class="doc-page__block__block flex justify-content-between align-items-center">
                <button class="next-btn next-btn--primary ripple-effect" v-ripple>Button</button>
                <button class="btn btn--primary" v-ripple>Button</button>
                <button class="btn btn--primary pulse--text" v-ripple><div>Button</div></button>
                <button :class="'btn btn--gray'" v-ripple>Button</button>
                <button :class="'next-btn next-btn--warning'" v-ripple>Button</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
