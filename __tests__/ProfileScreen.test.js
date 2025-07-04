import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProfileScreen from '@screens/ProfileScreen';

describe('ProfileScreen', () => {
    const mockNavigate = jest.fn();

    const createTestProps = (props?: any) => ({
        navigation: {
            navigate: mockNavigate,
            ...props,
        },
    });

    it('renders Profile Screen title', () => {
        const props = createTestProps();
        const { getByTestId } = render(<ProfileScreen {...props} />);

        const title = getByTestId('profile');
        expect(title).toBeTruthy();
        expect(title).toHaveTextContent('Profile Screen');
    });

    it('navigates to Detail screen on button press', () => {
        const props = createTestProps();
        const { getByText } = render(<ProfileScreen {...props} />);

        fireEvent.press(getByText('Detail screen'));
        expect(mockNavigate).toHaveBeenCalledWith('Detail');
    });
});
