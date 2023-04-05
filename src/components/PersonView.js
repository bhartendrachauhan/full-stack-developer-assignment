import React, { useContext } from 'react'
import { Context } from '../Context'
import { monthFullName } from '../utils/DateFormat'

const PersonView = () => {
    const context = useContext(Context)
    const selectedItem = context.state.selectedItem
    const month = monthFullName(selectedItem.date)
  return (
    <div>
      <div className="flex justify-center w-full mt-2"><span className='font-bold text-xl'>{selectedItem.gender}</span></div>
      <div className='flex p-8'>
        <div className="ml-12 flex flex-col text-2xl w-72">
            <span className='font-bold'>{selectedItem.id}</span>
            <span className='font-bold'>Person Detected</span>
            <br/>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>:{selectedItem.name}</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>:{selectedItem.location}</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>:{selectedItem.date}</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>:{selectedItem.time}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <span>Description:</span>
            <span>{selectedItem.name} detected at {selectedItem.location} on {selectedItem.date.split('-')[0]}<sup>{selectedItem.date.split('-')[0]==='1'?'st':selectedItem.date.split('-')[0]==='2'?'nd':selectedItem.date.split('-')[0]==='3'?'rd':'th'}</sup> {month}, 20{selectedItem.date.split('-')[2]}.</span>
        </div>
        <div className="w-40v flex justify-center">
            <div className="w-80">
                <img className='w-full' src={`${selectedItem.imageUrl}`} alt='person-display-image'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PersonView
