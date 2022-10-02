import React = require('react');
import { Col, Row, Button } from 'react-bootstrap';
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
    selected.push(id);
    setCountriesSelected(selected);
  };

  const isSelected = (id: string): boolean => {
    return countriesSelected.indexOf(id) !== -1;
  };

  return (
    <React.Fragment>
      <Row className="justify-content-center mt-5" data-testid="country-list">
        {countries.map((country: country, index) => (
          <Col
            xs={3}
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
