import { render, screen, fireEvent } from '@testing-library/react';
import ContinentList from './ContinentList';

const props = ['continent1', 'continent2', 'continent3'];
const mockJestFunc = jest.fn();

it('should render all the continents passed', async () => {
  render(<ContinentList continents={props} onRegionSelect={mockJestFunc} />);
  expect(screen.getByTestId('continent-list').children.length).toBe(3)
});

it('should call the "onRegionSelect" function when continent is clicked', async () => {
  render(<ContinentList continents={props} onRegionSelect={mockJestFunc} />);
  fireEvent.click(screen.getByTestId('continent-list0'));
  expect(mockJestFunc).toBeCalledTimes(1)
});

it('should have active class in selected continent', async () => {
  render(<ContinentList continents={props} onRegionSelect={mockJestFunc} />);
  fireEvent.click(screen.getByTestId('continent-list0'));
  expect(screen.getByTestId('continent-list0')).toHaveClass('active')
});
