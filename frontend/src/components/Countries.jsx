import Link from 'next/link'

const Countries = async () => {
  const response = await fetch(`${process.env.API}/countries`);
  const countries = await response.json();

  return (
    <div className="flex flex-wrap justify-center">
      {countries.map((country, index) => (
        <Link
          key={country.countryCode.toLowerCase()}
          href={`/countries/${country.countryCode.toLowerCase()}`}
        >
          <div
            className="w-40 m-4 p-4 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <div
              className={`flex items-center justify-center w-12 h-12 mx-auto rounded-full text-white text-xl font-bold ${
                index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'
              }`}
            >
              {country.countryCode}
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-800">
              {country.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Countries;
