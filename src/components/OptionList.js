import React, { useContext, useState } from 'react'
import filterLogo from '../images/filter-logo.jpg'
import { Context } from '../Context'
import EachOption from './EachOption'
import cancelIcon from '../images/cancel-icon.png'


const OptionList = () => {
    const context = useContext(Context)
    const [location,setLocation] = useState({
        'Chennai':false,
        "Hyderabad":false,
        "Bangalore":false
    })
    const [gender,setGender] = useState('')
    const [date,setDate] = useState('')
    const [modalDisplay,setModalDisplay] = useState({
        display: 'none'
    })
    const checkboxChangeHandler = (e)=>{
        setLocation({...location,[e.target.name]:e.target.checked})
    }
    const radioChangeHandler = (e)=>{
        setGender(e.target.value)
    }
    const dateChangeHandler = (e)=>{
        setDate(e.target.value)
    }
    const formatedDate = ()=>{
        if(date){
            let dateArray = date.split('-')
            let year = dateArray[0].slice(2,4)
            let month = ''
            switch(dateArray[1]){
                case '01': {
                    month = 'Jan'
                    break
                } 
                case '02': {
                    month = 'Feb'
                    break
                } 
                case '03': {
                    month = 'Mar'
                    break
                } 
                case '04': {
                    month = 'Apr'
                    break
                } 
                case '05': {
                    month = 'May'
                    break
                } 
                case '06': {
                    month = 'Jun'
                    break
                } 
                case '07': {
                    month = 'Jul'
                    break
                } 
                case '08': {
                    month = 'Aug'
                    break
                } 
                case '09': {
                    month = 'Sept'
                    break
                } 
                case '10': {
                    month = 'Oct'
                    break
                } 
                case '11': {
                    month = 'Nov'
                    break
                } 
                case '12': {
                    month = 'Dec'
                    break
                }
                default: return
            }
            let day = Number(dateArray[2])<10?dateArray[2].slice(1):dateArray[2]
            return `${day}-${month}-${year}`
        }
        else{
            return ''
        }
    }
    const SubmitHandler = ()=>{
        let fDate = formatedDate(date)
        context.applyFilter(location,gender,fDate)
        setModalDisplay({
            display:'none'
        })
    }
  return (
    <div>
      <div className='flex justify-between w-full h-10v'>
        <span className='font-bold text-xl'>Events</span>
        <div className="relative">
        <div className="w-12 cursor-pointer" onClick={()=>{setModalDisplay({display:'flex'})}}><img src={filterLogo} alt='filter-logo'/></div>
        <div style={modalDisplay} className='bg-[#7f7f7f] w-30v h-50v absolute right-0 text-white p-4 flex flex-col rounded-lg'>
            <div className='w-full flex justify-end'>
                <img className='w-4 cursor-pointer' src={cancelIcon} alt='cancel-icon' onClick={()=>{setModalDisplay({display:'none'})}}/>
            </div>
            <span className='font-bold text-xl'>Location</span>
            <div className='text-lg'>
                <input type='checkbox' id='chennai' checked={location.Chennai} name='Chennai' onChange={checkboxChangeHandler}/>&nbsp;
                <label htmlFor='chennai'>Chennai</label>&nbsp;&nbsp;&nbsp;
                <input type='checkbox' id='hyderabad' checked={location.Hyderabad}  name='Hyderabad' onChange={checkboxChangeHandler}/>&nbsp;
                <label htmlFor='hyderabad'>Hyderabad</label>&nbsp;&nbsp;&nbsp;
                <input type='checkbox' id='bangalore' checked={location.Bangalore}  name='Bangalore' onChange={checkboxChangeHandler}/>&nbsp;
                <label htmlFor='bangalore'>Bangalore</label>&nbsp;&nbsp;&nbsp;
            </div>
            <br/>
            <span className='font-bold text-xl'>Gender</span>
            <div className='text-lg'>
                <input type='radio' id='male' name='gender' value={'male'} onChange={radioChangeHandler}/>&nbsp;
                <label htmlFor='male'>Male</label>&nbsp;&nbsp;&nbsp;
                <input type='radio' id='female' name='gender' value={'female'} onChange={radioChangeHandler}/>&nbsp;
                <label htmlFor='female'>Female</label>&nbsp;&nbsp;&nbsp;
                <input type='radio' id='both' name='gender' value={'both'} onChange={radioChangeHandler}/>&nbsp;
                <label htmlFor='both'>Both</label>&nbsp;&nbsp;&nbsp;
            </div>
            <br/>
            <span className='font-bold text-xl'>Date</span>
            <div className='text-lg'>
                <input className=' bg-[#7f7f7f] text-white' type='date' value={date} onChange={dateChangeHandler}/>&nbsp;
            </div>
            <br/>
            <button className='bg-black text-white h-10v rounded-lg text-xl' onClick={SubmitHandler}>Apply</button>
        </div>
        </div>
      </div>
      <div className="w-full h-70v overflow-y-scroll scrollbar-hide">
        {context.state.data.map(eachData => {
            return (
                <EachOption key={eachData.id} data={eachData}/>
            )
        })}
      </div>
    </div>
  )
}

export default OptionList
