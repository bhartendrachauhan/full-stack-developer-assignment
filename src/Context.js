import { db, storage } from "./config/firebase"
import { collection, getDocs } from "firebase/firestore"
import { listAll, ref, getDownloadURL } from 'firebase/storage'
import React, { createContext, useEffect, useState } from "react"

const Context = createContext()
let initialData = []
let initialState = {
    data: [],
    selectedItem: {
        name:'',
        id:'',
        date:'',
        location:'',
        time:'',
        imageUrl:'',
        gender:''
    }
}
const ContextProvider = (props)=>{

    const [state,setState] = useState(initialState)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=>{
        const dataRef = collection(db,'data')
        const imageRef = ref(storage,'images/')
        let data = []
        try {
            const response = await getDocs(dataRef)
            const images = await listAll(imageRef)
            data = response.docs.map(doc=>{
                return {...doc.data()}
            })
            images.items.forEach((item)=>{
                let itemName = item.name.slice(0,item.name.length-4)
                getDownloadURL(item).then(url=>{
                    for( let i=0;i<data.length;i++){
                        if(data[i].name === itemName){
                            data[i].imageUrl = url
                        }
                    }
                })
            })
            setState({...state,selectedItem:data[0],data:data})
            initialData = data
        }
        catch(e){
            console.error(e)
        }
    }
    const changeSelectedItem = (data)=>{
        setState({...state,selectedItem:data})
    }
    const applyFilter = (location,gender,date)=>{
        const data = initialData
        let newData = []
        if(location['Chennai'] === true){
            const temp = data.filter(eachData => eachData.location === 'Chennai')
            temp.forEach(x=>{
                newData.push(x)
            })
        }
        if(location['Bangalore'] === true){
            const temp = data.filter(eachData => eachData.location === 'Bangalore')
            temp.forEach(x=>{
                newData.push(x)
            })
        }
        if(location['Hyderabad'] === true){
            const temp = data.filter(eachData => eachData.location === 'Hyderabad')
            temp.forEach(x=>{
                newData.push(x)
            })
        }
        if(newData.length === 0){
            newData = data
        }
        switch(gender){
            case 'both': {
                newData = newData.filter(eachData => eachData.gender === 'Male' || eachData.gender === 'Female')
                break;
            }
            case 'male': {
                newData = newData.filter(eachData => eachData.gender === 'Male')
                break;
            }
            case 'female': {
                newData = newData.filter(eachData => eachData.gender === 'Female')
                break;
            }
            default: break
        }
        if(date){
            newData = newData.filter(eachData => eachData.date === date)
        }
        setState({...state,data:newData,selectedItem:newData[0]})
    }
    return(
        <Context.Provider value={{
            state: state,
            changeSelectedItem,
            applyFilter
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

