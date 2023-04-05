import React, { useContext, useEffect, useState } from 'react'
import comanyLogo from '../images/company_logo.png'
import { Context } from '../Context'

const Header = () => {
    const [count,setCount] = useState({
        male:'',
        female:''
    })
    const context = useContext(Context)
    useEffect(()=>{
        const data = context.state.data
        let femaleCount = data.reduce((acc,curr)=>{
            if(curr.gender === 'Female'){
                acc += 1
            }
            return acc
        },0)
        setCount({male:data.length-femaleCount,female:femaleCount})
    },[context.state])
  return (
    <div className="bg-[#001c7b] w-screen h-10v flex justify-between items-center p-2">
      <div className="w-40 ml-3"><img src={comanyLogo} alt='company-logo'/></div>
      <div className='flex mr-5'>
        <div className="bg-[#92d050] h-12 w-14 flex justify-center items-center"><span className="font-bold text-2xl">{count.male}</span></div>
        <div className="bg-[#ff0000] h-12 w-14 ml-3 flex justify-center items-center"><span className="font-bold text-2xl">{count.female}</span></div>
      </div>
    </div>
  )
}

export default Header
