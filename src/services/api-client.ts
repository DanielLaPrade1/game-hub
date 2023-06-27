import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "63ac7e3699a4478996f7444ea8fec146"
    }
})