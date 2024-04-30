import { render, screen } from '@testing-library/react';
import Header from '../index';

jest.mock('next/router', () => ({
  useRouter() {
    return {};
  },
}));

describe('Header', () => {
  it('should have a button to Home', () => {
    render(<Header />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
