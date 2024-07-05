import { useAppSelector } from "@/publicStore/store/store";
import SidBar from "../home/Sidbar/SidBar";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Schedule from "../StudentDetails/Schedule";
export default function TeacherDetails() {
    const them = useAppSelector((state) => state.theme.colors);
    const Arr=[
  
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
    <h3>Teacher Details</h3>
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



 <div className=" flex gap-5   ">








<div className=" w-3/4    mt-4  ">

{/* البداية */}
<div style={{ color:them.fontColor , background:them.Navsheet}} className=" mb-6 h-[800px]    ">

<div style={{ background:them.bgsheet}} className="  w-full h-[110px]  relative  ">

<div  style={{ background:them.OrngColor}} className="  w-48 h-14  rounded-t-2xl    absolute  top-14 left-[500px] "/>
<div  style={{ background:them.ylawoColor}} className="  w-48 h-24   rounded-t-2xl    absolute top-5 left-[650px]  "/>
</div>







<div className=" px-6">
<div style={{ background:them.purpleColor}} className=" bor absolute  top-40  w-28 h-28  rounded-full  "/>  
<button style={{ background:them.Navsheet,color:them.fontColor  }} className="  ml-[750px] mt-3  "><MoreHorizIcon/> </button>
<div className=" mt-4 mb-7">
<h4>Maria Historia</h4>
<small>History Teacher</small>
</div>

</div>





<div className=" px-6 flex justify-between  w-3/4">
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



<div className=" px-6   w-2/3">
  
  <div>
<h5 className="  pb-2 pt-3">About:</h5>
<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>

</div>

<div>
<h5 className="  pb-2 pt-3">Education:</h5> 
<div className=" flex items-center gap-2">

<div style={{ background:them.fontColor}} className=' rounded-full w-2 h-2  ' />
<small>History Major, University Akademi Historia</small>
</div>
<small>2013-2017</small>


<div className=" flex items-center mt-4 gap-2">

<div style={{ background:them.fontColor}} className=' rounded-full w-2 h-2  ' />
<small>History Major, University Akademi Historia</small>
</div>
<small>2013-2017</small>




</div>






<div>
<h5 className="  pb-2 pt-3">Expertise:</h5>
<small>World History, Philosophy, Prehistoric, Culture, Ancient</small>

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
