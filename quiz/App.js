import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button} from "react-native";
import Swipeable from "./Swipeable";  
import RenderHtml from "react-native-render-html";
import { useWindowDimensions} from "react-native";
import styles from "./styles";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home";
import Dead from "./screens/Dead";
import TriviaGame from "./screens/triviaGame";
import PigGame from "./screens/PigGame";
import Close from "./screens/Close"

import quizData from "./quizData.json"

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component ={HomeScreen} />
        <Stack.Screen name = "Trivia" component ={TriviaGame} />
        <Stack.Screen name = "PigGame" component ={PigGame}/>
        <Stack.Screen name = "Close" component ={Close}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
