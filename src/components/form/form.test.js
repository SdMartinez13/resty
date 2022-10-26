import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './index';

describe('Testing the Form Component', () => {   
  it('Should make a good API call', () => {
    let handleApiCall = jest.fn();

    render(<Form handleApiCall={handleApiCall} />);
    let button = screen.getByText('GO!');
    expect(button).toBeInTheDocument();
    fireEvent.click(button)                        
    expect(handleApiCall).toHaveBeenCalled();      
  });
  it('Should Error out when a bad api call', () => {
    let handleBadApiCall = jest.fn(() => new Error('test'));

    render(<Form handleApiCall={handleBadApiCall} />);
    let button = screen.getByText('GO!');
    expect(button).toBeInTheDocument();
    fireEvent.click(button)                        
    expect(handleBadApiCall).toHaveBeenCalled();      
  });
});