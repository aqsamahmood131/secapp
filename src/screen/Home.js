import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,FlatList,ActivityIndicator} from 'react-native'
import axios from "axios"

export default function Home() {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            setUser(res.data)
            setLoading(false)
        })
    },[])
    
    function renderUser({item}){
        return(
            <View style={{marginVertical:10,backgroundColor:'lightgrey',width:'90%',alignSelf:'center',padding:10,borderRadius:7}}>
                <Text style={{fontWeight:'700'}}>{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
        )
    }
    if(loading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator
                size={30}
                color="blue"
                />
            </View>
        )
    }else{
        return (
            <View>
                <FlatList
                data={user}
                renderItem={renderUser}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
