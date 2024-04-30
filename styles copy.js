import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    marginTop:50,
    height:850,
    //textAlign:"center",
    //alignItems: "center",
    backgroundColor: "#DFFDFF",
    fontFamily:"Arial",
  },

  tabs: {
    flexDirection:"row",
    backgroundColor:"white",
    height:70,
  },


  optionsContainer: {
    backgroundColor: "#68EDC6",
    margin:15,
    flexDirection:"column",
  },

  question: {
    textAlign:"center",
    margin:10,
    fontWeight: "bold",
    fontSize:25,
    padding:10,
    backgroundColor: "#90BEDE",
  },

  options: {
    margin:25,
    backgroundColor: "#E5E1EE",
    width:"auto",
    height:"auto",
    textAlign:"center",
    fontSize:35,
    padding:15,
  },

  levels: {
    backgroundColor: "#90F3FF",
    textAlign:"left",
    flex:1,
    padding:20,
    paddingLeft:40,
    fontSize:25,
  },

  lives: {
    backgroundColor: "#90F3FF",
    textAlign:"right",
    flex:1,
    padding:20,
    paddingRight:40,
    fontSize:25,
  },

});
