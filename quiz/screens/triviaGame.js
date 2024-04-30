import React, { useState, useEffect } from "react";
import { View, Text, Button, Pressable} from "react-native";


import { useWindowDimensions} from "react-native";
import styles from "../styles";

import quizData from "../quizData.json"

import { useRoute } from '@react-navigation/native'; 



export default function TriviaGame({navigation}){
    //const {Param }= navigation.getParams('passedRound');
    const route = useRoute(); 
    const [ question, setQuestion ] = useState("");
    const [ correctId, setCorrectId ] = useState("");
    const [ currentRound, setCurrentRound] = useState(route.params.passedRound);

    const [ options, setOptions] = useState(quizData.questions[currentRound].options);
    const [ answer, setAnswer ] = useState(quizData.questions[currentRound].answer);
    const [ lives, setLives ] = useState(3);
    useEffect(() => {
      setQuestion(quizData.questions[currentRound].question);
      setOptions(quizData.questions[currentRound].options);
      setAnswer(quizData.questions[currentRound].answer)
      
    }, [currentRound]);

    if((route.params.passedRound != currentRound) && route.params.passedRound == 5){
      setCurrentRound(5);
    }
  
    const { width } = useWindowDimensions();
  
    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          <Text contentWidth={width} style={styles.levels}>{"Question #" + (currentRound+1)}</Text>
          <Text contentWidth={width} style={styles.lives}>{"Lives: " + lives}</Text>
        </View>
        <Text contentWidth={width} style={styles.question}>{question}</Text>
        <View style={styles.optionsContainer}>
        {options.map(( option, id)=>(
          <Pressable key={id} onPress={(val) => {
            if (id == answer){

              //any customizable pages will go here
              if(currentRound == 3){
                navigation.navigate('PigGame',{lives:lives});
              }else{
                setCurrentRound(currentRound+1)

              }
            } else if (lives > 0){
              setLives(lives-1)
            } else {
              setCurrentRound(0)
              setLives(3)
            } }}>
            <Text key={id} style={styles.options}>{option}</Text>
          </Pressable>
          ))
        }
        </View>

      </View>
    );





}