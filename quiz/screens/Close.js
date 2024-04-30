import React, { useState, useEffect } from "react";
import { View, Text, Pressable} from "react-native";

import { useWindowDimensions} from "react-native";
import styles from "../styles";

function onPressFunction(){

}

export default function Close({navigation}){
    return(

        <View style={styles.container}>
            <Text style={styles.close} >Me.Close()</Text>
        </View>
    )

}



