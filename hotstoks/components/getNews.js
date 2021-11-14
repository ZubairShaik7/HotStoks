const getNews = async (userInput) => {
  const API_TOKEN = "c6869tqad3iagio37edg";
  const symbol = userInput;
  const API_URL = "https://finnhub.io/api/v1/company-news";
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  let mm2 = "";
  if (mm == "01") {
    mm2 = 12;
  } else {
    mm2 = mm - 1;
  }
  const from = yyyy + "-" + mm2 + "-" + dd;
  const to = yyyy + "-" + mm + "-" + dd;
  const url = `${API_URL}?${
    "symbol=" +
    symbol.toUpperCase() +
    "&from=" +
    from +
    "&to=" +
    to +
    "&token=" +
    API_TOKEN
  }`;
  const response = await fetch(url);
  let data = await response.json();
  //console.log(data.splice(0, 3));
  data = JSON.stringify(data);
  return data;
};

export default getNews;
