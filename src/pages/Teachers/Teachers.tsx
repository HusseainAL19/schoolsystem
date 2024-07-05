
import { useAppSelector } from "@/publicStore/store/store";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Content from "./Content";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import SidBar from "../home/Sidbar/SidBar";
function Teachers() {
    const them = useAppSelector((state) => state.theme.colors);
  return (
    <div className=" flex">
          <SidBar/>
          <div  className="px-8 mt-[37px]" style={{ color:them.fontColor, width:1250  }}>
          
<div className=" flex justify-between ">
          <h3>Finance</h3>
          <div className=' flex gap-6 justify-center'>

          {/* <form>
<input  className=" h-8 rounded-full p-3" id="serch" placeholder="serch........"/>
</form> */}


<h6 style={{ background:them.gray, color:them.blackColor}} className='  rounded-full w-10 h-10 pt-2   text-center  '><NotificationsActiveIcon/> </h6>
<h6 style={{ background:them.gray,color:them.blackColor}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SettingsIcon/></h6>
 <h6 style={{  color:them.gray}}>Nabila A.<br/>Admin 
 </h6>
<h4 style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>
 

 

          </div>
</div>

{/* -------------------------------------- */}
<div className=" flex mt-3   justify-between ">
       
<form>
<input  className=" h-8 rounded-full p-3" id="serch" placeholder="serch........"/>
</form>




          <div className=' flex gap-6 justify-center'>

<button  className=' rounded-full ml-8 w-[160px] flex justify-between pt-1 h-8' style={{color:them.fontColor, background:them.button }}>
<ControlPointIcon/>
<small>New Student</small>
</button>

 
          </div>





</div>

{/* -------------------------------------- */}
<Content/>


<div  className=" flex px-4 mt-6   justify-between ">
 
 <div  className=" flex justify-between gap-6 ">

  <p  > Showing</p>
  <p  > from</p>
  <p  > data</p>
 </div>



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
  )
}

export default Teachers