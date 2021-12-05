import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Fields({text,secure,error}) {
    return (
        <View style={{alignItems:"center"}}>
            <TextInput
            style={{...styles.field,borderWidth:1,borderColor:error?'red':'white'}}
            secureTextEntry={secure}
            placeholder={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    field:{
        backgroundColor:"white",
        height:55,
        width:"95%",
        borderRadius:9,
        marginVertical:10,
        
    }
})
