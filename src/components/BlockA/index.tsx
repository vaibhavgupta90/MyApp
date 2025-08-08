import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface BlockAProps {
    value: number
}

const BlockA = (props: BlockAProps) => {
    console.log('In Block A', props.value);
  return (
    <View style={styles.container}>
        <View style={styles.blocks}>
              <Text>{props.value}</Text>
        </View>
      
    </View>
  );
};

export default React.memo(BlockA);
// export default BlockA;

const styles = StyleSheet.create({
  container: {flex:0.3, alignItems: 'center', justifyContent: 'center'},
  blocks:{height:100,width:100, backgroundColor:'red', justifyContent:'center', alignItems:'center'}
});
