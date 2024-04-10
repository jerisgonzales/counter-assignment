import { render, screen, fireEvent } from '@testing-library/react'; 
import Counter from '../components/Counter'; 

beforeEach(() => {
  render(<Counter />); 
});

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i); 
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCountDisplay = screen.getByText(/0/);
  expect(initialCountDisplay).toBeInTheDocument(); 
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: '+' }); 
  fireEvent.click(incrementButton); 
  fireEvent.click(incrementButton); 
  const countDisplay = screen.getByText(/2/); 
  expect(countDisplay).toBeInTheDocument(); 
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByRole('button', { name: '+' }); 
  fireEvent.click(incrementButton); 
  fireEvent.click(incrementButton); 
  const decrementButton = screen.getByRole('button', { name: '-' }); 
  fireEvent.click(decrementButton); 
  const countDisplay = screen.getByText(/1/);
  expect(countDisplay).toBeInTheDocument();
});
