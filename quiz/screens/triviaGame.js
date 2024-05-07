import React, { useState, useEffect } from "react";
import { View, Text, Pressable, useWindowDimensions, ScrollView} from "react-native";
import { useRoute } from '@react-navigation/native'; 

import styles from "../styles";
import quizData from "../quizData.json"
import { NativeStackView } from "@react-navigation/native-stack";




export default function TriviaGame({navigation}){
    const route = useRoute(); 
    const [ question, setQuestion ] = useState("");
    const [ correctId, setCorrectId ] = useState("");
    const [ currentRound, setCurrentRound] = useState(route.params.passedRound);
    const newOptions = [];

    if(currentRound==0){setCurrentRound(11)}

    const [ options, setOptions] = useState(quizData.questions[currentRound].options);
    const [ answer, setAnswer ] = useState(quizData.questions[currentRound].answer);
    const [ lives, setLives ] = useState(route.params.lives);

    const[ optionColor, setOptionColor ] = useState("#E5E1EE");

    useEffect(() => {
      console.log("current round " + currentRound)
      //if current Round equals a certain number, then it will link to the end page.
      if (currentRound == quizData.questions.length-1) {
        navigation.replace('WinDead', { lives: lives, gameWon: true });
        console.log("end of the game.");
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

    // function shuffleArraye(){
    //   setCurrentRound(12);
    //   console.log(currentRound);
    //   setOptions(quizData.questions[10].options);
    //   newOptions[0] = options[1];
    //   newOptions[1] = options[3];
    //   newOptions[2] = options[0];
    //   newOptions[3] = options[2];
    //   setOptions(newOptions); 
    //   console.log(options[0].toString()+","+options[1].toString()+","+options[2].toString()+","+options[3].toString() + " -> " + newOptions[0].toString()+","+newOptions[1].toString()+","+newOptions[2].toString()+","+newOptions[3].toString());
    //   console.log(currentRound);
    //   if(options[0]==="Wayne Gretzky"){
    //     setAnswer(2);
    //   } else if(options[1]==="Wayne Gretzky"){
    //     setAnswer(0);
    //   } else if(options[2]==="Wayne Gretzky"){
    //     setAnswer(3);
    //   } else if(options[3]==="Wayne Gretzky"){
    //     setAnswer(1);
    //   }
    // }

    function handleAnswer( option, id ){
      console.log(answer + " but was " + id);
      if (id == answer || option === "Wayne Gretzky"){
          //any customizable pages will go here
          if(currentRound == 3){
            navigation.replace('PigGame',{lives:lives});
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
    const { width } = useWindowDimensions();


  
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
            <Text key={id} style={[styles.options, {backgroundColor:optionColor}]}>{option}</Text>
          </Pressable>
          ))
        }
        </ScrollView>
        </View>
        
      </View>
    );





}