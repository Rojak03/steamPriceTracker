var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

export async function getGamesByTitle(title) {
    const url = `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(title)}`;
    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

export async function getGameDetails(id) {
    const url = `${this.baseUrl}/games?id=${encodeURIComponent(id)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}