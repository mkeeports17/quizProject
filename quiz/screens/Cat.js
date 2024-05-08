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

    return(

        <View style={styles.cat}>
            
            <View style={{backgroundColor:color}}>
                <Text style={styles.lives}>{"Question #" + round}</Text>
                <Text style={styles.lives}>{"Lives: " + lives}</Text>
            </View>
            
            <View style={{margin:25}}>
                <Text style={styles.heading}>Tap on the 
                <Pressable onPress={() => handleClick()} style={{marginTop:-3}}><Text style={styles.heading}> cutest cat!</Text></Pressable></Text>
            </View>
            
            

            <View style={styles.container}>
                <View style={styles.group}>
                    <Text style={styles.text}>Purrlock Holmes</Text>
                    <Pressable onPress={()=>catClick()}><Image style={styles.catimage} source={require('../images/cat9.jpg')} /></Pressable>
                </View>
                <View style={styles.group}>
                    <Text style={styles.text}>Purrfect</Text>
                    <Pressable onPress={()=>catClick()}><Image style={styles.catimage} source={require('../images/cat7.jpg')} /></Pressable>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.group}>
                    <Text style={styles.text}>Catolf Hitler</Text>
                    <Pressable onPress={()=>catClick()}><Image style={styles.catimage} source={require('../images/c.jpg')} /></Pressable>
                </View>
                <View style={styles.group}>
                    <Text style={styles.text}>Meowcolm X</Text>
                    <Pressable onPress={()=>catClick()}><Image style={styles.catimage} source={require('../images/x.jpg')} /></Pressable>
                </View>
                
            </View>
            <View style={styles.container}>
                <View style={styles.group}>
                    <Text style={styles.text}>Meowcaholic</Text>
                    <Pressable onPress={()=>catClick()}><Image style={styles.catimage} source={require('../images/cat8.jpeg')} /></Pressable>
                </View>
                <View style={styles.group}>
                    <Text style={styles.text}>Darth Kittyous</Text>
                    <Pressable onPress={()=>catClick()}><Image style={styles.catimage} source={require('../images/cat6.jpg')} /></Pressable>
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
        flexDirection:"column",
        //flex:1,
        backgroundColor: "#DFFDFF",
        height:1000,
    },
    text:{
        textAlign:"center",
        fontSize:18,
    },
    group:{
        
        marginLeft:20,
        margin:10,
    },
    container:{
        flexDirection:"row",
    },
    heading:{
        textAlign:"center",
        fontSize:35,
        
    },
    catimage:{

        width: 165,
        height: 165,
        resizeMode: 'contain'
    },
}
