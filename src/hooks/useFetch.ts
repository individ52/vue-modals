import { ResponseStatus } from "../components/UI/ServerResponse/ServerResponse.vue";
import { reactive, toRefs, ref } from "vue";

interface State {
    message: string;
    status: ResponseStatus;
}

export default function useFetch(cb: () => void) {
    var state = reactive<State>({
        message: "",
        status: ResponseStatus.NONE,
    });
    var timeout = ref();
    const close = () => {
        state.message = "";
        state.status = ResponseStatus.NONE;
    };
    const makeRequest = async () => {
        if (timeout.value) clearTimeout(timeout.value);
        state.status = ResponseStatus.LOADING;
        try {
            const response: any = await cb();
            state.message = response?.message;
            state.status = ResponseStatus.SUCCESS;
        } catch (e: any) {
            state.message = e.message;
            state.status = ResponseStatus.FAIL;
        }
    };

    return { ...toRefs(state), makeRequest, close };
}
