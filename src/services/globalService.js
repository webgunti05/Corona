export const getGlobalData = async () => {
  const GlobalDataUrl =
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php";
  try {
    const response = await fetch(GlobalDataUrl, {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "f42ec5466amsh0c4fd6102b9c383p11959ajsn55f4ab60a841",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getEffectedCountries = async () => {
  const effetedCountryUrl =
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php";
  try {
    const response = await fetch(effetedCountryUrl, {
      method: "Get",
      headers: {
        "Content-type": "Application/json",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "f42ec5466amsh0c4fd6102b9c383p11959ajsn55f4ab60a841",
      },
    });
    const EffectedCountrydata = await response.json();
    return EffectedCountrydata;
  } catch (error) {
    console.log(error);
  }
};

export const getCasesByCountry = async ({ keyword }) => {
  try {
    let DataUrl = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php/?`;
    DataUrl += `country=${keyword}`;
    const response = await fetch(DataUrl, {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "f42ec5466amsh0c4fd6102b9c383p11959ajsn55f4ab60a841",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
