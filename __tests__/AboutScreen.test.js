import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AboutScreen from '@screens/AboutScreen'; 

describe('AboutScreen', () => {
    const mockNavigate = jest.fn();

    const createTestProps = (props?: any) => ({
        navigation: {
            navigate: mockNavigate,
            ...props,
        },
    });

    it('renders About Screen title', () => {
        const props = createTestProps();
        const { getByTestId } = render(<AboutScreen {...props} />);

        const title = getByTestId('about');
        expect(title).toBeTruthy();
        expect(title).toHaveTextContent('About Screen');
    });

    it('navigates to Profile screen on button press', () => {
        const props = createTestProps();
        const { getByText } = render(<AboutScreen {...props} />);

        fireEvent.press(getByText('Profile screen'));
        expect(mockNavigate).toHaveBeenCalledWith('Profile');
    });
});
