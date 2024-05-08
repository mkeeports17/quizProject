import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, Pressable, Dimensions, Image, Animated} from "react-native";

import { useRoute, StackActions } from '@react-navigation/native'; 

//A picture of jimmy will appear on the screen, and whenever the user
//clicks on jimmy he will move around.


export default function JimmyMove({navigation}){
    const route = useRoute(); 
    const [ lives, setLives ] = useState(route.params.lives);

    const moveX = useRef(new Animated.Value(0)).current;
    const moveY = useRef(new Animated.Value(0)).current;
    const [ xval, setXVal ] = useState(50);
    const [ yval, setYVal ] = useState(50);

    const width = Dimensions.get('window').width-50;
    const height = Dimensions.get('window').height-50;

    const maxPokes = 15;
    const [ pokes, setPokes ] = useState(0);

    const offset = 20;


    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function moveJimmy() {
        setPokes(pokes+1)
        setXVal(randomInt(-width/2,width/2))
        setYVal(randomInt((-height/2)+offset, (height/2)-offset))


        Animated.timing(moveX, {
            toValue: xval,
            duration: 500,
            useNativeDriver: true,
        }).start();
        Animated.timing(moveY, {
            toValue: yval,
            duration: 500,
            useNativeDriver: true,
        }).start();
        

    }
    function nextRound(){
        if(pokes>= maxPokes){
            navigation.dispatch(
                StackActions.replace('Trivia', {
                    passedRound:11, lives:lives
                })
            );
        }
    }
    
    return(
        <View style={styles.container}>
            <View><Text>Lives {lives}</Text></View>
            <View style={styles.smcontainer}>
                <View>
                    <Text style={styles.text}>Bother Jimmy {pokes}</Text>
                </View>
                <Animated.View
                        style={[
                            styles.fadingContainer,
                            {
                            transform: [
                                { translateY: moveY},
                                { translateX: moveX},
                            ]
                            }
                        ]}>
                    <Pressable onPress={() => moveJimmy()}><Image style={styles.image} source={require('../images/jimmy.png')} /></Pressable>
                </Animated.View>
                <View style={(pokes>=maxPokes)?styles.visibleText:styles.invisibleText}>
                    <Pressable onPress={() => nextRound()}><Text style={styles.buttonText}>Next Level</Text></Pressable>
                </View>
            </View>
        </View>
    );

}



const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:"black" 
    },
    smcontainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fadingContainer: {
      height: 159,

    },
    fadingText: {
      fontSize: 28,
    },
    buttonRow: {
      flexBasis: 100,
      justifyContent: 'space-evenly',
      marginVertical: 16,

    },
    image: {
        flex: 1,
        width: 50,
        height: 70,
        resizeMode: 'contain'
    },
    text:{
        color: 'white',
        fontSize:20,
    },
    visibleText:{
        display:"flex",
        backgroundColor:"#69EEC7",
    },
    invisibleText:{
        display:'none',
    },
    buttonText:{
        fontSize:40,
    },
  });