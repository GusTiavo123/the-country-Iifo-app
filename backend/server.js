import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  getAvailableCountries,
  getCountryInfo,
  getCountryBoundaries,
  getCountryPopulation,
  getCountryFlag,
} from "./services/countries.js";

dotenv.config();

if (!process.env.API_NAGER_URL || !process.env.API_COUNTRIESNOW_URL) {
  throw new Error("Missing critical environment variables");
}

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api/countries", async (req, res) => {
  try {
    const countries = await getAvailableCountries();
    return res.status(200).json(countries);
  } catch (error) {
    console.error("Error in /api/countries route:", error.message);
    return res.status(500).json({ error: "Could not retrieve countries data" });
  }
});

app.get("/api/country/:code", async (req, res) => {
  const { code } = req.params;
  try {
    const countryInfo = await getCountryInfo(code);
    const countryBoundaries = getCountryBoundaries(countryInfo.borders);
    const countryPopulation = await getCountryPopulation(
      countryInfo.commonName
    );
    const countryFlag = await getCountryFlag(countryInfo.commonName);

    return res.status(200).json({
      borders: countryBoundaries,
      population: countryPopulation,
      flag: countryFlag,
    });
  } catch (error) {
    console.error("Error fetching country information:", error.message);
    res.status(500).json({ error: "Could not retrieve country information" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
