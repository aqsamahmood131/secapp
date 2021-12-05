import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'

export default function List() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            const updatedData=res.data.map((item)=>{
                return {...item,seleted:false}
            })
            setData(updatedData)
        })
    },[])

    function onSelected(item,index){
        const updatedData=[...data]
        updatedData.splice(index,1,{...item,seleted:true})
        setData(updatedData)
    }
    function renderPost({item,index}){
        return(
            <TouchableOpacity 
            onPress={()=>onSelected(item,index)}
            style={{backgroundColor:item.seleted?"skyblue":'lightgrey',margin:5,padding:10,borderColor:7,width:'50%'}}>
                <Text>{item.title}</Text>
                <Text style={{color:'grey'}}>{item.body}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
            data={data}
            numColumns={2}
            renderItem={renderPost}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
