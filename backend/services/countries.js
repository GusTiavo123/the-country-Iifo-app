import axios from "axios";

export const getAvailableCountries = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_NAGER_URL}/AvailableCountries`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching available countries:", error.message);
    throw new Error("Failed to fetch available countries");
  }
};

export const getCountryInfo = async (code) => {
  try {
    const response = await axios.get(
      `${process.env.API_NAGER_URL}/CountryInfo/${code}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching data for country code ${code}:`,
      error.message
    );
    throw new Error("Failed to fetch country information");
  }
};

export const getCountryBoundaries = (borders) => {
  if (!borders) {
    return [];
  }

  const borderNames = borders.map((border) => border.commonName);
  return borderNames;
};

export const getCountryPopulation = async (country) => {
  try {
    const dataCountry = `{\n\t"country": "${country.toLowerCase()}"\n}`;

    const config = {
      method: "post",
      url: `${process.env.API_COUNTRIESNOW_URL}/countries/population`,
      maxBodyLength: Infinity,
      headers: {
        "Content-Type": "application/json",
      },
      data: dataCountry,
    };

    const response = await axios(config);

    if (response.data.error) {
      console.error("Error from API:", response.data.msg);
      throw new Error(response.data.msg || "API returned an error");
    }

    const populationCounts = response.data.data.populationCounts;
    return populationCounts;
  } catch (error) {
    console.error("Error fetching country population:", error.message);
    throw new Error("Failed to fetch country population");
  }
};

export const getCountryFlag = async (country) => {
  try {
    const data = `{\n    "country": "${country}"\n}`;

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.API_COUNTRIESNOW_URL}/countries/flag/images`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);

    if (response.data.error) {
      console.error("Error from API:", response.data.msg);
      throw new Error(response.data.msg || "API returned an error");
    }

    const flagUrl = response.data.data.flag;
    return flagUrl;
  } catch (error) {
    console.error(`Error fetching flag for country ${country}:`, error.message);
    throw new Error("Failed to fetch country flag");
  }
};
