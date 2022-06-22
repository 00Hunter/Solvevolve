import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 


export default function AddButton({onpress}) {
  return (
    <TouchableOpacity onPress={onpress}>
        <View style={styles.container}>
                <AntDesign name="plus" size={24} color="black" style={{alignSelf:"center",margin:10}}/>
                <Text style={styles.text}>Add Food Item</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ccf0e1",
        height:70,
        width:"95%",
        borderRadius:10,
        flexDirection:"row",
        borderColor:"#61d1a2",
        borderWidth:1,
        margin:10

    },
    text:{
        margin:20,
        alignSelf:"center",
        fontSize:20,
        fontWeight:"700"
    }
})