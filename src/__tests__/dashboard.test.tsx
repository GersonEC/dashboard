import { render, screen } from '@testing-library/react';
import { Dashboard } from '../pages/Dashboard';

describe("Dashboard", () => {
  it("should contain dashboard text", () => {
    render(<Dashboard />)
    
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  
  })
})