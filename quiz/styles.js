import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    marginTop:0,
    height:850,
    //textAlign:"center",
    //alignItems: "center",
    backgroundColor: "#DFFDFF",
    fontFamily:"Arial",
  },
  tabs: {
    flexDirection:"row",
    //backgroundColor:"white",
    height:70,
  },
  heading: {
    marginTop:90,
    marginBottom:30,
    textAlign:"center",
    backgroundColor:"#90F3FF",
    fontSize:45,
    margin:20,
    padding:15,
  },
  credits:{
    textAlign:"center",
    fontSize:20,
    marginBottom:15,
  },
  begin: {
    margin:20,
    marginTop:50,
    backgroundColor: "#68EDC6",
    width:"auto",
    height:"auto",
    textAlign:"center",
    fontSize:35,
    padding:15,
  },
  desc: {
    textAlign:"center",
    margin:25,
    fontSize:18,

  },
  scroll:{
    width:"100%",
    height:500,
  },
  noscroll:{},
  optionsContainer: {
    backgroundColor: "#68EDC6",
    margin:15,
    flexDirection:"column",
  },
  optionsContainerAlt: {
    backgroundColor: "#68EDC6",
    margin:15,
    height:500,
    //flexDirection:"column",
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
  close: {
    textAlign:"center",
    fontSize:50,
    margin:50,
    
  }

});
