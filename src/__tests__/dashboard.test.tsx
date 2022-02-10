import { render, screen } from '@testing-library/react';
import { Dashboard } from '../pages/Dashboard';

describe('Dashboard', () => {
  test('should contain dashboard text', () => {
    render(<Dashboard />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  test('should contain the name of the user', () => {
    render(<Dashboard />);
    expect(
      screen.getByText(/Gerson Enriquez/i, { exact: true })
    ).toBeInTheDocument();
  });

  test('should contain the role of the user', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Admin/i, { exact: true })).toBeInTheDocument();
  });
});
