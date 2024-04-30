import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Pressable} from "react-native";

import { useWindowDimensions} from "react-native";
import styles from "../styles";

//every time they lose the game they lose a life.

//I need to pass in the parameters of current amount of lives, also if the player is to die at this stage
//they will be taken to the death page, which will force them to go back to the home page.
function randomNum(){
    return Math.ceil(Math.random() * 6)
}


export default function PigGame(){
    [ currentRoll, setCurrentRoll ] = useState(0);
    [ roundScore, setRoundScore ] = useState(0);
    [ totalScore, setTotalScore ] = useState(0);

    [ totalHolds, setTotalHolds ] = useState(0);
    return(
        <View>
            <View><Text>Lives:</Text></View>
            <View><Text>WELCOME TO Hold 'em PIG GAME</Text></View>
            <View><Text>Current Dice Roll:{ currentRoll }</Text></View>
            <View><Text>RoundScore: { roundScore }</Text></View>
            <View>
                <Pressable onPress={()=>{
                    let ranInt = randomNum()
                    setTotalHolds(0)

                    setCurrentRoll(ranInt);
                    if(ranInt > 1){
                        setRoundScore(roundScore + ranInt)
                    }else{
                        setRoundScore(0)
                    }

                }}><Text>Roll</Text>
                </Pressable>

                <Pressable onPress={()=>{
                    setTotalScore(roundScore+totalScore)
                    setRoundScore(0)
                    setCurrentRoll(0)

                    setTotalHolds(totalHolds+1)
                    if((totalHolds>3) && totalScore>20){
                        console.log("Win Game!")
                        //eventually I want it to set the style of the
                        //next button to true.
                    }
                }}><Text>Hold</Text>
                </Pressable>
            </View>

            <View>
                <Text>Current Score {totalScore}</Text>
            </View>
            <View>
                <Text>Continue</Text>
                <Pressable><Text>Next Question</Text></Pressable>
            </View>
        </View>
    );

    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
    },
    styledText: {
      fontWeight: 'bold',
      color: 'blue',
    },
  });