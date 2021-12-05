import React,{useEffect,useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

export default function Api() {
    const [list,setList]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setList(res.data)
        })
    },[])

    function renderList({item}){
        return(
            <>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
            </>
        )
    }
    return (
        <View>
            <FlatList
            data={list}
            renderItem={renderList}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
