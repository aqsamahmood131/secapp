import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function MyApi() {
    const [list,setList]=useState()
    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then((res)=>{
            setList(res.data)
        })
    },[])
    function renderItem({item}){
        return(
            <View>
            <Text style={{backgroundColor:'grey'}}>{item.name}</Text>
            <Text>{item.body}</Text>
        </View>
        )
      
    }
    return (
        <View>
            <FlatList
            data={list}
            renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
