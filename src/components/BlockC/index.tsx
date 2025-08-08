import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface BlockCProps {
    value: number
}

const BlockC = (props: BlockCProps) => {
    console.log('In Block C',props.value);
  return (
    <View style={styles.container}>
        <View style={styles.blocks}>
              <Text>{props.value}</Text>
        </View>
      
    </View>
  );
};

export default React.memo(BlockC);
// export default BlockC;

const styles = StyleSheet.create({
  container: {flex:0.3, alignItems: 'center', justifyContent: 'center'},
  blocks:{height:100,width:100, backgroundColor:'red', justifyContent:'center', alignItems:'center'}
});
