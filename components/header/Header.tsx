import React = require('react');

import './Header.css';
import { Navbar, Col, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="header-bar align-items-center">
      <Col xs={10} md={{ span: 8, offset: 2 }}>
        <Navbar.Text className="heading d-block text-center">
          Utopia Country Highlighter
        </Navbar.Text>
      </Col>
      <Navbar.Brand className="text-center">
        <Image
          src="https://utopiamusic.com/logo.png"
          roundedCircle
          fluid
          alt="Utopia"
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
