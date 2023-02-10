import { TestForm } from "@/components/modal/TestModal.vue";
import { $http } from "@/config/http";

export default class TestAPI {
    static async postTest(test: TestForm) {
        var response = await $http?.post("/tests", test);
        return response;
    }
}
