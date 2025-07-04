import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DetailScreen from '@screens/DetailScreen';

describe('DetailScreen', () => {
    const mockPop = jest.fn();

    const createTestProps = (props?: any) => ({
        navigation: {
            pop: mockPop,
            ...props,
        },
    });

    it('renders Detail Screen title', () => {
        const props = createTestProps();
        const { getByTestId } = render(<DetailScreen {...props} />);

        const title = getByTestId('detail');
        expect(title).toBeTruthy();
        expect(title).toHaveTextContent('Detail Screen');
    });

    it('calls navigation.pop on button press', () => {
        const props = createTestProps();
        const { getByText } = render(<DetailScreen {...props} />);

        fireEvent.press(getByText('Go Back'));
        expect(mockPop).toHaveBeenCalled();
    });
});
