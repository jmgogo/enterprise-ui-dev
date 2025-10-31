// @vitest-environment jsdom
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  screen.debug(document.body);
});

test(
  'it should increment when the "Increment" button is pressed',
  async () => {
    render(<Counter />);
    const currentCount = screen.getByTestId('current-count')
    expect(currentCount).toHaveTextContent('0');
    fireEvent.click(screen.getByText('Increment'));
    expect(currentCount).toHaveTextContent('1');
  },
);
