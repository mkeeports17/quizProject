import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button} from "react-native";
import Swipeable from "./Swipeable";  
import RenderHtml from "react-native-render-html";
import { useWindowDimensions} from "react-native";
import styles from "./styles";

//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";


import quizData from "./quizData.json"

export default function App() {
  const [ question, setQuestion ] = useState("");
  const [ correctId, setCorrectId ] = useState("");
  const [ currentRound, setCurrentRound] = useState(0);
  const [ options, setOptions] = useState(quizData.questions[currentRound].options);
  const [ answer, setAnswer ] = useState(quizData.questions[currentRound].answer);
  const [ lives, setLives ] = useState(3);

  useEffect(() => {
    setQuestion(quizData.questions[currentRound].question);
    setOptions(quizData.questions[currentRound].options);
    setAnswer(quizData.questions[currentRound].answer)
  }, [currentRound]);

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
          // <RenderHtml baseStyle={ baseStyle.question } contentWidth={ width } source={{ html: option }} />
          <Button key={id} style={styles.options} title={option}
          onPress={(val) => {
            if (id == answer){
              setCurrentRound(currentRound+1)
            } else if (lives > 0){
              setLives(lives-1)
            } else {
              setCurrentRound(0)
              setLives(3)
            }
            console.log(lives,currentRound,id,answer)
          }}></Button>
        ))
      }</View>

    </View>
  );
}
