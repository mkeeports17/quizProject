import React, { useState, useEffect } from "react";
import { View, Text, Pressable, useWindowDimensions, ScrollView} from "react-native";
import { useRoute } from '@react-navigation/native'; 

import styles from "../styles";
import quizData from "../quizData.json"




export default function TriviaGame({navigation}){
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

    function handleAnswer( id ){
      if (id == answer){
          //any customizable pages will go here
          if(currentRound == 3){
            navigation.navigate('PigGame',{lives:lives});
          }else if(currentRound == 7){
            navigation.navigate('Close');
          }else{
            setCurrentRound(currentRound+1)
          }
      } else if (lives > 0){
          setLives(lives-1)
      } else {
        setCurrentRound(0)
        setLives(3)
      }
    }
 
  
    const { width } = useWindowDimensions();
  
    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          <Text contentWidth={width} style={styles.levels}>{"Question #" + (currentRound+1)}</Text>
          <Text contentWidth={width} style={styles.lives}>{"Lives: " + lives}</Text>
        </View>
        <Text contentWidth={width} style={styles.question}>{question}</Text>
        
        <View style={currentRound===7 ? styles.optionsContainerAlt : styles.optionsContainer}>
        <ScrollView style={currentRound===7 ? styles.scroll : styles.noscroll}>
        {options.map(( option, id)=>(
          <Pressable key={id} onPress={() => handleAnswer(id)}>
            <Text key={id} style={styles.options}>{option}</Text>
          </Pressable>
          ))
        }
        </ScrollView>
        </View>
        
      </View>
    );





}