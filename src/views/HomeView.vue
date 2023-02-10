<script lang="ts">
import TestButtons from "@/components/TestButtons.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    components: { TestButtons },
});
</script>

<template>
    <div class="container">
        <test-buttons />
    </div>
</template>
