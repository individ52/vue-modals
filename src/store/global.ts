import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
    id: "global",
    state: () => ({
        isSubMenu: false as Boolean,
    }),
    getters: {},
    actions: {
        showSubMenu() {
            this.isSubMenu = true;
            document.querySelector("body")?.classList.add("body--no-scroll");
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        hideSubMenu() {
            this.isSubMenu = false;
            document.querySelector("body")?.classList.remove("body--no-scroll");
        },
        toggleSubMenu() {
            if (this.isSubMenu) this.hideSubMenu();
            else this.showSubMenu();
        },
    },
});
