import { Image,StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import foodContext from '../Context/foodContext';



export default function Card({info,index}) {

    // console.log(index)
    const foodcontext=useContext(foodContext);

    const handleDelete=()=>{
        // console.log(index)
        const temp=foodcontext.food
        // console.log(temp)
        // const newList=temp.splice(index,1)
        const filteredItems = temp.slice(0, index).concat(temp.slice(index + 1, temp.length))

          console.log(filteredItems);
        foodcontext.setFood(filteredItems)

    }

  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Image source={require("../assets/dots.png")} style={{marginVertical:3}}/>
            <Text style={styles.text}>{info.title}</Text>
        </View>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>Price : </Text>
            <FontAwesome name="rupee" size={18} color="black" style={{padding:4}} />
            <Text style={{fontSize:17,fontWeight:"700"}}>{info.price}</Text>     
        </View>

        <View style={styles.iconContainer}>
        <AntDesign name="edit" size={20} color="black" style={{marginRight:30,marginLeft:10}}/>
        <MaterialCommunityIcons name="delete-outline" size={24} color="black" onPress={handleDelete}/>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ecf0f1',
        height:63,
        width:"95%",
        borderRadius:10,
        borderColor:'#d9d9d9',
        borderWidth:1,
        flexDirection:"row",
        padding:10,
        margin:10
        
    },
    iconContainer:{
        flexDirection:"row",
        // padding:10
        alignItems:"center",
        borderLeftWidth:1,
        borderLeftColor:"#d9d9d9"
    },
    price:{
        color:"#d9d9d9",
        fontSize:17,
        fontWeight:"700"
    },
    priceContainer:{
        
        flexDirection:"row",
        marginRight:20,
        alignSelf:"center"
    },
    text:{
        color:"black",
        padding:5,
       
        fontSize:20,
        fontWeight:"700"

    },
    textContainer:{
        
        flex:1,
        flexDirection:"row",
    }
})