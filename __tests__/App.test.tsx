import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App'; 

describe('App Entry Point', () => {
  it('renders the RootNavigation without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Home Screen')).toBeTruthy(); 
  });
});

