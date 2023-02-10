<script lang="ts">
import { defineComponent } from "vue";
import CrossBtn from "./../UI/Icons/CrossBtn.vue";
export default defineComponent({
    components: { CrossBtn },
    props: {
        show: Boolean,
    },
});
</script>

<template>
    <transition name="modal">
        <div class="modal__mask" v-if="show">
            <div class="modal__wrapper" @click="$emit('close')">
                <div class="modal__container" @click.stop>
                    <div class="modal__main">
                        <div class="modal__cross" @click="$emit('close')">
                            <cross-btn />
                        </div>
                        <div class="modal__header">
                            <h2>
                                <slot name="header"> default header </slot>
                            </h2>
                        </div>

                        <div class="modal__body">
                            <slot name="body"> default body </slot>
                        </div>
                    </div>

                    <div class="modal__footer flex justify-content-between">
                        <button class="btn btn--gray" @click="$emit('close')">Cancel</button>
                        <slot name="footer_button"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped></style>
