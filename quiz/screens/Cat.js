import React, { useState, useEffect } from "react";
import { View, Text, Pressable} from "react-native";

import { useWindowDimensions} from "react-native";
import styles from "../styles";

export default function Cat({navigation}){
    return(

        <View style={styles.container}>
            <Text style={styles.close}>Tap on the cutest cat!</Text>

            <Pressable><Image source={require('../images/cat1.jpg')} /></Pressable>
        </View>
    )

}