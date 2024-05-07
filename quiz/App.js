import React, { useState, useEffect } from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home";
import TriviaGame from "./screens/triviaGame";
import PigGame from "./screens/PigGame";
import Cat from "./screens/Cat"
import JimmyMove from "./screens/JimmyMove";
import WinDead from "./screens/WinDead";

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component ={HomeScreen} />
        <Stack.Screen name = "Trivia" component ={TriviaGame} />
        <Stack.Screen name = "PigGame" component ={PigGame}/>
        <Stack.Screen name = "Cat" component ={Cat}/>
        <Stack.Screen name = "JimmyMove" component = {JimmyMove}/>
        <Stack.Screen name = "WinDead" component = {WinDead}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
