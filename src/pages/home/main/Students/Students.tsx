
import { useAppSelector } from "@/publicStore/store/store";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import SidBar from "../../Sidbar/SidBar";
// import Intuition from "../Intuition/Intuition";
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PrintIcon from '@mui/icons-material/Print';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Students() {
    const them = useAppSelector((state) => state.theme.colors);
  return (
    <div className=" flex">
          <SidBar/>
          <div  className="px-8 mt-[37px]" style={{ color:them.fontColor, width:1250  }}>
          
<div className=" flex justify-between ">
          <h3>Students</h3>
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



 
 {/* --------------------------------- */}
 <div>
    
    <div style={{ color:them.fontColor , background:them.Navsheet }} className=" rounded-xl mt-4 h-24 w-full">
      <div className=" container px-10  ">

 </div>



      </div>



      <div style={{ color:them.fontColor , background:them.Darkblue }} className=" rounded-xl h-[340px] w-full">


{[1,2,3,4,5].map((e,i)=>{
  return(
    <div className=" flex">

<div className=" w-1/2  flex justify-items-center pt-3 px-4">
<p style={{ background:them.purpleColor}} className=' rounded-full w-8 h-8  text-center  '/>
<p className=" ml-2 mt-1">Samantha William</p>
<div style={{ flexGrow:2 }}/>
<p style={{ color:them.button }} className="mt-1 ">ID</p>
<p style={{ color:them.button }} className=" ml-2 mt-1">123456789</p>
</div>


<div className=" w-1/2  flex justify-between pt-3 px-4">

 <div className=" flex">
<p style={{ background:them.OrngColor}} className=' rounded-full w-8 h-8 text-center  '/>
<small className=" ml-2 ">Class<br/> VII A</small>

 </div>

<p className="  pt-2">$50,036</p>


<div className="">
<button style={{ background:them.Darkblue,color:them.fontColor  }}><PrintIcon/> </button>
<button style={{ background:them.Darkblue,color:them.fontColor  }}><MoreHorizIcon/> </button>
</div>

</div>

</div>
  )
})}











      </div>














      <div style={{ color:them.fontColor , background:them.Navsheet }} className=" rounded-xl   h-24 w-full">
      <div className=" container px-10  flex justify-between pt-4   ">
    <p>Showing 1-5 from 100 data</p>

<div  className=" flex  gap-3    ">

<h5 style={{ color:them.fontColor}} className='  rounded-full w-10 h-10  pt-[4px] pl-4  text-center'><ArrowLeftIcon fontSize="large"/></h5>
<h5 style={{ color:them.fontColor, background:them.button }} className='  rounded-full w-10 h-10  pt-[6px]   text-center'>1</h5>
<h5 style={{ color:them.fontColor}} className='iconmass  rounded-full w-10 h-10    pt-[6px]   text-center'>2</h5>
<h5 style={{ color:them.fontColor}} className='iconmass  rounded-full w-10 h-10   pt-[6px]   text-center'>3</h5>
<h5 style={{ color:them.fontColor}} className='  rounded-full w-10 h-10  pt-[4px]     text-center'><ArrowRightIcon fontSize="large"/></h5>
</div>

 </div>



      </div>
  </div>









</div>  
 </div>
  )
}

export default Students