import { useState, useEffect } from "react";
import { CountryType } from "./types/APICountyType";
import axios from "axios";
import Country from "./components/Country";
import Loading from "./components/Loading";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
      console.log(data);
    } catch {
      console.log("Unable to fetch Countries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <Loading loading={loading}>
        {countries.map((country, index) => {
          return <Country key={index} country={country} />;
        })}
      </Loading>
    </div>
  );
}

export default App;
