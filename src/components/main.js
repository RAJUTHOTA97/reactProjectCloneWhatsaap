import { Grid } from "@mui/material"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import "./main.css"
import smartphone from "../images/smartphone.png"





function Main() {
    return(
<div>
     <Grid container>
        <Grid xs={12}>
<Navbar/>
        </Grid>
        <Grid xs={5}>
<Sidebar/>
        </Grid>
        <Grid xs={7}>
            <div className="main-right">
                 <img className="right-image" src={smartphone}/>
                 <h1 className="right-text">Our-Chat web for desktop</h1>
                 <h4 className="right-text">keep your computer connected</h4>
            </div>
        </Grid>

     </Grid>
</div>




    )
    
}
export default Main