import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Testing the footer component', () => {
  it('should render the copyright date', () => {
    render(<Footer/>);
    let date = screen.getByText('© Stephen Martinez 2022');
    expect(date).toBeInTheDocument();
  });
});