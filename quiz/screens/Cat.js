import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable} from "react-native";

import { useWindowDimensions} from "react-native";

export default function Cat({navigation}){
    return(

        <View style={styles.container}>
            <Text style={styles.cat}>Tap on the cutest cat!</Text>

            <Pressable style={styles.catimage}><Image source={require('../images/cat1.jpg')} /></Pressable>
            <Pressable style={styles.catimage}><Image source={require('../images/cat2.jpg')} /></Pressable>
            <Pressable style={styles.catimage}><Image source={require('../images/cat3.jpg')} /></Pressable>
            <Pressable style={styles.catimage}><Image source={require('../images/cat4.jpg')} /></Pressable>
            <Pressable style={styles.catimage}><Image source={require('../images/cat5.jpg')} /></Pressable>
        </View>
    )
}

const styles = {
    cat: {
        textAlign:"center",
        fontSize:40,
        margin:30,
    },
    catimage:{
        flex: 1,
        width: 5,
        height: 7,
        resizeMode: 'contain'
    },
}
