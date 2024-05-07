import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet} from "react-native";

import { useRoute } from '@react-navigation/native'; 

import { useWindowDimensions} from "react-native";
//import styles from "../styles";

function onPressFunction(){

}

export default function WinDead({navigation}){
    const route = useRoute(); 
    const gameWon = route.params.gameWon

    const lostString = "You lost the game, better luck next time";
    const winString = "You won, congrats!!!!";
    const [complementString, setComplementString] = useState("No complement for you loser!");
    const [displayString, setDisplayString ]= useState();



    useEffect(() =>{
        // START
        var apiUrl = 'https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments';

        if(gameWon == true){
            fetch(apiUrl)
            .then((resp) => resp.json())
            .then(function(data) {setComplementString(data)})
            setDisplayString(winString);

        }else{
            setDisplayString(lostString);
        }
        },[])


    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Impossible Quiz</Text>
            <View style={styles.smcontainer}>
                <View style={styles.innerstyles}>
                    <Text style={(gameWon)?styles.wintext:styles.losetext}>{ displayString }</Text>
                    <Text style={styles.complementTxt}>Complement:</Text>
                    <Text> {complementString}</Text>
                </View>
            </View>
            <View style={styles.smcontainer}>
                <Pressable style={styles.buttonStyle} onPress={() => {
                    navigation.navigate('Home');
                    }}>
                    <Text style={styles.btnText}>Return Home</Text>
                </Pressable>
            </View>
            <View style={[styles.smcontainer,{marginTop:20}]}>
                <Text>by: Ezra Miller and Michael Keeports</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#DFFDFF",
        flex:1,

    },
    smcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20,
    },
    wintext:{
        backgroundColor:"#90F3FF",
        padding:20,
        fontSize:30,
        fontWeight:"bold",
        borderRadius:5,
    },
    losetext:{
        backgroundColor:"red",
        padding:20,
        fontSize:30,
        fontWeight:"bold",
        borderRadius:5
    },
    innerstyles:{
        width:"90%",
        backgroundColor:"#FAF8E6",
        alignItems: 'center'
    },
    complementTxt:{
        fontSize:20,
        fontWeight:"bold",
    },

    buttonStyle:{
        backgroundColor: "#69EEC7",
        alignItems: 'center',
        width:"50%",
    },
    btnText:{
        fontSize:25,
    },
    heading:{
        marginTop:90,
        marginBottom:30,
        textAlign:"center",
        backgroundColor:"#90F3FF",
        fontSize:45,
        margin:20,
        padding:15,
    },
})