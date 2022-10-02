import { render, screen, fireEvent } from '@testing-library/react';
import ContinentList from './ContinentList';

const props = ['continent1', 'continent2', 'continent3'];

test('should render all the continents passed', async () => {
  render(<ContinentList countries={props} />);
  expect(screen.getByTestId('continent-list')).children.toBe(3);
});
