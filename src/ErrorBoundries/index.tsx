// components/ErrorBoundary.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { logError } from '../utility';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: undefined };
    }

    static getDerivedStateFromError(error: Error) {
        // console.log('****In getDerivedStateFromError****')
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // console.log('****In catch error****')
        logError(error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: undefined });
    };

    render() {
        if (this.state.hasError) {
            // return this.props.fallback;
            return (
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 18, color: 'red' }}>Oops! Something went wrong.</Text>
                    <Text>{this.state.error?.message}</Text>
                    <Text>{this.props.fallback}</Text>
                    <Button title="Try Again" onPress={this.handleReset} />
                </View>
            );
        }
        // else{
        //     return this.props.children;
        // }
        return this.props.children;

        
    }
}

export default ErrorBoundary;
