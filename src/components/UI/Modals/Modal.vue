<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useI18n } from "vue-i18n";
import CrossBtn from "../Icons/CrossBtn.vue";

export default defineComponent({
    components: { CrossBtn },
    props: {
        show: Boolean,
        flip: Boolean || undefined || null,
        type: {
            type: String,
            default: "default",
            validator(value: string) {
                return ["default", "next"].includes(value);
            },
        },
        setup() {
            const { t } = useI18n({ useScope: "global" });
            return { t };
        },
    },
    watch: {
        show() {
            if (this.show) {
                document.querySelector("body")?.classList.add("body--no-scroll");
            } else {
                document.querySelector("body")?.classList.remove("body--no-scroll");
            }
        },
    },
});
</script>

<template>
    <div :class="`modal-${type}`">
        <transition :name="flip ? 'modal-flip' : 'modal'">
            <div class="modal__mask" v-if="show">
                <div class="modal__wrapper">
                    <div class="modal__container" @click.stop>
                        <div class="modal__main">
                            <div class="modal__cross" @click="$emit('close')">
                                <cross-btn />
                            </div>
                            <div class="modal__header">
                                <slot name="header"></slot>
                            </div>

                            <div class="modal__body">
                                <slot name="body"></slot>
                            </div>
                        </div>

                        <div class="modal__footer flex">
                            <button
                                :class="{
                                    'btn btn--gray': type == 'default',
                                    'next-btn next-btn--warning': type == 'next',
                                }"
                                @click="$emit('close')"
                            >
                                {{ $t("modal-1.buttons.cancel") }}
                            </button>
                            <slot name="footer_button"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped></style>
