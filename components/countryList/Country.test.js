import { render, screen, fireEvent } from '@testing-library/react';
import CountryList from './CountryList';

const props = ['continent1', 'continent2', 'continent3']


test('should render all the continents passed', async () => {
  render(<CountryList countries={props} />);
  
});
