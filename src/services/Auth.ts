'use client'
import {AxiosInstance} from "@/utilities/Interceptor";

export const AuthService = {
    async registration(inputData: RegistrationEntity) {

        const {data} = await AxiosInstance.post<AuthResponse>("http://localhost:8080/api/user/registration", inputData)
        return data
    },

    async login(username: string, password: string) {
        const {data} = await axios.post("http://localhost:8080/api/user/login", {
            username,
            password
        })
        return data
    },

}