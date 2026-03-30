import React, { useContext,  useEffect,  useState } from 'react'
import './PlaceService.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const PlaceService = () => {
  const {getTotalCartAmount,token,appainces_list,cartItems,url} = useContext(StoreContext)




  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  


  //cod
 const placeService = async (event) => {
  event.preventDefault();

  let orderItems = [];

  appainces_list?.forEach((item) => {
    if (cartItems[item._id] > 0) {
      orderItems.push({
        ...item,
        quantity: cartItems[item._id]
      });
    }
  });

  if (orderItems.length === 0) {
    alert("Your cart is empty");
    return;
  }

  let orderData = {
    address: data,
    items: orderItems,
    amount: getTotalCartAmount() + 99,
    paymentMethod: "cod"   // ✅ Always COD
  };

  try {
    const response = await axios.post(
      url + "/api/order/place",
      orderData
    );

    if (response.data.success) {
      alert("Service Placed Successfully ");
       window.location.replace("/");
    } else {
      alert("Error placing order");
    }

  } catch (error) {
    console.log(error);
    alert("Server error");
  }
};

const navigate = useNavigate();
  
useEffect(()=>{

  if (getTotalCartAmount()===0) 
  {
    navigate('/cart')
  }
},[token])
  



  return (
    <form onSubmit={placeService} className='place-service'>
      <div className='place-order-right'>
             <p className="tittle">Service Information</p>
             <div className="multi-fields">
              <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text'  placeholder='first name'/>
              <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='last name'/>
             </div>
             <input required name='email' onChange={onChangeHandler} value={data.email} type='text' placeholder='Email address'/>
              <input required name='street' onChange={onChangeHandler} value={data.street} type='text' placeholder='Street'/>
              <div className="multi-fields">
                <input required name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='city'/>
                <input required name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='State'/>
              </div>
              <div className="multi-fields">
                <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type='text' placeholder='Zip code'/>
                <input required name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country'/>
              </div>
              <input name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='phone'/>
      </div>
      <div className="place-order-right">
        <div className='cart-total'>
        <h2>Cart Tatal</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>RS.{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Visiting charge</p>
            <p>{99}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <b>Total</b>
            <b>RS.{getTotalCartAmount()+99}</b>
          </div>

          {/* cod  */}
         
         

         
        </div>
         <button type='submit'>PROCCED TO SERVICE</button>
      </div>

      </div>
      

    </form>
  )
}

export default PlaceService