import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './index';

describe('Testing the Header component', () => {
  it('should render the title', () => {
    render(<Header />);
    let title = screen.getByText('RESTy');
    expect(title).toBeInTheDocument();
  });
});