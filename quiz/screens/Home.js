import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Pressable} from "react-native";

import { useWindowDimensions} from "react-native";
import styles from "../styles";

function onPressFunction(){

}

export default function Home({navigation}){


    return(

        <View>
            <Text>This is the Home page</Text>
            <Pressable onPress={() => {
                navigation.navigate('Trivia');
            }}><Text>Im Pressable</Text></Pressable>
        </View>
    )



}



