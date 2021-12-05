import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Btn({name,call}) {
    return (
        <View style={{alignItems:"center"}}>
            <TouchableOpacity 
            onPress={call?call:null}
            style={styles.btn}>
                <Text style={{textAlign:"center",color:"white",fontSize:17}}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{ 
        backgroundColor:"purple",
        height:55,
        width:"95%",
        borderRadius:9,
        justifyContent:"center"

    }
})
