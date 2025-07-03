import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DetailScreen from '../src/screens/DetailScreen';


const mockGoBack = jest.fn();

const createTestProps = (props) => ({
    navigation: {
        goBack: mockGoBack,
        ...props,
    },
});

describe('DetailScreen', () => {
    it('renders correctly and goes back', () => {
        const props = createTestProps({});
        const { getByText } = render(<DetailScreen {...props} />);

        expect(getByText('This is the Details Page')).toBeTruthy();
        fireEvent.press(getByText('Go Back'));
        expect(mockGoBack).toHaveBeenCalled();
    });
});
