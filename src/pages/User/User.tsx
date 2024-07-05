import React from 'react'
import SidBar from '../home/Sidbar/SidBar'
import Main from '../home/main/Main'
import SidBar2 from '../home/Sidbar/SidBar2'
import { useAppSelector } from '@/publicStore/store/store';
import './style.css'
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import '../home/main/sersh.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
export default function User() {
  const Arr=["Samantha William","Tony Soap","Karen Hope","Jordan Nico","Nadila Adja"]
  const Arr2=[

  {
    title:"Address:",
    suptitle:"Jakarta, Indonesia",
    icon:<LocationOnOutlinedIcon fontSize="small"/>,
  },
  {
    title:"Phone:",
    suptitle:"+12 345 6789 0",
    icon:<CallOutlinedIcon fontSize="small"/>,
  },
  {
    title:"Email:",
    suptitle:"Hope@mail.com",
    icon:<MailOutlineIcon fontSize="small"/>,
  },
]
    const them = useAppSelector((state) => state.theme.colors);
  return (
    <>
        <div  className=' flex '>
    <SidBar/>

    <div className=' man  '>
   <div className=' container px-10'>

   <div className=" flex  justify-between mt-10 " style={{ color:them.fontColor }}>
        <h3>Dashboard</h3>
<form>
<input  className=" h-8 rounded-full p-3" id="serch" placeholder="serch........"/>
</form>


      </div>






      <div style={{ color:them.fontColor , background:them.Navsheet}} className=" mb-6 h-[380px]    ">

<div style={{ background:them.bgsheet}} className="  w-full h-[110px]  relative  ">

<div  style={{ background:them.OrngColor}} className="  w-36 h-14  rounded-t-full   absolute  top-14 left-[550px] "/>
<div  style={{ background:them.ylawoColor}} className="  w-48 h-24   rounded-t-full   absolute top-5 left-[650px]  "/>
</div>

<div className=" px-6">
<div style={{ background:them.purpleColor}} className=" bor absolute  top-40  w-28 h-28  rounded-full  "/>  
<button style={{ background:them.Navsheet,color:them.fontColor  }} className="  ml-[750px] mt-3  "><MoreHorizIcon/> </button>
<div className=" mt-4 mb-7">
<h4>Karen Hope</h4>
<small>Admin</small>
</div>

</div>





<div className=" px-6   w-3/4 flex justify-between">
  {Arr2.map((e)=>{
    return(
      <div>
      <h6>{e.title} </h6>
      <div className=" flex gap-2">
        <div style={{ color:them.blackColor , background:them.OrngColor}}  className=" w-8 h-8  rounded-full">
        <div style={{ paddingLeft:6 }} >
          {e.icon}
        </div>
        </div>
      <p>{e.suptitle} </p>
      </div>
      
      
      </div>
    )
  })}

</div>



</div>






















<div   className=' flex justify-between  px-2 gap-10 mt-8'>




<div style={{ background:them.Navsheet }}  className=' w-1/2' > 


<div className=' flex  gap-[71px] mt-2 pl-4 mb-3 items-center '>
<div style={{  color:them.gray}} className=' w-64 '>
    <h4> Contacts </h4>
    <small>You have 741 contacts</small>
    </div>
<button style={{ color:them.blackColor,background:them.button}} className='   rounded-full w-10 h-10  pt-1 pl-[7px]  '><AddIcon/></button>
</div>

<form>
<input  className=" h-8 rounded-full p-3 w-5/6  mb-2 ml-8" id="serch" placeholder="serch........"/>
</form>

{[1,2,3,4,5].map((e)=>{
  return(
 
  <div style={{ color:them.gray }} className='  flex mt-3 w-full  px-3 '>
    <p style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>
    <div className='   flex gap-40  '>
    <small className=' pl-3' >Samantha William<br/>Lorem ipsumdolor  </small> 
   <button style={{ color:them.fontColor,background:them.Navsheet}} className='iconmass   rounded-full w-10 h-10  pt-1 pl-[7px]  '><EmailIcon/></button>
    </div>
    </div>
 
    )
})}



<button  className='sml rounded-full mt-3 ml-6 mb-4  pt-[6px] w-[350px] h-10' style={{color:them.fontColor}}>
  <p>View More</p>
</button>





</div>






<div style={{ background:them.Navsheet }}  className=' w-1/2' > 



<h4 style={{  color:them.gray}} className='mt-3 pl-4 mb-3'>Messages</h4>

<form>
<input  className=" h-8 rounded-full p-3 w-5/6  mb-2 ml-8" id="serch" placeholder="serch........"/>
</form>

{[1,2,3,4,5].map((e)=>{
  return(
    <>
  <div style={{ color:them.gray }} className='  flex mt-3 w-full  px-3 '>
    <p style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>
    <div className='   flex gap-32  '>
    <small className=' pl-3' >Samantha William<br/>Lorem ipsumdolor  </small> 
    <small className=' pl-3'>12:45 PM
    <p style={{ background:them.OrngColor ,color:them.blackColor}} className=' rounded-full w-5 h-5 ml-9   text-center  '>1</p> 
        </small> 
   
    </div>
    </div>
    <div style={{ background:them.purpleColor }} className='w-[350px] h-[1px] mx-auto'/>
    </>
    )
})}



<button  className='sml rounded-full mt-3 ml-6 mb-4  pt-[6px] w-[350px] h-10' style={{color:them.fontColor}}>
  <p>View More</p>
</button>





</div>






</div>










   </div>
 

    
    </div>
   
   {/* Sidba2 */}
    <div className=' ' style={{ background:them.SidBar}}>
<div className='  mt-9 '>

<div className=' flex gap-6 justify-center'>
<h6 style={{ background:them.gray}} className=' rounded-full w-10 h-10 pt-2   text-center  '><NotificationsIcon/> </h6>
<h6 style={{ background:them.gray}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SettingsIcon/></h6>
 <h6 style={{  color:them.gray}}>Nabila A.<br/>Admin 
 </h6>
<h4 style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '></h4>
 
</div>
 
<div className=' px-2 mt-4' style={{ color:them.fontColor}}>
<h4>Lastest Activity</h4>

<div className=' flex mt-6 '>

<div className=' w-1/5 '>

<div className='linef relative ml-2 '>
<div style={{ background:them.purpleColor}} className=" bor absolute    top-0   left-[-15px]  w-9 h-9  rounded-full  "/>
<div style={{ background:them.purpleColor}} className=" bor absolute    top-24  left-[-15px]  w-9 h-9  rounded-full  "/>
<div style={{ background:them.purpleColor}} className=" bor absolute    top-48  left-[-15px]  w-9 h-9  rounded-full  "/>
<div style={{ background:them.purpleColor}} className=" bor absolute    top-72  left-[-15px]  w-9 h-9  rounded-full  "/>
</div>

</div>



<div>
  {["Karen Hope moved task “User Research“ from On Progress to Done"
  ,"Samantha William add new 4 attached files on task “Photo’s Assets“"
  ,"Tony Soap invite you in task “Wireframing“ and “Hi-fidelity“"
  ,"Samantha William created new Task"].map((e)=>{
    return(
<div className='  w-full  '>
  <small   >{e} </small>
  <p className='   mt-1  '>2 March 2021, 13:45 PM</p>
  </div>
    )
  })}



</div>


</div>


</div>


</div>

</div>





































</div></>

  )
}
