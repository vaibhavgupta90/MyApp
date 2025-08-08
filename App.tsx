import * as React from 'react';
import { Linking, LogBox } from 'react-native';
import RootNavigation from './src/root_navigator';
import ErrorBoundary from './src/ErrorBoundries';

// import ErrorBoundary from 'react-native-error-boundary';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://a2239e0a517e9641d958b23ed6978ed5@o4509796359405568.ingest.us.sentry.io/4509796361240576',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

LogBox.ignoreLogs(['Warning: ...']);

export default Sentry.wrap(function App() {

  React.useEffect(() => {
    
    const handleDeepLink = ({ url }: { url: string }) => {
      const route = url.replace(/.*?:\/\//g, '');
      const routeName = route.split('/')[0];
      console.log('******** Deeplink Url ******** ',url)
      if (routeName === 'profile') {
        
        
      }
    };

    Linking.addEventListener('url', handleDeepLink);

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
    
  }, []);


  


  return (
    // <ErrorBoundary FallbackComponent={Fallback}
    //   onError={(error, stackTrace) => {
    //     console.log('Error from Root App:', error);
    //   }}
    // >
    <ErrorBoundary fallback='App screen error'>
      <RootNavigation />
    </ErrorBoundary>
  );
});