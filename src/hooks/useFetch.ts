import { ResponseStatus } from "@/components/UI/ServerResponse/ServerResponse.vue";
import { Ref, ref } from "vue";

export default function useFetch(cb: () => void) {
    var message: Ref<string | undefined> = ref();
    var status: Ref<ResponseStatus> = ref(ResponseStatus.NONE);

    const makeRequest = async () => {
        status.value = ResponseStatus.LOADING;
        try {
            const response: any = await cb();
            message.value = response?.message;
            status.value = ResponseStatus.SUCCESS;
        } catch (e: any) {
            message.value = e.message;
            status.value = ResponseStatus.FAIL;
        } finally {
            status.value = ResponseStatus.NONE;
        }
    };

    return { message, status, makeRequest };
}
