<script lang="ts">
import { defineComponent } from "vue";
import CrossBtn from "../Icons/CrossBtn.vue";
import ErrorIcon from "../Icons/ErrorIcon.vue";
import SuccessIcon from "../Icons/SuccessIcon.vue";
import CircleLoader from "../Loaders/CircleLoader.vue";

export enum ResponseStatus {
    SUCCESS = "SUCCESS",
    FAIL = "FAIL",
    LOADING = "LOADING",
    NONE = "NONE",
}

export default defineComponent({
    components: { ErrorIcon, SuccessIcon, CrossBtn, CircleLoader },
    data: () => ({
        ResponseStatus,
    }),
    props: {
        message: String,
        status: String,
    },
    computed: {
        isNone(): boolean {
            return this.status == ResponseStatus.NONE;
        },
        isFail(): boolean {
            return this.status == ResponseStatus.FAIL;
        },
        isSuccess(): boolean {
            return this.status == ResponseStatus.SUCCESS;
        },
        isLoading(): boolean {
            return this.status == ResponseStatus.LOADING;
        },
    },
    setup: () => {},
});
</script>

<template>
    <div class="response flex flex-column">
        <transition name="height-increase" mode="out-in">
            <div v-if="isLoading" class="flex justify-content-center align-items-center">
                <circle-loader />
            </div>
            <div class="response__wrap response--error flex align-items-center justify-content-between" v-else-if="isFail">
                <div class="flex align-items-center">
                    <error-icon />
                    <p>{{ message }}</p>
                </div>
                <div class="response__close">
                    <cross-btn @click="$emit('close')" />
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped></style>
