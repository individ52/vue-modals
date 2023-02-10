import axios, { AxiosInstance } from "axios";
import Vue from "vue";

const devInstance = createInstance("http://localhost:3000");
const productionInstance = createInstance("http://localhost:3000"); // will change later
export var $http: AxiosInstance | undefined = undefined;
function createInstance(baseURL: string) {
    return axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`,
        },
    });
}

export default {
    install() {
        $http = devInstance;
    },
};
