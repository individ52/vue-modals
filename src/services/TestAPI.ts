import { TestForm } from "@/components/modal/TestModal.vue";
import { $http } from "@/config/http";

export default class TestAPI {
    static async postTest(test: TestForm) {
        // await sleep(500);
        var response = await $http?.post("/testsaaaa", test);
        return { ...response, message: "Test väärtused on lisatud!" };
    }
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
