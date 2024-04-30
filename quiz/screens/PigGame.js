import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Pressable} from "react-native";

import { useWindowDimensions} from "react-native";
import styles from "../styles";

//every time they lose the game they lose a life.

//I need to pass in the parameters of current amount of lives, also if the player is to die at this stage
//they will be taken to the death page, which will force them to go back to the home page.
export default function PigGame(){
    return(
        <View>
            <View><Text>Lives:</Text></View>
            <View><Text>WELCOME TO PIG GAME, SCORE 25 POINTS TO WIN</Text></View>
            <View>
                <Pressable onPress={()=>{
                    
                }}></Pressable>
            </View>
            <View>
                <Text>Current Score {}</Text>
            </View>
            <View>
                <Text>Continue</Text>
                <Pressable>Next Question</Pressable>
            </View>
        </View>
    );

}