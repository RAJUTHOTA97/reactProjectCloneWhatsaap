import PhoneInput from "react-phone-input-2"

import 'react-phone-input-2/lib/style.css'

import"./phonesignin.css"
import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { auth } from "../firebase/setup"
import { useNavigate } from "react-router-dom"
import { grey } from "@mui/material/colors"





 function PhoneSignin (){

const navigate=useNavigate()
    const[phone,setPhone]=useState("")
    const[user,setUser] =useState(null)
    const[OTP,setOTP]=useState("")
   
    const sendOtp =async()=>{
        try{
            const recaptcha=new RecaptchaVerifier(auth,"recaptcha",{})
            const confirmation= await signInWithPhoneNumber(auth,phone,recaptcha)
    
            setUser(confirmation)
        }catch(err){
            console.error(err)

        }

       
    }
    const verifyOTP=async()=>{
try{
    const data= await user.confirm(OTP)
    data.user.phoneNumber && navigate("/main")
}catch(err){
    console.error(err)
}
        
     

    }

    return(
        <div className="phone-signin">
           
            <h2 style={{fontWeight:"200",textAlign:"center"}}>Enter your phone number</h2>
           <h5 style={{fontWeight:"500",textAlign:"center",color:"grey"}}>Select a country and enter phone number</h5>
            <div className="phone-content">
            <PhoneInput
  country={"us"}
  value={phone}
  onChange={(phone)=>setPhone("+"+phone)}
/>
<Button  onClick={sendOtp} sx={{marginTop:"10px"}} variant="contained">Send OTP</Button>
           
<div style={{marginTop:"10px"}} id="recaptcha">

</div>

            <br/>
            <TextField onChange={(e)=>setOTP(e.target.value)} sx={{marginTop:"10px",width:"300px"}} variant="outlined" size="small" label="Enter OTP"/>
           <br/>
            <Button onClick={verifyOTP} sx={{marginTop:"10px"}} variant="contained" color="success">Verify OTP</Button>
            </div>
        </div>
    )
 }
 export  default PhoneSignin