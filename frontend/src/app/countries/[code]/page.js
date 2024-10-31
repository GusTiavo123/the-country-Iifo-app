// /pages/countries/[code].js

import Layout from "@/components/Layout";
import React from "react";
import PopulationChart from "@/components/PopulationChart";
import Image from "next/image";

const Page = async ({ params }) => {
  const code = (await params).code;

  const response = await fetch(
    `${process.env.API}/country/${code.toUpperCase()}`
  );
  const countryData = await response.json();

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">{countryData.name}</h1>
        <Image
          src={countryData.flag}
          alt={`Flag of ${code.toUpperCase()}`}
          className="mb-8 rounded-md"
          width={160}
          height={96}
        />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Bordering Countries:</h2>
          <div className="flex flex-wrap justify-center">
            {countryData.borders && countryData.borders.length > 0 ? (
              countryData.borders.map((borderCountry) => (
                <div
                  key={borderCountry}
                  className="m-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {borderCountry}
                </div>
              ))
            ) : (
              <p>No bordering countries.</p>
            )}
          </div>
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Population Over Time:</h2>
          <div className="bg-white p-4 rounded shadow">
            <PopulationChart data={countryData.population} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
