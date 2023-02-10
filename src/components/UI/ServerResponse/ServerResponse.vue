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
        status: () => ResponseStatus,
    },
    setup: () => {},
});
</script>

<template>
    <div :class="['circle-loader', status != ResponseStatus.LOADING ? 'load-complete' : '', status == ResponseStatus.FAIL ? 'load-fail' : ''].join(' ')">
        <div class="checkmark draw" v-if="status == ResponseStatus.SUCCESS"></div>

        <div class="cross flex justify-content-center align-items-center">
            <div class="cross__wrap" v-if="status == ResponseStatus.FAIL">
                <div class="line left"></div>
                <div class="line right"></div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
