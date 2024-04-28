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
  const [ currentRound, setCurrentRound] = useState(1);
  const [ options, setOptions] = useState(quizData.questions[currentRound].options);
  const [ answer, setAnswer ] = useState(quizData.questions[currentRound].answer);
  const [ lives, setLives ] = useState(3);



  // useEffect(() => {
  //   fetchQuestion().then(q => {
  //     setQuestion(q.question);
  //     const c = Math.floor(Math.random() * q.incorrect_answers.length + 1);
  //     setCorrectId(c.toString());
  //     q.incorrect_answers.splice(c, 0, q.correct_answer);
  //     setAnswers(q.incorrect_answers.map(
  //       (v, i) => ({ id: i.toString(), text: v })));
  //   });
  //   setOptions(quizData.questions[currentRound].options)
  // }, []);

  useEffect(() => {
    setQuestion(quizData.questions[currentRound].question);
    setOptions(quizData.questions[currentRound].options);
  }, []);

  // function onSwipe(id) {
  //   return () => {
  //     setItems(items.filter((item) => item.id !== id));
  //   };
  // }
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <RenderHtml contentWidth={ width } source={{ html: question }} />
      {
        options.map(( option, id)=>(
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
      }

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