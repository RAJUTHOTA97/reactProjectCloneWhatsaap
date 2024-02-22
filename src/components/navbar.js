import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
 
import { auth } from '../firebase/setup';
import "./navbar.css"
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import out from "../images/logout.png"
 

export default function Navbar(props) {
  
  const navigate = useNavigate()

  const logout = async()=>{
    try{
      await signOut(auth)
      navigate("/")
    }catch(err){
      console.error(err)
    }
  }

  // console.log(auth.currentUser)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} sx={{backgroundColor:"#f0f2f5",height:"70px"}} position="static">
        <Toolbar variant="dense">

         <img  className='profile-img' src={props.reciverProImg??  auth.currentUser?.photoURL}/>  
         <h3 className='reciver-name'>{props.reciverUsername?? ""}</h3> 
        <img  onClick={logout}  className="logout-icon" src={out}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
