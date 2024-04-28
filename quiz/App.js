import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Swipeable from "./Swipeable";  
import RenderHtml from "react-native-render-html";
import { useWindowDimensions} from "react-native";
import styles from "./styles";

// https://opentdb.com/api_config.php
async function fetchQuestion() {
  const response = await(fetch(
    "https://opentdb.com/api.php?amount=1&category=18&type=multiple"));
  const json = await response.json();
  return json.results[0];
}

export default function App() {
  const [ question, setQuestion ] = useState("");
  const [ answers, setAnswers ] = useState([]);
  const [ correctId, setCorrectId ] = useState("");
  const [items, setItems] = useState(
    new Array(10).fill(null).map((v, id) => ({ id, name: "Swipe Me" }))
  );

  useEffect(() => {
    fetchQuestion().then(q => {
      setQuestion(q.question);
      const c = Math.floor(Math.random() * q.incorrect_answers.length + 1);
      setCorrectId(c.toString());
      q.incorrect_answers.splice(c, 0, q.correct_answer);
      setAnswers(q.incorrect_answers.map(
        (v, i) => ({ id: i.toString(), text: v })));
    });
  }, []);

  function onSwipe(id) {
    return () => {
      setItems(items.filter((item) => item.id !== id));
    };
  }

  const { width } = useWindowDimensions();

  return (
    <View style={ styles.container }>
      <RenderHtml baseStyle={ baseStyle.question } contentWidth={ width }
        source={{ html: question }} />
      
        
        <View style={styles.container}>
            {answers.map((v) => (
              <Swipeable key={v.id} onSwipe={onSwipe(v.id)} name={v.text}>
                <RenderHtml baseStyle={ baseStyle.answer } key={ v.id }
                contentWidth={ width } source={{ html:
                v.id === correctId ? `<strong>${ v.text }</strong>` : v.text }} />
              </Swipeable>
            ))}
        </View>
      
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