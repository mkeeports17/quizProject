import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button} from "react-native";
import Swipeable from "./Swipeable";  
import RenderHtml from "react-native-render-html";
import { useWindowDimensions} from "react-native";
import styles from "./styles";

import quizData from "./quizData.json"

export default function App() {
  const [ question, setQuestion ] = useState("");
  const [ correctId, setCorrectId ] = useState("");
  const [ currentRound, setCurrentRound] = useState(2);
  const [ options, setOptions] = useState(quizData.questions[currentRound].options);
  const [ answer, setAnswer ] = useState(quizData.questions[currentRound].answer);
  const [ lives, setLives ] = useState(3);

  useEffect(() => {
    setQuestion(quizData.questions[currentRound].question);
    setOptions(quizData.questions[currentRound].options);
  }, []);

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text contentWidth={width} style={styles.question}>{currentRound + ". " + question}</Text>
      <View style={styles.optionsContainer}>
      {options.map(( option, id)=>(
          // <RenderHtml baseStyle={ baseStyle.question } contentWidth={ width } source={{ html: option }} />
          <Button key={id} style={styles.options} title={option}
          onPress={(val) => {
            //if id matches the current answer, then print correct, else print false
            if (id == answer){
              console.log("correct")
            } else{
              console.log("false")
            }
          }}></Button>
        ))
      }</View>

    </View>
  );
}




// for RenderHtml components
const baseStyle = {
  question: {
    fontWeight: "bold"
  },
  answer: {
    textAlign: "center" 
  }
};