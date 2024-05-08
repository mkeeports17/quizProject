import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable} from "react-native";

import { useWindowDimensions} from "react-native";

export default function Cat({navigation}){
    return(

        <View style={styles.cat}>
            <Text style={styles.heading}>Tap on the cutest cat!</Text>
            

            <View style={styles.container}>
                <View>
                    <Text>Purrlock Holmes</Text>
                    <Pressable><Image style={styles.catimage} source={require('../images/cat9.jpg')} /></Pressable>
                </View>
                <View>
                    <Text>Purrfect</Text>
                    <Pressable><Image style={styles.catimage} source={require('../images/cat7.jpg')} /></Pressable>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text>Catolf Hitler</Text>
                    <Pressable><Image style={styles.catimage} source={require('../images/cat8.jpeg')} /></Pressable>
                </View>
                <View>
                    <Text>Meowcolm X</Text>
                    <Pressable><Image style={styles.catimage} source={require('../images/cat8.jpeg')} /></Pressable>
                </View>
                
            </View>
            <View style={styles.container}>
                <View>
                    <Text>Meowcaholic</Text>
                    <Pressable><Image style={styles.catimage} source={require('../images/cat8.jpeg')} /></Pressable>
                </View>
                <View>
                    <Text>Darth Kittyous</Text>
                    <Pressable><Image style={styles.catimage} source={require('../images/cat6.jpg')} /></Pressable>
                </View>
                
            </View>
            
        </View>
    )
}

const styles = {
    cat: {
        flexDirection:"column",
        //flex:1,
        backgroundColor: "#DFFDFF",
        height:1000,
    },
    container:{
        flexDirection:"row",
    },
    heading:{
        textAlign:"center",
        fontSize:40,
        margin:30,
    },
    catimage:{
        margin:10,
        width: 175,
        height: 175,
        resizeMode: 'contain'
    },
}
