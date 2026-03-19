import React, { useContext } from 'react'
import './AppaincesDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import AppaincesItem from '../AppaincesItem/AppaincesItem'


const AppaincesDisplay = ({category}) => {

  const {appainces_list} = useContext(StoreContext)

  return (
    <div className='appainces-display' id='appainces-display'>
      <h2>Professional Repair Services</h2>
      <div className=' appainces-display-list'>
        {appainces_list.map((item,index)=>{
          {console.log(category,item.category);}
          if(category==="All"||category===item.category){
              
            return <AppaincesItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
          
        })}


      </div>

    </div>
  )
}

export default AppaincesDisplay