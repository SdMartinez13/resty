import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/jest-dom';
import Form from './index';

describe('Testing the Form Component', () => {
  it('should return the form', () => {
    render(<Form />);
    let method = screen.getByText('GET');
    expect(method).toBeInTheDocument();
  });
});