import '../pages/home.css';
import { FcHome,FcStatistics } from 'react-icons/fc';
import{AiOutlineMenu} from 'react-icons/ai'
import {CgMenuMotion,CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logo } from '../redux/auth/action';

export default function MyNavbar(){
    const dispatch=useDispatch()
    const gradientStyles = {
        background: 'linear-gradient(to bottom right, rgb(34,14,63), #ebf3f8)',
        /* Additional styles can be added here */
      };
      const gradientStyles1 = {
        background: 'linear-gradient(to bottom right, #712cf9, #dbdbe4)',
        /* Additional styles can be added here */
      };
   function logout(){
    console.log("logout")
      localStorage.removeItem("trackertoken");
         dispatch(logo)
   }
    return(

<div style={gradientStyles} className="side "  >
<div style={gradientStyles} className=" p-4  text-center   d-flex justify-content-center navleft">

<div className='fw-bold' onClick={logout} style={{cursor:"pointer"}}>
    <CgProfile size="23px"/>
</div>
</div>
<div className='text-center  lists pt-3'>
    <Link to="/"  style={{textDecoration:"none"}}><div  style={{textDecoration:"none",color:"white"}} className=' bor' >
        <FcHome size="20px" />
       <p style={{textDecoration:"none"}}>Home</p>
    </div> </Link>
    <Link to="/records" style={{textDecoration:"none",color:"white"}}><div className='bor ' >
        <AiOutlineMenu color='blue' size="20px" />
       <p >Records</p>
    </div> </Link>
<Link to="/budgets"  style={{textDecoration:"none",color:"white"}}>
<div  className=' bor' >
        <CgMenuMotion color='red' size="20px" />
       <p>Budgets</p>
    </div> </Link>
  <Link to="/statistics"  style={{textDecoration:"none",color:"white"}}>  <div  className='bor' >
        <FcStatistics size="20px" />
       <p  className='fs-9'>Statistics</p>
    </div> </Link>
     {/* <div  className='bor' >
        <FcStatistics size="20px" />
       <p  className='fs-9'>Logout</p>
    </div> */}
</div>
</div>






        
    )
}