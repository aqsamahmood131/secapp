import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Btn from '../components/btn'
import Fields from '../components/fields'

export default function SignIn(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    function error(){
        if (email&&password){
            setEmail (email)
            setPassword (password)
        }
        else alert ("fill the fields")
    }
    console.log(email)
    return (
        <View style={{flex:1,backgroundColor:"lightgrey"}}>
            <View style={{flex:0.2}}>
                 <Fields 
                    error={email?false:true}
                    value={email}
                    onChangeText={(v)=>setEmail(v)}
                    text="Email Address"
                    />
                    <Fields
                    secure={true}
                    value={password}
                    onChangeText={(v)=>setPassword(v)}
                    text="Password"
                    />
            </View>
            <View style={{flex:0.2,justifyContent:"center"}}>
                <TouchableOpacity>
                    <Text style={{textAlign:"right",paddingRight:13,paddingBottom:14}}>
                        Forget Password
                    </Text>
                </TouchableOpacity>
                <Btn 
                    call={error}
                    name="Sign In"
                />
                <Text style={styles.txt}>Or SignIn with</Text>
            </View>
            <View style={{flex:0.2,backgroundColor:"yellow"}}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        flex:0.3,
        alignItems:"center",
        justifyContent:"center",
        },
    txt:{
        textAlign:"center",
        marginTop:10
    }
})
