import React, { useContext } from 'react'
import './AppaincesDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import AppaincesItem from '../AppaincesItem/AppaincesItem'


const AppaincesDisplay = ({category}) => {

  const {appainces_list, loading} = useContext(StoreContext)

  return (
    <div className='appainces-display' id='appainces-display'>
      <h2>Professional Repair Services</h2>
      <div className=' appainces-display-list'>
        {loading 
          ? [...Array(8)].map((_, index) => (
              <div key={index} className='appainces-item skeleton'>
                <div className='appainces-item-img-container skeleton-img'></div>
                <div className='appainces-item-info'>
                  <div className='skeleton-line'></div>
                  <div className='skeleton-line short'></div>
                </div>
              </div>
            ))
          : appainces_list.map((item)=>{
              if(category==="All"||category===item.category){
                return <AppaincesItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
              return null;
            })
        }
      </div>
    </div>
  )
}

export default AppaincesDisplay