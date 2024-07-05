import React from 'react'
import SidBar from '../home/Sidbar/SidBar';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Timeline from   '@mui/icons-material/Moving';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppSelector } from '@/publicStore/store/store';
import Intuition from '../home/main/Intuition/Intuition';

function Finance() {
    const them = useAppSelector((state) => state.theme.colors);
  return (
    <div>
        <div  className=' flex '>
    <SidBar/>



<div  className="px-8 mt-[37px] " style={{ color:them.fontColor, width:1250  }}>
    <div className=" flex justify-between ">
          <h3>Finance</h3>
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

<div className=' w-full   gap-3 items-center  flex mt-6'>



<div className=' w-3/5  '>

<Intuition/>

</div>












<div className=' w-1/2  mt-4  '>


<div style={{ color:them.fontColor , background:them.Navsheet}}   >
    
     <div   className="h-16 w-full ">
      <div className=" container px-6  ">
    <h4 className=" pt-4">Payment History</h4>
 </div>

      </div>

{/* النص */}

      <div   className="    w-full h-[370px]  pt-7 ">


{[1,2,3,4].map((e,i)=>{
  return(
    <div className=" flex">

<div className=" w-1/2  flex justify-items-center pt-3 px-3">
<p   className=' rounded-full w-10 h-10 pt-1 bg-red-500   text-center  '><Timeline fontSize="large"/> </p>
<p className=" ml-2 mt-1">#123456789
    <br/>2 March 2021, 13:45 PM
    </p> 

<div style={{ flexGrow:2 }}/>
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
</div>




















</div>

</div>
    </div>
  )
}

export default Finance