<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        show: Boolean,
    },
    setup: () => {},
});
</script>

<template>
    <div :class="['menu-btn', show ? 'menu-btn-open' : '']">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
