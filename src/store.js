import { reactive } from "vue";

export const store = reactive({
    apiURL: "https://www.breakingbadapi.com/api/",
    characterListArray: [],
    onLoad: false,
    errorMsg: '',
    searchCategory: ''
});