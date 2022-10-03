import React = require('react');
import { Col, Row } from 'react-bootstrap';
import { country } from '../../types';

import './CountryList.css';

interface Props {
  countries: country[];
}
const CountryList: React.FC<Props> = ({ countries }: Props) => {
  const [countriesSelected, setCountriesSelected] = React.useState<string[]>(
    []
  );

  const selectCountries = (id: string) => {
    const selected = [...countriesSelected];
    const selectedIndex = countriesSelected.indexOf(id);
    if (selectedIndex === -1) {
      selected.push(id);
    } else {
      selected.splice(selectedIndex, 1);
    }
    setCountriesSelected(selected);
  };

  const isSelected = (id: string): boolean => {
    return countriesSelected.indexOf(id) !== -1;
  };

  return (
    <React.Fragment>
      <Row data-testid="country-list" className="mt-5">
        {countries.map((country: country, index) => (
          <Col
            xs={4}
            sm={3}
            className="country"
            key={country.id}
            data-testid={'country-list' + index}
          >
            <p
              className={isSelected(country.id) ? 'selected' : ''}
              onClick={() => selectCountries(country.id)}
            >
              {country.name}
            </p>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default CountryList;
