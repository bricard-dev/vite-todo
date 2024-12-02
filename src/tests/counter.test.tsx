import Counter from '@/composants/counter';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

test('le compteur commence à 0 et peut être incrémenté et décrémenté', () => {
  render(<Counter />);

  const countText = screen.getByText(/Le compteur est à : 0/i);
  expect(countText).toBeInTheDocument();

  const incrementButton = screen.getByText(/Incrémenter/i);
  fireEvent.click(incrementButton);
  expect(screen.getByText(/Le compteur est à : 1/i)).toBeInTheDocument();

  const decrementButton = screen.getByText(/Décrémenter/i);
  fireEvent.click(decrementButton);
  expect(screen.getByText(/Le compteur est à : 0/i)).toBeInTheDocument();
});
