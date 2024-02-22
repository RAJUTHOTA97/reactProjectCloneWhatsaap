import { Avatar, List, ListItemText, Paper,ListItem } from "@mui/material"
import { collection, getDocs } from "firebase/firestore"
import { auth, database } from "../firebase/setup"
import { useEffect, useState } from "react"
import search from "../images/search.png"
import "./sidebar.css"
import { Link } from "react-router-dom"









function Sidebar(){
    const [users,setUsers]=useState([])


const getUser=async()=>{

    const userRef=collection(database,"Users")
    try{

       const data= await getDocs(userRef)
       const filteredData=data.docs.map((doc)=>({
     ...doc.data(),
     id:doc.id
       }))
       setUsers(filteredData)

    }catch(err){
        console.error(err)

    }
}
useEffect(()=>{
    getUser()


},[users])
 


    return(
        <div>
             <div className="search">
       <img   className="search-icon" src={search}/>
        <input  placeholder="search for new chat" className="search-text"/>
       
       </div>
     {users.filter(user=> user.id !== auth.currentUser?.uid).map((user)=>{

        return <>
      <Link to="/chat" className="chat-link" state={{username:user.username,profile_image:user.profile_image}}>
         <Paper elevation={0} sx={{border:"1px solid #f0f2f5"}}>
        <List>
            <ListItem>
                <Avatar src={user.profile_image}/>
                <ListItemText sx={{marginLeft:"10px"}} primary={user.username}/>

                
            </ListItem>
        </List>
     </Paper>
     </Link>

        </>
     })}





    
        </div>
    )
}

export default Sidebar