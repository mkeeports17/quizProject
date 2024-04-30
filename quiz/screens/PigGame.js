import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Pressable, useWindowDimensions} from "react-native";
import { StackActions, useRoute } from '@react-navigation/native';

import pigStyles from "../pigStyles";


//every time they lose the game they lose a life.

//I need to pass in the parameters of current amount of lives, also if the player is to die at this stage
//they will be taken to the death page, which will force them to go back to the home page.
function randomNum(){
    return Math.ceil(Math.random() * 6)
}


export default function PigGame({navigation}){
    
    const route = useRoute(); 
    [ livesAmount, setLivesAmount ] = useState(route.params.lives);

    [ currentRoll, setCurrentRoll ] = useState(0);
    [ roundScore, setRoundScore ] = useState(0);
    [ totalScore, setTotalScore ] = useState(0);

    [ totalHolds, setTotalHolds ] = useState(0);
    [ isStyled, setIsStyled ] = useState(true);


    function onRoll(){
        let ranInt = randomNum()
        setTotalHolds(0)

        setCurrentRoll(ranInt);
        if(ranInt > 1){
            setRoundScore(roundScore + ranInt)
        }else{
            setLivesAmount(livesAmount-1)
            setRoundScore(0)
        }

        if (livesAmount == 0){
            navigation.dispatch(
                StackActions.replace('Trivia', {
                    passedRound:0,
                })
              );
        }

    }
    function onHold(){
        setTotalScore(roundScore+totalScore)
        setRoundScore(0)
        setCurrentRoll(0)

        setTotalHolds(totalHolds+1)
        if((totalHolds>3) && totalScore>20){
            setIsStyled(false)
            console.log("Win Game!")
            //eventually I want it to set the style of the
            //next button to true.
        }
    }

    return(
        <View style={pigStyles.container}>
            <View><Text>Lives:{livesAmount}</Text></View>
            <View><Text style={pigStyles.heading}>WELCOME TO Hold 'em PIG GAME</Text></View>
            <View><Text style={pigStyles.items1}>Current Dice Roll:{ currentRoll }</Text></View>
            <View><Text style={pigStyles.items1}>RoundScore: { roundScore }</Text></View>
            <View>
                <Pressable onPress={()=>onRoll()}><Text style={pigStyles.items1}>Roll</Text></Pressable>

                <Pressable onPress={()=>onHold()}><Text style={pigStyles.items1}>Hold</Text></Pressable>
            </View>

            <View>
                <Text style={pigStyles.items1}>Current Score: {totalScore}</Text>
            </View>
            <View >
                <Text style={pigStyles.items1}>Continue</Text>
                <Pressable onPress={() => {
                    navigation.dispatch(
                        StackActions.replace('Trivia', {
                            passedRound:5, lives:livesAmount
                        })
                      );

                }}><Text style={pigStyles.next}>Next Question</Text></Pressable>
            </View>
        </View>
    );

    
}
