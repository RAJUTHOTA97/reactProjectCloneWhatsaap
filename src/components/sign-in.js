import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import "./signin.css"
import image from "../images/imgewhatsapp.png"
import { Button, Card, CardContent } from '@mui/material';
import google from"../images/googleimg.png"
import { signInWithPopup } from 'firebase/auth';
import { auth, database, googleProvider } from '../firebase/setup';
import {  addDoc, doc, setDoc} from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
 

export default function Signin() {
  
  const navigate=useNavigate()
 
  const addUser= async ()=>{
    const userDoc=doc(database,"Users",`${auth.currentUser?.uid}`)

    try{
      await setDoc(userDoc,{
        id:auth.currentUser?.uid,
        username:auth.currentUser?.displayName,
        profile_image:auth.currentUser?.photoURL

      })
    }catch(err){
   console.error(err)
    }
    
  }

 
const googleSignin=async()=>{
    try{
        await signInWithPopup(auth,googleProvider)
        addUser()
        navigate("/main")

    }catch(err){
        console.error(err)
    }

   

}
   

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{height:"230px",backgroundColor:"#017561"}}>
        <Toolbar>
       <div className='nav-content'>
       <img src={image}  className='logo'/>
        <h3 className='title'>OUR-CHAT</h3>
       </div>
       <Card className='box'>
        <CardContent className='signin-card'>
            <div>
                
            <h2 className='description'>Use OUR-CHAT on your computer</h2>
            <h5 className='step'>1.Open Our-chat on your computer</h5>
            <h5 className='step'>2.Signin Using Google Account</h5>
            <h5 className='step'>3.Signin Using Phone Number</h5>
            </div>
            <div onClick={ googleSignin} className='signin-btn'>
                <img src={google} className='google'/>
            </div>
            
        </CardContent>
        <Link to="/phone" style={{textDecoration:"none"}}> <Button color='success'>Signin With Phone Number</Button></Link>
       </Card>
       
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
