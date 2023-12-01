import api from "./api";

const tokenValidator = async (token: string) => {
    try {
        const response = await api.post("/auth/verify-token", null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data.valid;

    } catch (err) {

        return false;

    }

}

export default tokenValidator;