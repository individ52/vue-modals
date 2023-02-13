<script lang="ts">
import { defineComponent } from "vue";
import NextModal1Steps from "./NextModal1/NextModal1Steps.vue";
import NextModal2Steps from "./NextModal2/NextModal2Steps.vue";
import TestModalSteps from "./TestModal/TestModalSteps.vue";
import { useI18n } from "vue-i18n";
import Card from "./UI/Cards/Card.vue";
export default defineComponent({
    data: () => ({
        showTest1: false,
        showTest2: false,
        showNext: false,
    }),
    setup() {
        const { t } = useI18n({ useScope: "global" });
        return { t };
    },
    components: { TestModalSteps, NextModal1Steps, NextModal2Steps, Card },
});
</script>

<template>
    <div class="page-buttons flex justify-content-center align-items-center">
        <div class="page-buttons__wrap flex justify-content-around flex-wrap">
            <div class="page-buttons__item">
                <Card>
                    <template v-slot:title>Button 2 => Modal 2</template>
                    <template v-slot:description
                        >This is button 2 that opens test modal with 2 fields: valua A and value B.<br />
                        <i>New modal design</i></template
                    >
                    <template v-slot:buttons>
                        <button class="next-btn next-btn--primary" @click="showTest2 = !showTest2">{{ $t("buttons.button-2") }}</button>
                    </template>
                </Card>
            </div>
            <div class="page-buttons__item">
                <Card>
                    <template v-slot:title>Button 1 => Modal 1</template>
                    <template v-slot:description
                        >This is button 1 that opens test modal with 2 fields: valua A and value B<br />
                        <i>Default modal design</i></template
                    >
                    <template v-slot:buttons
                        ><button class="btn btn--primary" @click="showTest1 = !showTest1">{{ $t("buttons.button-1") }}</button></template
                    >
                </Card>
            </div>
            <div class="page-buttons__item">
                <Card>
                    <template v-slot:title>Button 3 => Modal 3</template>
                    <template v-slot:description
                        >This is button 3 that opens new modal with all inputs: text inputs, selects, upload files, description.<br />
                        <i>New modal design</i></template
                    >
                    <template v-slot:buttons>
                        <button class="next-btn next-btn--primary" @click="showNext = !showNext">{{ $t("buttons.button-3") }}</button>
                    </template>
                </Card>
            </div>
        </div>
    </div>
    <test-modal-steps :show="showTest1" @close="showTest1 = false" />
    <next-modal-1-steps :show="showTest2" @close="showTest2 = false" />
    <next-modal-2-steps :show="showNext" @close="showNext = false" />
</template>

<style scoped></style>
