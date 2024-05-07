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

    if(currentRound==0){setCurrentRound(1)}

    const [ options, setOptions] = useState(quizData.questions[currentRound].options);
    const [ answer, setAnswer ] = useState(quizData.questions[currentRound].answer);
    const [ lives, setLives ] = useState(route.params.lives);

    const[ optionColor, setOptionColor ] = useState("#E5E1EE");

    useEffect(() => {
      console.log("current round " + currentRound)
      //if current Round equals a certain number, then it will link to the end page.
      if (currentRound == quizData.questions.length-1) {
        navigation.replace('WinDead', { lives: lives, gameWon: true });

      } else{
      setQuestion(quizData.questions[currentRound].question);
      setOptions(quizData.questions[currentRound].options);
      setAnswer(quizData.questions[currentRound].answer)
      }
    
    }, [currentRound]);

    useEffect(() => {
      if(currentRound ==10 ){

      }
      setQuestion(quizData.questions[currentRound].question);
      setOptions(quizData.questions[currentRound].options);
      setAnswer(quizData.questions[currentRound].answer)
    }, [currentRound]);

    function shuffleArray(){
      
    }

    function handleAnswer( option, id ){
      console.log(answer + " but was " + id);
      if (id == answer){
        // || option.equals("Wayne Gretzky")
          //any customizable pages will go here
          if(currentRound == 3){
            navigation.replace('PigGame',{lives:lives});
          }else{
            setCurrentRound(currentRound+1)
          }
      } else if (lives > 0){
          setLives(lives-1)
          setOptionColor('red');
  
          setTimeout(() => {
            setOptionColor("#E5E1EE");
          }, 200); 
      } else {
        navigation.replace('WinDead', { lives: lives, gameWon: false });
      }
    }
 
    function quesNinePress(){
      navigation.replace('JimmyMove',{lives:lives});

    }
    const { width } = useWindowDimensions();

    function makeRedBut() {
      // Change button color to red temporarily

    };
  
    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          <Pressable disabled={currentRound!=9} onPress={()=>quesNinePress()}><Text contentWidth={width} style={styles.levels}>{"Question #" + currentRound}</Text></Pressable>
          <Text contentWidth={width} style={styles.lives}>{"Lives: " + lives}</Text>
        </View>
        <Text contentWidth={width} style={styles.question}>{question}</Text>
        
        <View style={currentRound===8 ? styles.optionsContainerAlt : styles.optionsContainer}>
        <ScrollView style={currentRound===8 ? styles.scroll : styles.noscroll}>
        {options.map(( option, id)=>(
          <Pressable key={id} onPressOut={()=>makeRedBut()} onPress={() => handleAnswer(option, id)}>
            <Text key={id} style={[styles.options, {backgroundColor:optionColor}]}>{option}</Text>
          </Pressable>
          ))
        }
        </ScrollView>
        </View>
        
      </View>
    );





}