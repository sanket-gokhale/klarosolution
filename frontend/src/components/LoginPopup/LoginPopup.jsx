import React, {  useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'


const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)

    const [currState,setCurrState] = useState("Login")
   
    const[data,setData] = useState({
        name:"",
        email:"",
        password:"",
        otp:"",
        newPassword:""
    })
        
    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async () =>{
        let newUrl=url;
        if (currState==="Login") {
            newUrl += "/api/user/login"
        }
        else{
            newUrl +="/api/user/register"
        }
        const response = await axios.post(newUrl,data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }

    const onSendOtp = async () => {
        const response = await axios.post(url + "/api/user/send-otp", {email: data.email});
        if (response.data.success) {
            alert(response.data.message);
            setCurrState("Verify OTP");
        } else {
            alert(response.data.message);
        }
    }

    const onVerifyOtp = async () => {
        const response = await axios.post(url + "/api/user/verify-otp", {email: data.email, otp: data.otp});
        if (response.data.success) {
            alert(response.data.message);
            setCurrState("Change Password");
        } else {
            alert(response.data.message);
        }
    }

    const onChangePassword = async () => {
        const response = await axios.post(url + "/api/user/change-password", {email: data.email, otp: data.otp, newPassword: data.newPassword});
        if (response.data.success) {
            alert(response.data.message);
            setCurrState("Login");
        } else {
            alert(response.data.message);
        }
    }

    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            if (currState === "Login" || currState === "Sign Up") {
                await onLogin();
            } else if (currState === "Forgot Password") {
                await onSendOtp();
            } else if (currState === "Verify OTP") {
                await onVerifyOtp();
            } else if (currState === "Change Password") {
                await onChangePassword();
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    


  return (
    <div className='login-popup'>
        <form onSubmit={onSubmitHandler}  className="login-popup-container">
            <div className="login-popup-tittle">
                <h2>
                   {currState}
                </h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='' />
            </div>
            <div className='login-popup-inputs'>
                {currState==="Sign Up" && <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='your name' required />}
                
                {(currState==="Login" || currState==="Sign Up" || currState==="Forgot Password") && <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='your email' required />}
                
                {(currState==="Login" || currState==="Sign Up") && <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='password' required />}

                {currState==="Verify OTP" && <input name='otp' onChange={onChangeHandler} value={data.otp} type='text' placeholder='Enter OTP' required />}
                
                {currState==="Change Password" && <input name='newPassword' onChange={onChangeHandler} value={data.newPassword} type='password' placeholder='Enter new password' required />}
            </div>
            <button type='submit' disabled={loading}>
                {loading ? "Processing..." :
                 currState==="Sign Up" ? "Create account" :
                 currState==="Login" ? "Login" :
                 currState==="Forgot Password" ? "Send OTP" :
                 currState==="Verify OTP" ? "Verify OTP" : "Change Password"}
            </button>
            { (currState==="Login" || currState==="Sign Up") && 
                <div className="login-popup-condition">
                    <input type='checkbox' required/>
                    <p>By continuing, i agree to the terms and condition</p>
                </div>
            }
            {
                currState==="Login"
                ?<>
                    <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                    <p>Forgot Password? <span onClick={()=>setCurrState("Forgot Password")}>Reset here</span></p>
                 </>
                : currState==="Sign Up"
                ? <p>Already have account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                : <p>Back to <span onClick={()=>setCurrState("Login")}>Login</span></p>
            }
            
        </form>

    </div>
  )
}

export default LoginPopup