import { useAppSelector } from "@/publicStore/store/store";
import SidBar from "../home/Sidbar/SidBar";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import Schedule from "./Schedule";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Timeline from   '@mui/icons-material/Moving';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./style.css"
function StudentDetails() {
    const them = useAppSelector((state) => state.theme.colors);
    const Arr=[{
      title:"Parents:",
      suptitle:"Justin Hope",
      icon:<PermIdentityIcon fontSize="small"/>,
    },
  
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
  return (
    <div className=" flex">
    <SidBar/>
    <div  className="px-8 mt-[37px]" style={{ color:them.fontColor, width:1250  }}>
    
<div className=" flex justify-between ">
    <h3>Student Details</h3>
    <div className=' flex gap-6 justify-center'>

    <form>
<input  className=" h-8 rounded-full p-3" id="serch" placeholder="serch........"/>
</form>


<h6 style={{ background:them.gray, color:them.blackColor}} className='  rounded-full w-10 h-10 pt-2   text-center  '><NotificationsActiveIcon/> </h6>
<h6 style={{ background:them.gray,color:them.blackColor}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SettingsIcon/></h6>
<h6 style={{  color:them.gray}}>Nabila A.<br/>Admin 
</h6>
<h4 style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>




    </div>
</div>



 <div className=" flex gap-5  ">








<div className=" w-3/4 h-[380px]  mt-4  ">

{/* البداية */}
<div style={{ color:them.fontColor , background:them.Navsheet}} className=" mb-6 h-[380px]    ">

<div style={{ background:them.bgsheet}} className="  w-full h-[110px]  relative  ">

<div  style={{ background:them.OrngColor}} className="  w-48 h-14  rounded-t-2xl    absolute  top-14 left-[500px] "/>
<div  style={{ background:them.ylawoColor}} className="  w-48 h-24   rounded-t-2xl    absolute top-5 left-[650px]  "/>
</div>

<div className=" px-6">
<div style={{ background:them.purpleColor}} className=" bor absolute  top-40  w-28 h-28  rounded-full  "/>  
<button style={{ background:them.Navsheet,color:them.fontColor  }} className="  ml-[750px] mt-3  "><MoreHorizIcon/> </button>
<div className=" mt-4 mb-7">
<h4>Karen Hope</h4>
<small>Student</small>
</div>

</div>





<div className=" px-6 flex justify-between">
  {Arr.map((e)=>{
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

























<div style={{ color:them.fontColor , background:them.Navsheet}}   >
    
     <div   className="h-16 w-full ">
      <div className=" container px-6  ">
    <h4 className=" pt-4">Payment History</h4>
 </div>

      </div>

{/* النص */}

      <div   className="    w-full">


{[1,2,3,4].map((e,i)=>{
  return(
    <div className=" flex">

<div className=" w-1/2  flex justify-items-center pt-3 px-4">
<p   className=' rounded-full w-10 h-10 pt-1 bg-red-500   text-center  '><Timeline fontSize="large"/> </p>
<p className=" ml-2 mt-2">#123456789</p> 
<div style={{ flexGrow:2 }}/>
<small className="   mt-[10px]">2 March 2021, 13:45 PM</small>
</div>


<div className=" w-1/2  flex justify-around pt-3 ">

<h6 className="  pt-2 ">$50,036</h6>

<h6 style={{ color:them.greenColor}} className="  pt-2">Complete</h6>


</div>

</div>
  )
})}


      </div> 
{/* النص */}





<div style={{ color:them.fontColor , background:them.Navsheet }} className="    h-24 w-full">
      <div className=" container px-6  flex justify-between pt-4   ">
    <p className="pt-2">Showing 1-5 from 100 data</p>

<div  className=" flex gap-3 ">


<button style={{ color:them.fontColor , background:them.Navsheet }} className='  rounded-full w-10 h-10  pt-1 pl-1 '><ArrowLeft fontSize="large"/></button>
<button style={{ color:them.blackColor , background:them.button }} className='  rounded-full w-10 h-10 pt-[6px] pl-4 '>1</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='iconmass   rounded-full w-10 h-10 pt-[6px] pl-[14px] '>2</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='iconmass   rounded-full w-10 h-10 pt-[6px] pl-[14px] '>3</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='  rounded-full w-10 h-10  pt-1 pl-0 '><ArrowRight fontSize="large"/></button>

</div>

 </div>



      </div> 


      
  </div>


  </div>
<Schedule/>
 </div>




</div>  
</div>
  )
}

export default StudentDetails