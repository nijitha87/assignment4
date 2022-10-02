import React = require('react');
import { Container } from 'react-bootstrap';
import Header from '../header/Header';
import './Layout.css';

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header></Header>
      <Container className="wrapper">{children}</Container>
    </React.Fragment>
  );
};

export default Layout;
