
const getSymbols = async (searchTerm) => {
    const API_TOKEN = "c6869tqad3iagio37edg";
    const API_URL = "https://finnhub.io/api/v1/search"
    const url = `${API_URL}?${"q=" + searchTerm + "&token=" + API_TOKEN}`
    const response = await fetch(url)
    let data = await response.json();
    data = JSON.stringify(data);
    return data;
}

export default getSymbols;