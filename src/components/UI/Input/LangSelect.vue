<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
    setup: () => {
        const { t, locale } = useI18n({ useScope: "global" });
        const lang = ref<string>(localStorage.getItem("lang") ?? "ee");
        locale.value = lang.value;

        function switchLang(e: any) {
            const switchedLangCode = e.target.value;
            localStorage.setItem("lang", switchedLangCode);
            lang.value = switchedLangCode;
            locale.value = switchedLangCode;
        }
        return { t, switchLang, lang };
    },
});
</script>

<template>
    <select @change="switchLang" v-model="lang">
        <option value="ee">EE</option>
        <option value="en">EN</option>
        <option value="fi">FI</option>
    </select>
</template>

<style scoped></style>
