const API_BASE_URL = "http://localhost:8080";

export const loginUser = async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });

    if (!response.ok) {
        throw new Error(`Login failed: ${response.status}`);
    }

    return await response.json();
};