import React, { useState, useEffect } from "react";
import { View, Text, Pressable, useWindowDimensions, ScrollView, Dimensions, LogBox } from "react-native";
import { useRoute } from '@react-navigation/native'; 

import styles from "../styles";
import quizData from "../quizData.json"
import { NativeStackView } from "@react-navigation/native-stack";




export default function TriviaGame({navigation}){
LogBox.ignoreAllLogs(true)

    const route = useRoute(); 
    const [ question, setQuestion ] = useState("");
    const [ correctId, setCorrectId ] = useState("");
    const [ currentRound, setCurrentRound] = useState(route.params.passedRound);
    const newOptions = [];


    if(currentRound==0){setCurrentRound(1)}

    const [ options, setOptions] = useState(quizData.questions[currentRound].options);
    const [ answer, setAnswer ] = useState(quizData.questions[currentRound].answer);
    const [ lives, setLives ] = useState(route.params.lives);

    const[ optionColor, setOptionColor ] = useState("#E5E1EE");

    useEffect(() => {
      //if current Round equals a certain number, then it will link to the end page.
      if (currentRound == quizData.questions.length-1) {
        navigation.replace('WinDead', { lives: lives, gameWon: true });
      } else{
        setQuestion(quizData.questions[currentRound].question);
        setOptions(quizData.questions[currentRound].options);
        setAnswer(quizData.questions[currentRound].answer)
      }

      if (currentRound == 12) {
         const interval = setInterval(() => {
          setCurrentRound(12)
          setOptions(quizData.questions[currentRound].options)
          shuffleArray();
         }, Math.floor(Math.random() * (2000 - 500 + 1) ) + 500);
         return () => clearInterval(interval);
      }
    }, [currentRound]);

    function shuffleArray(){
      setCurrentRound(12);
      setOptions(quizData.questions[currentRound].options)
      const newArray = [...quizData.questions[12].options]; // Create a copy of the original array
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
      }
      setOptions(newArray); // Update the state with the shuffled array
    };



    function handleAnswer( option, id ){
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
        if(currentRound == 12){
          shuffleArray();
        }
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
    const { width,height } = useWindowDimensions();
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
        <Text contentWidth={width} style={styles.question}>{question}</Text>
        
        <View style={currentRound===8 ? styles.optionsContainerAlt : styles.optionsContainer}>
        <ScrollView style={currentRound===8 ? styles.scroll : styles.noscroll}>
        {options.map(( option, id)=>(
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