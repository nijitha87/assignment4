import React = require('react');
import { Col } from 'react-bootstrap';
import ContinentList from '../components/continentList/ContinentList';
import CountryList from '../components/countryList/CountryList';
import Layout from '../components/layout/Layout';
import { getCountries } from '../services/Services';
import { country } from '../types';

const HomePage = () => {
  const [continents, setContinents] = React.useState<string[]>([]);
  const [countryList, setCountryList] = React.useState([]);
  const [continentCountries, setContinentCountries] = React.useState<country[]>(
    []
  );

  React.useEffect(() => {
    getCountries()
      .then((response) => {
        setCountryList(response.data);
        const continentList = [
          ...new Set(response.data.map((country) => country.continent)),
        ].sort();
        setContinents(continentList as string[]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const getCountryList = (continent: string) => {
    const countries = countryList.reduce((list: country[], country) => {
      if (country.continent === continent) {
        list.push({
          id: country.alpha2Code,
          name: country.name,
        });
      }
      return list;
    }, []);
    setContinentCountries(countries);
  };

  return (
    <Layout>
      <h2 className="text-center m-5">
        Select region and click on the countries you want to highlight
      </h2>
      <Col xs={{ span: 10, offset: 1 }}>
        <ContinentList
          continents={continents}
          onRegionSelect={getCountryList}
        />
        <CountryList countries={continentCountries} />
      </Col>
    </Layout>
  );
};

export default HomePage;
