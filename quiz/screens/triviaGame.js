import React, { useState, useEffect } from "react";
import { View, Text, Pressable, useWindowDimensions, ScrollView, LogBox } from "react-native";
import { useRoute } from '@react-navigation/native'; 

import styles from "../styles";
import quizData from "../quizData.json"

export default function TriviaGame({navigation}){
    LogBox.ignoreAllLogs(true)

    const route = useRoute(); 
    const [ question, setQuestion ] = useState("");
    const [ currentRound, setCurrentRound] = useState(route.params.passedRound);
    if(currentRound==0){setCurrentRound(11)}

    const [ options, setOptions ] = useState(quizData.questions[currentRound].options);
    const [ answer, setAnswer ] = useState(quizData.questions[currentRound].answer);
    const [ lives, setLives ] = useState(route.params.lives);

    const[ optionColor, setOptionColor ] = useState("#E5E1EE");
    const { width, height } = useWindowDimensions();

    useEffect(() => {
      //if current Round equals a certain number, then it will link to the winning page.
      if (currentRound == quizData.questions.length-1) {
        navigation.replace('WinDead', { lives: lives, gameWon: true });
      } else{
        //rerender the the page
        setQuestion(quizData.questions[currentRound].question);
        setOptions(quizData.questions[currentRound].options);
        setAnswer(quizData.questions[currentRound].answer)
      }

      //this question is only for round 12, when the options need to be rerendered more than once.
      if (currentRound == 12) {
         const interval = setInterval(() => {
          shuffleArray();
         }, Math.floor(Math.random() * (2000 - 500 + 1) ) + 500);
         return () => clearInterval(interval);
      }
    }, [currentRound]);

    function shuffleArray(){
      // Create a copy of the original array
      const newArray = [...quizData.questions[12].options]; 
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; 
      }
      // Update the state with the shuffled array
      setOptions(newArray); 
    };



    function handleAnswer( option, id ){
      //if the player guesses correctly they move on to the next round
      if (id == answer || option === "Wayne Gretzky"){
          //any customizable pages will go here
          if(currentRound == 3){
            navigation.replace('PigGame',{lives:lives});
          } else if (currentRound==14){
            navigation.replace('Cat',{lives:lives, passedRound:currentRound+1});
          }else{
            setCurrentRound(currentRound+1)
          }
      } else if (lives > 1){
          //if the user doesn't select the correct answer, they lose a life, and the buttons temporarily turn red
          setLives(lives-1)
          setOptionColor('red');
  
          setTimeout(() => {
            setOptionColor("#E5E1EE");
          }, 200);
      } else {
          //if the user loses all their lives, then they die
          navigation.replace('WinDead', { lives: lives, gameWon: false });
      }
    }
    
    //this is for a specific question
    function quesNinePress(){
      navigation.replace('JimmyMove',{lives:lives});
    }

    //this makes the page more responsive.
    function ScaleFontSize(fontSize) {
      let SCALE = 650;
      const ratio = fontSize / SCALE; // get ratio based on your standard scale 
      const newSize = Math.round(ratio * height);
      return newSize; 
    } 

  
    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          <Pressable disabled={currentRound!=9} onPress={()=>quesNinePress()}><Text contentWidth={width} style={styles.levels}>{"Question #" + currentRound}</Text></Pressable>
          <Text contentWidth={width} style={styles.lives}>{"Lives: " + lives}</Text>
        </View>
        <Text contentWidth={width} style={(question.length>35)? [styles.question,{fontSize:20}]:styles.question}>{question}</Text>
        <View style={currentRound===8 ? styles.optionsContainerAlt : styles.optionsContainer}>
        <ScrollView style={currentRound===8 ? styles.scroll : styles.noscroll}>
        {options.map((option, id)=>(
          <Pressable key={id} onPress={() => handleAnswer(option, id)}>
            <Text key={id} style={[styles.options, {backgroundColor:optionColor, fontSize:ScaleFontSize(25)}]}>{option}</Text>
          </Pressable>
          ))
        }
        </ScrollView>
        </View>
        
      </View>
    );





}