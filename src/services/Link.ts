import axios from "axios";

export const LinkService = {
    async create(originalLink: string) {
        const {data} = await axios.post("http://localhost:8080/api/link/", {
            "original_link": originalLink
        })
        return data;

    },
    async get(shortLink: string) {
        const {data} = await axios.post("http://localhost:8080/api/link/", {
            "short_link": `http://localhost/${shortLink}`
        })
        return data;

    }
}