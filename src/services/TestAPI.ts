import { TestForm } from "@/components/TestModal/TestModalStep2.vue";
import { $http } from "@/config/http";
/*
    errorCounter used to display error alert each second request
*/

var errorCounter = 1;

export default class TestAPI {
    static async postTest(test: TestForm) {
        await sleep(1000); // fictional delay to show loader animation
        console.log("form values to make requrest:", test);
        errorCounter++;
        if (errorCounter % 2 != 0) throw new Error("Don't worry, it is test Error message to show response alert. Next request will succeed.");
        // requers example
        // var response = await $http?.post("/tests", test);
        return { message: "Test väärtused on lisatud!" };
    }
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
