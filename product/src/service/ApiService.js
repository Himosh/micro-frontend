import axios from "axios";

const BASE_URL = "http://localhost:3000/bff";

class ApiService {
    constructor(basePath) {
        this.api = axios.create({
            baseURL: `${BASE_URL}${basePath}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    get(url) {
        return this.api.get(url);
    }

    getWithParams(url, params) {
        return this.api.get(url, { params });
    }

    post(url, data) {
        return this.api.post(url, data);
    }

    put(url, data) {
        return this.api.put(url, data);
    }

    delete(url) {
        return this.api.delete(url);
    }
}

export default ApiService;
