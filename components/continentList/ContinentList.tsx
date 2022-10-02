import React = require('react');
import { Col, Row, Button } from 'react-bootstrap';

import './ContinentList.css';

interface Props {
  continents: string[];
  onRegionSelect: Function;
}
const ContinentList: React.FC<Props> = ({
  continents,
  onRegionSelect,
}: Props) => {
  const [continentSelected, setContinentSelected] = React.useState('');

  React.useEffect(() => {
    if (continentSelected !== '') {
      onRegionSelect(continentSelected);
    }
  }, [continentSelected]);

  return (
    <React.Fragment>
      <Row className="justify-content-center" data-testid="continent-list">
        {continents.map((continent, index) => (
          <Col
            xs={4}
            key={continent}
            className="text-center"
            data-testid={'continent-list' + index}
          >
            <Button
              className="btn-flat"
              active={continentSelected === continent}
              onClick={() => setContinentSelected(continent)}
            >
              {continent}
            </Button>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default ContinentList;
