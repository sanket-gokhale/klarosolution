
import './AppaincesItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import React,  { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const AppaincesItem = ({id,name,price,description,image}) => {
   
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
    const [loaded, setLoaded] = React.useState(false);

  return (
    <div className='appainces-item'>
        <div className='appainces-item-img-container'>
            <img 
                className={`appainces-item-image ${loaded ? 'loaded' : ''}`}
                src={url+"/images/"+image} 
                alt={name} 
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={(e) => {
                    e.target.src = assets.header_img; 
                    e.target.style.opacity = '0.5';
                    setLoaded(true);
                }}
            />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='' />
                :<div className='appainces-iteam-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
                </div>
                
            }

        </div>
        <div className='appainces-item-info'>
            <div className='appainces-item-rating'>
                <p>
                    {name}
                </p>
                <img src={assets.rating_starts} alt='' />

            </div>
            <p className='appainces-item-desc'>
                {description}
            </p>
            <p className="appainces-item-price">
             RS.{price}
            </p>

        </div>

    </div>
  )
}

export default AppaincesItem