import * as React from 'react';
import { Text, View,TouchableOpacity, Button } from 'react-native';
import { style } from './styles';
import { enableBiometricAuth } from '../../utility';
import * as Sentry from '@sentry/react-native';

interface BiometricAuthProps {}

const BiometricAuth = (props: BiometricAuthProps) =>  {

const _enableBiometricAuth =  () => {
    const callbackObj={
        onSuccess:(res: any)=>{
            console.log('isSuccess ',res)
        },
        onFailure: (res: any) => {
            console.log('isFailure ', res)
        }
    }
    enableBiometricAuth(callbackObj);
    };

  return (
    <View style={style.container}>
      <Text>Biometric Authentication Screen</Text>
     <TouchableOpacity 
     style={style.button}
              onPress={_enableBiometricAuth}>
              <Text>Authenticate</Text>
     </TouchableOpacity>
      <TouchableOpacity
        style={[style.button,{marginTop:10}]}
        onPress={()=>Sentry.captureException(new Error('Second error'))}>
        <Text>Try Me</Text>
      </TouchableOpacity>
      

    </View>
  );
};

export default BiometricAuth;


