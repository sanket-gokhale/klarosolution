import React from 'react'
import './Orders.css'
import { useState } from 'react'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import axios from "axios"
const Orders = ({url}) => {

  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async () =>{
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    }
       else{
        toast.error("Error")
       }
  }

  const statusHandler = async (event,orderId)=>{
   const response = await axios.post(url+"/api/order/status",{
    orderId,
    status:event.target.value
   })
   if (response.data.success) {
    await fetchAllOrders();
   }
  }

  const paymentHandler = async (event,orderId) => {
  const response = await axios.post(url+"/api/order/update-payment",{
    orderId,
    payment:event.target.value
  })
  if (response.data.success) {
    await fetchAllOrders();
  }
}




  useEffect(()=>{
    fetchAllOrders();
  },[])
  return (
    <div className='order add'>
      <h3>Order Service Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className='order-item'>
            <div>
             <p className='order-item-serviec'>
           {order.items.map((item,index)=>{
            if (index===order.items.length-1) {
              return item.name + "x" +item.quantity
            }
            else{
              return item.name + "x" + item.quantity + ", "
            }
           })}
           </p>
           <p className='order-item-name'>
               {order.address.firstName+" "+order.address.lastName}</p>
               <div className='order-item-address'>
           <p>{order.address.street+","}</p>
           <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.zipcode}</p>  
           </div> 
           <p className='order-item-phone'>{order.address.phone}</p> 
            </div>
           <p>Total Items :{order.items.length}</p>
           <p>RS.{order.amount}</p>
          
           <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
            <option value="WAITING">Wait For Service, on the way</option>
            <option value="PROCESSING">Service Proccesing/Start</option>
            <option value="COMPLETED">Complete</option>
           </select>
           <p>
            <select 
  onChange={(event)=> paymentHandler(event, order._id)} 
  value={order.payment}
>
  <option value="PENDING">Payment Pending</option>
  <option value="COMPLETED">Payment Completed</option>
</select>
           </p>
          </div>
          
          ))}
      </div>

    </div>
  )
}

export default Orders