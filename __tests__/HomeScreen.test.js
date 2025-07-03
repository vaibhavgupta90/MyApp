import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';


const mockNavigate = jest.fn();

const createTestProps = (props) => ({
    navigation: {
        navigate: mockNavigate,
        ...props,
    },
});

describe('HomeScreen', () => {
    it('renders correctly and navigates to Details', () => {
        const props = createTestProps({});
        const { getByText } = render(<HomeScreen {...props} />);

        expect(getByText('Welcome to Home Page')).toBeTruthy();
        fireEvent.press(getByText('Go to Details'));
        expect(mockNavigate).toHaveBeenCalledWith('Details');
    });
});
