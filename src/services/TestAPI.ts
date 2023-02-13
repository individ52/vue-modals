import { TestForm } from "@/components/TestModal/TestModalStep2.vue";
import { $http } from "@/config/http";
/*
    errorCounter used to display error alert each second request
*/

import { NextForm } from "@/components/NextModal2/NextModal2Step1.vue";

var errorCounter = 1;

export default class TestAPI {
    static async postTest(test: TestForm | NextForm) {
        await sleep(1000); // fictional delay to show loader animation
        errorCounter++;
        if (errorCounter % 2 != 0) throw new Error("Don't worry, it is test Error message to show response alert. Next request will succeed.");
        // requers example
        // var response = await $http?.post("/tests", test);
        console.log("form values to make requrest:", test);
        return { message: "Test väärtused on lisatud!" };
    }
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
