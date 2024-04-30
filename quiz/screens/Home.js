import React, { useState, useEffect } from "react";
import { View, Text, Pressable} from "react-native";

import { useWindowDimensions} from "react-native";
import styles from "../styles";

function onPressFunction(){

}

export default function Home({navigation}){


    return(

        <View style={styles.container}>
            <Text style={styles.heading}>Impossible Quiz</Text>
            <Text style={styles.credits}>by: Ezra Miller and Michael Keeports</Text>
            <Text style={styles.desc}>"The Impossible Quiz: Mobile Edition" brings the classic 
                brain-teasing experience from Coolmath to your fingertips. Prepare to embark on an 
                adventure filled with mind-bending questions, absurd challenges, and plenty of surprises. 
                With its quirky humor and deviously tricky questions, this game will test your wits like 
                never before. Can you beat "The Impossible Quiz"?</Text>
            <Pressable onPress={() => {
                navigation.navigate('Trivia', {passedRound: 0, lives: 3});
                }}>
                <Text style={styles.begin}>Begin Quiz</Text>
            </Pressable>
        </View>
    )



}



