<script lang="ts">
import { defineComponent } from "vue";
import NextCrossBtn from "../Icons/NextCrossBtn.vue";
import UploadIcon from "../Icons/UploadIcon.vue";
import { useI18n } from "vue-i18n";

enum FileTime {
    IMG = "IMG",
    DOC = "DOC",
}

interface FileItem {
    name: string;
    url: string;
    type: FileTime;
    size: number;
}

export default defineComponent({
    props: {
        modelValue: Array,
        label: String,
        error: Boolean,
        disabled: Boolean,
    },
    data: () => ({
        items: [] as FileItem[],
        FileTime,
    }),
    methods: {
        removeItem(item: any) {
            if (!this.disabled) {
                const newValue = this.modelValue?.filter((v: any) => v.name != item.name);
                this.items = this.items.filter((v) => v.name != item.name);
                this.$emit("update:modelValue", newValue);
            }
        },
        uploaFile(e: any) {
            const file: File = e.target.files[0];
            const newValue = [...(this.modelValue ?? []), file];
            this.$emit("update:modelValue", newValue);
            this.addItem(file);
            e.target.value = "";
        },
        addItem(file: File) {
            if (file.type.includes("image")) {
                var reader = new FileReader();
                reader.onload = () => {
                    this.items.push({
                        name: file.name as string,
                        url: reader.result as string,
                        type: FileTime.IMG,
                        size: file.size / 1024,
                    });
                };
                reader.readAsDataURL(file);
            } else {
                const fileTypeParts = file.type.split("/");
                const ext = fileTypeParts[fileTypeParts.length - 1];
                const size = Math.round(file.size / 1024);
                this.items.push({
                    name: file.name,
                    url: ext.toUpperCase() as string,
                    type: FileTime.DOC,
                    size: size,
                });
            }
        },
    },
    mounted() {
        this.items = [];
        this.modelValue?.forEach((file: any) => {
            this.addItem(file);
        });
    },
    components: { UploadIcon, NextCrossBtn },
    setup: () => {
        const { t } = useI18n({ useScope: "global" });
        return { t };
    },
});
</script>

<template>
    <div class="next-upload-file">
        <label
            :class="{
                'next-upload-file__label': true,
                'next-upload-file__label--error': error,
            }"
            >{{ label }}</label
        >
        <div
            :class="{
                'next-upload-file__content': true,
                'next-upload-file__content--error': error,
            }"
        >
            <input type="file" @change="uploaFile" :disabled="disabled" />
            <div class="next-upload-file__items" v-if="modelValue?.length">
                <div
                    v-for="item in items"
                    :key="item"
                    :class="{
                        'next-upload-file__item': true,
                        'next-upload-file__item--file': FileTime.DOC == item.type,
                    }"
                    :style="{
                        backgroundImage: `url(${item.url})`,
                    }"
                    @click="removeItem(item)"
                >
                    <next-cross-btn />
                    <p v-if="FileTime.DOC == item.type">{{ item.url }}<br />({{ item.size }}KB)</p>
                </div>
            </div>
            <div class="next-upload-file__message flex flex-column justify-content-center align-items-center" v-else>
                <upload-icon />
                <div
                    :class="{
                        'next-upload-file__message__title': true,
                        'next-upload-file__message__title--error': error,
                    }"
                >
                    {{ $t("modal-3.label.upload-subtitle") }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
