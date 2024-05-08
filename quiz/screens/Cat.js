import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable} from "react-native";
import { useRoute, StackActions } from '@react-navigation/native'; 


import { useWindowDimensions} from "react-native";

export default function Cath({navigation}, currentRound){
    const route = useRoute();
    const [color, setColor] = useState("#90F3FF");
    const [ lives, setLives ] = useState(route.params.lives);
    const [ round, setRound ] = useState(route.params.passedRound);
    
    function handleClick(){
        navigation.dispatch(
            StackActions.replace('Trivia', {
                passedRound:round+1, lives:lives
            })
        );
        console.log("handleClick");
    }

    function catClick(){
        console.log("catClick");
        
        setLives(lives-1);
        setColor("red");
        
        setTimeout(() => {
            setColor("#90F3FF");
        }, 500);
        
        if(lives < 2){
            navigation.replace('WinDead', { lives: lives, gameWon: false });
        }
    }
    const {width, height} = useWindowDimensions();

    function getHeight(picH) {
        let SCALE = 800;
        const ratio = picH / SCALE; // get ratio based on your standard scale 
        const newSize = Math.round(ratio * height);
        return newSize; 
    } 
    function getWidth(picW) {
        let SCALE = 800;
        const ratio = picW / SCALE; // get ratio based on your standard scale 
        const newSize = Math.round(ratio * height);
        return newSize; 
    }
    size = 150


    return(

        <View style={styles.cat}>
            
            <View style={[styles.heading,{backgroundColor:color}]}>
                <Text style={styles.lives}>{"Question #" + round}</Text>
                <Text style={styles.lives}>{"Lives: " + lives}</Text>
            </View>
            
            
            <View>
                <Text style={styles.heading}>
                    <View style={{alignContent:"center"}}>
                    <Text style={styles.heading}>Tap on the </Text>
                    <Pressable onPress={() => handleClick()} >
                        <Text style={styles.heading}> cutest cat!</Text>
                    </Pressable>
                    </View>
                </Text>
            </View>
            
            
            <View >
                <View style={styles.container}>
                    <View style={styles.group}>
                        <Text style={styles.text}>Purrlock Holmes</Text>
                        <Pressable onPress={()=>catClick()}><Image style={[styles.catimage,{width:getWidth(size),height:getHeight(size)}]} source={require('../images/cat9.jpg')} /></Pressable>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.text}>Purrfect</Text>
                        <Pressable onPress={()=>catClick()}><Image style={[styles.catimage,{width:getWidth(size),height:getHeight(size)}]} source={require('../images/cat7.jpg')} /></Pressable>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.group}>
                        <Text style={styles.text}>Catolf Hitler</Text>
                        <Pressable onPress={()=>catClick()}><Image style={[styles.catimage,{width:getWidth(size),height:getHeight(size)}]} source={require('../images/c.jpg')} /></Pressable>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.text}>Meowcolm X</Text>
                        <Pressable onPress={()=>catClick()}><Image style={[styles.catimage,{width:getWidth(size),height:getHeight(size)}]} source={require('../images/x.jpg')} /></Pressable>
                    </View>
                    
                </View>
                <View style={styles.container}>
                    <View style={styles.group}>
                        <Text style={styles.text}>Meowcaholic</Text>
                        <Pressable onPress={()=>catClick()}><Image style={[styles.catimage,{width:getWidth(size),height:getHeight(size)}]} source={require('../images/cat8.jpeg')} /></Pressable>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.text}>Darth Kittyous</Text>
                        <Pressable onPress={()=>catClick()}><Image style={[styles.catimage,{width:getWidth(size),height:getHeight(size)}]} source={require('../images/cat6.jpg')} /></Pressable>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

const styles = {
    top:{
        backgroundColor:"#90F3FF",
    },
    lives:{
        textAlign:"center",
        fontSize:20,
    },
    cat: {
        flex:1,
        flexDirection:"column",
        backgroundColor: "#DFFDFF",
        alignItems: 'center',
    },
    text:{
        textAlign:"center",
        fontSize:18,
    },
    group:{
        
        margin:10,
    },
    container:{
        flexDirection:"row",
    },
    heading:{
        textAlign:"center",
        fontSize:35,
        width:"100%"
        
    },
    catimage:{

        width: 165,
        height: 165,
        resizeMode: 'contain'
    },
}
