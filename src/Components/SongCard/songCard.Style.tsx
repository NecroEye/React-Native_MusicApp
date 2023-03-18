import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({

container: {margin:5, backgroundColor:'white', padding:15, borderRadius:6, width:350, alignSelf:'center', borderWidth:1},
  inner_container: {flexDirection:'row'},
  info_container: { marginLeft:50, flex:1},
  image: {height: 70, width:70, alignSelf:'flex-start', borderRadius:50, borderWidth:1, borderColor:'black'},
  titleText:{textAlign:'center', fontSize:23},
  year:{textAlign:'center', fontSize:17, fontStyle:'italic'},
  artistFont:{fontWeight:"bold", fontSize:14,width:70 },
  soldOut_container:{borderWidth:1, borderColor:'red', padding:4, borderRadius:5,width:60, fontWeight:'bold', alignSelf:'flex-start'},
  soldOut_title:{color:'red'},


});
