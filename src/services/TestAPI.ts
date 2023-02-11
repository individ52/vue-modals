import { TestForm } from "@/components/TestModal/TestModalStep2.vue";
import { $http } from "@/config/http";

export default class TestAPI {
    static async postTest(test: TestForm) {
        await sleep(5000);
        var response = await $http?.post("/testsф", test);
        return { ...response, message: "Test väärtused on lisatud!" };
    }
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
