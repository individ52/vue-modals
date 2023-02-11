<script lang="ts">
import { defineComponent } from "vue";

export enum ResponseStatus {
    SUCCESS = "SUCCESS",
    FAIL = "FAIL",
    LOADING = "LOADING",
    NONE = "NONE",
}

export default defineComponent({
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
    <transition name="input-error">
        <div class="response" v-if="!isNone">
            <div :class="['response__mark', !isLoading && message ? 'response__mark--result' : ''].join(' ')">
                <div :class="['circle-loader', !isLoading ? 'load-complete' : '', isFail ? 'load-fail' : ''].join(' ')">
                    <div class="checkmark draw" v-if="isSuccess"></div>
                    <div class="cross flex justify-content-center align-items-center">
                        <div class="cross__wrap" v-if="isFail">
                            <div class="line left"></div>
                            <div class="line right"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="response__message" v-if="message && !isLoading">
                {{ message }}
            </div>
        </div>
    </transition>
</template>

<style scoped></style>
