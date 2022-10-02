import { render, screen, fireEvent } from '@testing-library/react';
import CountryList from './CountryList';

const props = [{
    id: 'AG',
    name: 'test1'
},{
    id: 'AB',
    name: 'test2'
}];

it('should render all the countries in the continent', async () => {
  render(<CountryList countries={props} />);
  expect(screen.getByTestId('country-list').children.length).toBe(2)
});

it('should highlight the country selected', async () => {
    render(<CountryList countries={props} />);
    fireEvent.click(screen.getByTestId('country-list0'));
    expect(screen.getByTestId('country-list0')).toHaveClass('selected')
});

it('should highlight all the countries selected', async () => {
    render(<CountryList countries={props} />);
    fireEvent.click(screen.getByTestId('country-list0'));
    fireEvent.click(screen.getByTestId('country-list1'));
    expect(screen.getByTestId('country-list0')).toHaveClass('selected')
    expect(screen.getByTestId('country-list1')).toHaveClass('selected')
});

it('should deselect the selected country if clicked again', async () => {
  render(<CountryList countries={props} />);
  fireEvent.click(screen.getByTestId('country-list0'));
  expect(screen.getByTestId('country-list0')).toHaveClass('selected')
  fireEvent.click(screen.getByTestId('country-list0'));
  expect(screen.getByTestId('country-list1')).not.toHaveClass('selected')
});

