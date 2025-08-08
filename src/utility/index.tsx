import { Alert } from "react-native";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import * as Sentry from '@sentry/react-native';

export const logError = (error: Error, errorInfo?: any) => {
    // You can send this to your backend, Sentry, Firebase, etc.
    console.log('Logged Error: ', error.message);
    console.log('Error Info: ', errorInfo);
    Sentry.captureException(error);
    

    // Example: fetch('/log-error', { method: 'POST', body: JSON.stringify(...) })
  };

  export const handleBiometricAuth = async (callback: any) => {
              try {
                  const rnBiometrics = new ReactNativeBiometrics();
                  const { success, error } = await rnBiometrics.simplePrompt({ promptMessage: 'Authenticate to continue' });
      
                  if (success) {
                      Alert.alert('Success', 'Biometric authentication successful');
                    callback.onSuccess('Biometric authentication successful');
                      return true;
                  } else {
                      // Alert.alert('Authentication failed', 'Biometric authentication failed');
                    callback.onFailure('Biometric authentication failed');
                      return false;
                  }
              } catch (error) {
                  console.error('[handleBiometricAuth] Error:', error);
                  Sentry.captureException(error)
                  Alert.alert('Error', 'Biometric authentication failed from device');
                  callback.onFailure('Biometric authentication failed from device');
                  return false;
              }
          };

  export const enableBiometricAuth = (callback: any) => {
          const rnBiometrics = new ReactNativeBiometrics();
          rnBiometrics.isSensorAvailable()
              .then((resultObject) => {
                  const { available, biometryType } = resultObject;
  
                  if (available && biometryType === BiometryTypes.TouchID) {
                      Alert.alert('TouchID', 'Would you like to enable TouchID authentication for the next time?', [
                          {
                              text: 'Yes please',
                              onPress: async () => {
  
                                  Alert.alert('Success!', 'TouchID authentication enabled successfully!');
                              },
                          },
                          { text: 'Cancel', style: 'cancel' },
                      ]);
                  } else if (available && biometryType === BiometryTypes.FaceID) {
                      Alert.alert('FaceID', 'Would you like to enable FaceID authentication for the next time?', [
                          {
                              text: 'Yes please',
                              onPress: async () => {
  
                                  Alert.alert('Success!', 'FaceID authentication enabled successfully!');
                              },
                          },
                          { text: 'Cancel', style: 'cancel' },
                      ]);
                  } else if (available && biometryType === BiometryTypes.Biometrics) {
                    handleBiometricAuth(callback);
                      // Alert.alert('Device Supported Biometrics', 'Biometrics authentication is supported.');
                  } else {
                    callback.onFailure('Biometrics not supported');
                      Sentry.captureException(new Error('Biometrics not supported'))
                       Alert.alert('Biometrics not supported', 'This device does not support biometric authentication.');
                  }
              })
              .catch((error) => {
                  console.error('Error:', error);
                  Sentry.captureException(error)
                  // Alert.alert('Error', 'An error occurred while checking biometrics availability.');
                callback.onFailure('An error occurred while checking biometrics availability.');
              });
      };