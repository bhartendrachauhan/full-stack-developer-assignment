import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import { dateNumberFormat } from '../utils/DateFormat'

const EachOption = ({data}) => {
    const context = useContext(Context)
    const date = dateNumberFormat(data.date)
    const [style,setStyle] = useState({
        backgroundColor: '#d9d9d9',
        color: 'black'
    })
    useEffect(()=>{
        if(context.state.selectedItem === data){
            setStyle({
                backgroundColor: '#7f7f7f',
                color: 'white'
            })
        }
        else{
            setStyle({
                backgroundColor: '#d9d9d9',
                color: 'black'
            })
        }
    },[context.state.selectedItem])
  return (
    <div className={`w-full h-10v mb-2 cursor-pointer p-2 flex flex-col justify-between`} style={style} onClick={()=>{context.changeSelectedItem(data)}}>
      <div className='w-full flex justify-between'>
        <span>{data.id}: {data.location}</span>
        <span>{date} {data.time}</span>
      </div>
      <div className="">Person detected.</div>
    </div>
  )
}

export default EachOption