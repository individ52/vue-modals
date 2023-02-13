<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data: () => ({
        isDescription: false,
    }),
    props: {
        type: {
            type: String,
            default: "default",
            validator(value: string) {
                return ["default", "next"].includes(value);
            },
        },
    },
    setup: () => {},
});
</script>

<template>
    <div :class="`card-${type}`">
        <div class="card">
            <div
                class="card__picture"
                :style="{
                    backgroundImage: 'url(https://lh3.googleusercontent.com/ry6NpaiU2V5hSP6A5h9Q8I-QcqtyMW1UfNSODCoZGj6x8ic-RmEasoh8rG8cUEqt-ako6jnI7qoyv5dBT0rUvxlH7IEIoWJMeTKRUvKNKA)',
                }"
            ></div>
            <div
                :class="{
                    card__content: true,
                    card__content__opened: isDescription,
                }"
            >
                <div class="card__content__title">
                    <slot name="title"></slot>
                </div>
                <div class="card__content__description card__content__show-description" @click="isDescription = !isDescription">Show Description</div>
                <transition name="height-increase-smoothly" mode="out-in">
                    <div class="card__content__description" v-if="isDescription">
                        <slot name="description"></slot>
                    </div>
                </transition>
                <div class="card__content__buttons flex justify-content-end align-items-center">
                    <slot name="buttons"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
