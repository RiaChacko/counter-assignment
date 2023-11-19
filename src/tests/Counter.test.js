// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';

// import the Counter component here
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here

  
})

test('renders counter message', () => {
  render(<Counter />)
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const {getByTestId} = render(<Counter />);
  
  expect(getByTestId('count')).toHaveTextContent(0)


});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const incrementButton  = screen.getByRole('button',{name: '+'});
    fireEvent.click(incrementButton)
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const decrementButton  = screen.getByRole('button',{name: '-'});
  fireEvent.click(decrementButton)
});
