import { StyleSheet, Text, View ,FlatList, Button,Modal,TextInput} from 'react-native'
import React, { useContext, useState } from 'react'

import Card from '../Components/Card'
import AddButton from '../Components/AddButton'
import FinalButton from '../Components/FinalButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'; 
import { Formik } from 'formik'
import foodContext from '../Context/foodContext'

export default function MainScreen({navigation}) {
    const foodcontext=useContext(foodContext);
    const [Visible,setVisible]=useState(false);
    const [name,setName]=useState();
    const [price,setPrice]=useState();


    const foods=foodcontext.food || [];
   

    const handleSubmit=()=>{
        console.log(name,price)
        const newFood={
            id:Math.random(), 
            title:name,
            price:price
        };
       foodcontext.setFood([...foodcontext.food,newFood])
    }
    
  return (

    <SafeAreaView>
                <View style={styles.Text}>
                    <Text style={styles.foodlist}>Food List </Text>  
                </View>

                 <View style={{backgroundColor:"#fbfbfb",marginBottom:50}}>
                        
                    {foods.map((infor,index)=>{
               
               return( 
                     
                      <Card info={infor} index={index} />
               ) 
              
             })
             
            }
                </View>
                
                <View style={{marginBottom:20}}>
                    <AddButton onpress={()=>setVisible(true)}/>
                </View>
                
                <View style={{
                 position:"absolute",
                 marginVertical:650,
                 width:"95%",
                 alignSelf:"center"
                }}>
                        <FinalButton title={"Final Food list"} onPress={()=>navigation.navigate("FinalScreen")}/>
                </View>

                <Modal 
                    visible={Visible}
                    animationType={"slide"}
                    transparent={true}
                    >
                         <View style={styles.ModalContainerParent}>
                                <View style={styles.ModalContainerChild}>
                                    <View style={{flexDirection:"row"}}>
                                        <Text style={{fontSize:20,flex:1,padding:20,fontWeight:"bold"}}>Add Food</Text>
                                        <Entypo name="cross" size={24} color="black" onPress={()=>setVisible(false)} style={{padding:20}}/>
                                    </View>

                                  
                                                 <View style={styles.back}> 
                                        
                                                    <Text style={styles.text}>Food Name</Text>

                                                    <TextInput 
                                                    style={styles.name}
                                                    onChangeText={(val)=>setName(val)}
                                                    selectionColor={'black'}
                                                    placeholder={"Name"}
                                                    />
                                
                                                    <Text style={styles.text}>Food Price</Text>

                                                    <TextInput
                                                    style={styles.price}
                                                    onChangeText={(val)=>setPrice(val)}
                                                    selectionColor={'black'}
                                                    placeholder={"price"}
                                                    />
                                                    <FinalButton title={"Add Food Item"} onPress={handleSubmit}/>

                                                </View>        
                                         
                          </View>                                     
                     </View>                                     
              </Modal>
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    back:{
        flexDirection:"column"
    },
    container:{
            // flexDirection:"row",
            // flex:1
    },
    foodlist:{
        fontSize:30,
        alignSelf:"center",
        fontWeight:"700",
        
    },
    name:{
        height:50,
        width:"95%",
        padding: 10,
        alignSelf:"center",
        borderColor:"#000000",
        borderWidth:1,
        borderRadius:20  ,
        fontSize:17
    },
    price:{
        height:50,
        width:"95%",
        padding: 10,
        alignSelf:"center",
        borderColor:"#000000",
        borderWidth:1,
        borderRadius:20  ,
        fontSize:17,
        marginBottom:25
    },
    safeView:{
        // marginVertical:80,
        
    },
    text:{
        fontSize:17,
        padding:10,
        marginLeft:10
    },
    ModalContainerParent:{
        backgroundColor:"#353535",
        flex:1,
        opacity:0.9,
        justifyContent:"center",
        alignItems:"center",
        justifyContent:"flex-end"
    },
    ModalContainerChild:{
        backgroundColor:"white",
        height:400,
        width:"100%",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
})