const getQuote = async (userInput) => {
  const API_TOKEN = "c6869tqad3iagio37edg";
  const symbol = userInput;
  const API_URL = "https://finnhub.io/api/v1/quote";
  const url = `${API_URL}?${
    "symbol=" + symbol.toUpperCase() + "&token=" + API_TOKEN
  }`;
  const response = await fetch(url);
  let data = await response.json();
  data = JSON.stringify(data);
  return data;
};

export default getQuote;
