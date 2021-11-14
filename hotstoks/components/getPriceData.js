import queryString from "query-string";

const getPrice = async (userInput) => {
    const API_TOKEN = "c6869tqad3iagio37edg";
    const symbol = userInput
    const API_URL = "https://finnhub.io/api/v1/stock/candle"
    const RESOLUTION = "D"
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const to = (new Date(today).getTime() / 1000) - 86400;
    const from = to - 1036800 - 86400;
    const query = {
        symbol,
        resolution: RESOLUTION,
        from,
        to,
        token: API_TOKEN
    };
    const url = `${API_URL}?${"symbol=" + symbol + "&resolution=" + RESOLUTION + "&from=" + from + "&to=" + to + "&token=" + API_TOKEN}`
    const response = await fetch(url)
    let data = await response.json();
    data = JSON.stringify(data);
    return data;
}

export default getPrice;