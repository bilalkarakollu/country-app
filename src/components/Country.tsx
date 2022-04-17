import { FunctionComponent } from "react";
import { CountryType } from "../types/APICountyType";

interface ICountryProps {
  country: CountryType;
}

const Country: FunctionComponent<ICountryProps> = (props) => {
  
    const { country } = props;

    return <div>{country.name.common}</div>;
};

export default Country;
