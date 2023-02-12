<script lang="ts">
import { defineComponent } from "vue";
import NextCrossBtn from "../Icons/NextCrossBtn.vue";
import UploadIcon from "../Icons/UploadIcon.vue";

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
    },
    data: () => ({
        items: [] as FileItem[],
        FileTime,
    }),
    methods: {
        removeItem(item: any) {
            const newValue = this.modelValue?.filter((v) => v.name != item.name);
            this.items = this.items.filter((v) => v.name != item.name);
            this.$emit("update:modelValue", newValue);
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
        this.modelValue?.forEach((file: File) => {
            this.addItem(file);
        });
    },
    components: { UploadIcon, NextCrossBtn },
    setup: () => {},
});
</script>

<template>
    <div class="next-upload-file">
        <input type="file" @change="uploaFile" />
        <div class="next-upload-file__items" v-if="modelValue?.length">
            <div
                class="next-upload-file__item"
                v-for="item in items"
                :key="item"
                :style="{
                    backgroundImage: `url(${item.url})`,
                }"
                @click="removeItem(item)"
            >
                <next-cross-btn />
                <p v-if="FileTime.DOC == item.type">{{ item.url }} ({{ item.size }}KB)</p>
            </div>
        </div>
        <div class="next-upload-file__message flex flex-column justify-content-center align-items-center" v-else>
            <upload-icon />
            <div class="next-upload-file__message__title">Upload file</div>
        </div>
    </div>
</template>

<style scoped></style>
