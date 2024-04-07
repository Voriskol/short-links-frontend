type RegistrationEntity = {
    username: string,
    email: string,
    password: string,
}

type AuthResponse = {
    content: {access_token: string, refresh_token: string},
    status: string,
    message: string,
}