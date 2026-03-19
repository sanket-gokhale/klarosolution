import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems, appainces_list, removeFromCart ,getTotalCartAmount,url } = useContext(StoreContext);


  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-item'>
      <div className="cart-items-tittle">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {appainces_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div>
              <div className='cart-items-tittle cart-items-item'>
                <img src={url+"/images/"+item.image} alt='' />
                <p>{item.name}</p>
                <p>RS.{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)}>x</p>
              </div>
              <hr />
            </div>
          )
        }
      })}
    </div>
    <div className='cart-bottom'>
      <div className='cart-total'>
        <h2>Cart Total</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>RS.{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Visiting Fee</p>
            <p>{0}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <b>Total</b>
            <b>RS.{getTotalCartAmount()}</b>
          </div>
         
        </div>
         <button onClick={()=>navigate('/order')}>PROCCED TO CHECKOUT</button>
      </div>
      <div className='cart-promocode'>
        <div>
          
          
        </div>

      </div>

    </div>
    </div>
    
  )
}

export default Cart