import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import Fields from '../components/fields'
import Btn from '../components/btn'

export default function SignUp() {
    return (
        <View style={{flex:1,backgroundColor:"lightgrey"}}>
            <View style={styles.img}>
            <Image style={{borderRadius:100,width:"30%",height:"60%"}}
                source={require('../../assets/1.jpg')}
                />
            </View>
            <View style={{flex:0.6,backgroundColor:"blue"}}>
                 <Fields
                    text="Full Name"
                />
                <Fields
                    text="Email Address"
                />
                 <Fields
                    text="Password"
                />
                 <Fields
                    text="Confirm Password"
                />
            </View>
            <View style={styles.btn}>
                 <Btn
                    name="Sign Up"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
        img:{
            backgroundColor:"pink",
            flex:0.2,
            alignItems:"center",
            justifyContent:"center",
            },
        btn:{
            flex:0.2,
            justifyContent:"center",
            backgroundColor:"yellow"            

        }

})
