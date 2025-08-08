// import React, { useEffect } from 'react';
// import { View } from 'react-native';
// import { styles } from './styles';
// import CustomButton from '@components/CustomButton';
// import CustomTitle from '@components/CustomTitle';
// import BlockA from '@components/BlockA';
// import BlockB from '@components/BlockB';
// import BlockC from '@components/BlockC';


// const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) =>  {
//     const[count, setCount]= React.useState(10);
//     const [countA, setCountA]= React.useState(0);
//     const [countB, setCountB] = React.useState(0); 
//     const [countC, setCountC] = React.useState(0); 

//     useEffect(()=>{
//         const interval = setInterval(() => {
//             setCount(prevCount => {
//                 if (prevCount > 0) {
//                     return prevCount - 1;
//                 } else {
                    
//                     return 0;
                    
//                 }
//             });
//         }, 1000);
//         checkName();
//         return () => clearInterval(interval)

//         },[]);

//         const checkName=()=>{
//             let name = 'vaibhav';
//             console.log(name)
//             setTimeout(() => {
//                 name = 'vaibhav gupta' ;
//             },0)
//             console.log(name)
//           new Promise((resolve) => {
//                 name = 'Raman';
//                 resolve(name);
//             });

//             if (name === 'Raman') {
//                 name = 'vaibhav gupta';
//                 console.log('in block ',name)
//             }

//             console.log('out block ',name)
//         return name;
//         }

//     return (
//         <View style={styles.container}>
//             <BlockA value={countA} />
//             <BlockB value={countB} />
//             <BlockC value={countB}/>
//             {/* <CustomTitle title={'Home Screen'} testId='home'/>
//             <CustomTitle title={String(count)} testId='home' />
//             <CustomButton title={'About screen'} onPress={
//                 // () => navigation.navigate('About') } 
//                 () => setCount(10)} 
                
//                 /> */}
//                 {/* <CustomTitle title={checkName()} testId='home' /> */}
//         </View>
//     );
// }
// export default React.memo(HomeScreen);

import React, { useState, useCallback, useMemo, useEffect, Suspense } from 'react';
import { View, Button , FlatList, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import BlockA from '@components/BlockA';
import BlockB from '@components/BlockB';
import BlockC from '@components/BlockC';
import ErrorBoundary from '../../ErrorBoundries';
// import ErrorBoundary from 'react-native-error-boundary';
import { logError } from '../../utility';
import Fallback from '../../ErrorBoundries/BugScreen/BuggyComponent';


const HomeScreen: React.FC = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);
    const [data,setData] = useState(['A', 'B', 'C', 'D','E'])
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(false);

    // useCallback to memoize button handlers (if passed to children)
    // const incrementA = useMemo(() => {
    //     return () => {
    //     setCountA(prev => prev + 1);
    //     }
    // }, []);

    // const incrementB = useMemo(() => {
    //     setCountB(prev => prev + 1);
    // }, []);

    // const incrementC = useMemo(() => {
    //     setCountC(prev => prev + 1);
    // }, []);

    const incrementA = ()=>{
        setCountA(prev => prev + 1);
    };
    const incrementB = () => {
        setCountB(prev => prev + 1);
    }
    const incrementC = () => {
        setCountC(prev => prev + 1);
    }
    // const renderItems=({item})=>{
    //     setTimeout(() => {
    //         console.log(item, ' index of= ', data.indexOf(item));
    //         return (
    //             <Text>{item}</Text>
    //         )
    //     }, 500 * data.indexOf(item))
    // }
    const [crash, setCrash] = useState(false);
    if (crash) {
        // This will be caught by ErrorBoundary
        throw new Error("App crashed!");
    }


    const handleClickError=()=> {
        
        // setTimeout(() => {
        //     setLoading(true)
        // },2000)
        // throw new Error("Error App crashed!");
        setCrash(true);

        // try {
        //     // simulate error
        //     throw new Error("Error App crashed!");
        // } catch (err) {
        //     logError(err);
        //     throw new Error("Error App crashed!");
        // }
      
      }


    const renderItems = async ({ item }) => {
        await new Promise(resolve => resolve(true));
        console.log(item, ' index of= ', data.indexOf(item));
        return <Text>{item}</Text>;
    };

    const getItemLayout = useCallback(
        (data, index) => ({
          length: 50,
          offset: 50 * index,
          index,
        }),
        [],
      );

    const renderFlatList=()=>{
        return(
            <FlatList 
                data={data}
                renderItem={renderItems}
                keyExtractor={item => item}
                getItemLayout={getItemLayout}
                windowSize={10}
            />
        )
    }
    // useEffect(() => {
    //     if(count<10){
    //         const interval = setInterval(() => {
    //             setCount(prevCount => {
    //                 if (prevCount > 0) {
    //                     return prevCount + 1;
    //                 } else {
                        
    //                     return 0;
                        
    //                 }
    //             });
    //         }, 1000);
    //         return () => clearInterval(interval)
    //     }


    // },[])

    // const visibleInterval=()=>{
    //     return(
    //         <Text>{count}</Text>
    //     )
    // }
    const homeScreenView=()=>{
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Home Screen</Text>
                {/* <Suspense fallback={<Text>Loading...</Text>}>
                    <Text>Loaded</Text>
                </Suspense> */}
                <TouchableOpacity onPress={handleClickError} style={{height:40, width:200, backgroundColor:'red', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Crash App</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setLoading(false)}} style={{ height: 40, marginTop:10, width: 200, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>load false</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
   
        <View style={styles.container}>
            <ErrorBoundary fallback="error home screen">
            {/* <ErrorBoundary FallbackComponent={Fallback}
                onError={(error, stackTrace) => {
                    
                    console.log('Home screen Error:', error);
            }}
                    
            > */}
                {homeScreenView()}
            {/* {renderFlatList()} */}
            {/* {visibleInterval()} */}
            {/* <BlockA value={countA} />
            <BlockB value={countB} />
            <BlockC value={countC} /> */}

            {/* <Button title="Increment A" onPress={incrementA} /> */}
            {/* <Button title="Increment B" onPress={incrementB} />
            <Button title="Increment C" onPress={incrementC} /> */}
            </ErrorBoundary>
        </View>
      
    );
};

// export default React.memo(HomeScreen);
export default HomeScreen;

