import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function NewApi() {
    const [value,setValue]=useState([])
    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((res)=> {setValue(res.data)}
        
        )
    },[])
    return (
        <View>
            <Text>
                profile
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})
