import { TestForm } from "@/components/TestModal/TestModalStep2.vue";
import { $http } from "@/config/http";

export default class TestAPI {
    static async postTest(test: TestForm) {
        await sleep(500);
        console.log(test);
        var response = await $http?.post("/tests", test);
        return { ...response, message: "Test väärtused on lisatud!" };
    }
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
