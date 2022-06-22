import { StyleSheet, Text, View } from 'react-native'
import {React,useContext} from 'react'
import foodContext from '../Context/foodContext';

export default function FinalScreen({navigation}) {
  const foodcontext=useContext(foodContext);
  const temp=foodcontext.food
  
  return (
    <View style={{marginTop:50}}>
      <Text style={{fontSize:30,margin:10,alignSelf:"center"}}>Final Food List </Text>
      <View style={{backgroundColor:"grey",height:650,borderRadius:20,width:"90%",alignSelf:"center"}}>
      <Text style={styles.text}>  {"[{"}</Text>
       {temp.map((loc)=>{
       return(
        <>
        <Text style={styles.text}>  {"{"}</Text>
       <Text style={styles.text}>     name :  "{loc.title}",</Text>
       <Text style={styles.text}>     price :  "{loc.price}"</Text>
       <Text style={styles.text}> {"}"}</Text>
       </>
       )  })}
       <Text style={styles.text}>  {"]}"}</Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    padding:3,
    fontSize:20,
    fontWeight:"bold"
  }
})