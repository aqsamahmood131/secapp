import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text,FlatList, Image, TextInput } from 'react-native'

export default function Filter() {
    const [albums,setAlbums]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((res)=>{
            setAlbums(res.data)
        })
    },[])
    function renderAlbums({item,index}){
        return (
            <View>
                <Text>{item.id+" ) "+ item.title}</Text>
            </View>
        )
    }
    function searchItem(sText){
            const updatedAlbums=[...albums].filter((item)=>{
                if(item.id==sText){
                    return true
                }
            })
            setAlbums(updatedAlbums)
    }
    return (
        <View>
            <TextInput
            placeholder="search"
            onChangeText={(v)=>searchItem(v)}
            />
            <FlatList
            data={albums}
            renderItem={renderAlbums}
            />
        </View>
    )
}
