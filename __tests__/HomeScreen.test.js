import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '@screens/HomeScreen'; // adjust if needed

describe('HomeScreen', () => {
    const mockNavigate = jest.fn();

    const createTestProps = (props?: any) => ({
        navigation: {
            navigate: mockNavigate,
            ...props,
        },
    });

    it('renders title correctly', () => {
        const props = createTestProps();
        const { getByTestId } = render(<HomeScreen {...props} />);

        const title = getByTestId('home');
        expect(title).toBeTruthy();
        expect(title).toHaveTextContent('Home Screen');
    });

    it('navigates to About screen when button is pressed', () => {
        const props = createTestProps();
        const { getByText } = render(<HomeScreen {...props} />);

        fireEvent.press(getByText('About screen'));
        expect(mockNavigate).toHaveBeenCalledWith('About');
    });
});
