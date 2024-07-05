import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidBar from '../home/Sidbar/SidBar'
import { useAppSelector } from '@/publicStore/store/store';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import StarIcon from '@mui/icons-material/Star';
import "../FoodDetails/style.css"
import CallMadeIcon from '@mui/icons-material/CallMade';
import LeaderboardIcon  from '@mui/icons-material/Leaderboard';
export default function Food() {
    const them = useAppSelector((state) => state.theme.colors);
  return (
    <div  className=' flex '>
    <SidBar/>



<div  className="px-12 mt-[37px] " style={{ color:them.fontColor, width:1250  }}>
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





{/* ************************ */}

<div>
    
    <div style={{ color:them.fontColor , background:them.Navsheet }} className="   mt-4 h-24 w-full">
      <div className=" container px-10  ">
    <h5 className=" pt-8">Food Menu</h5>
 </div>



      </div>



<div style={{ color:them.fontColor , background:them.Darkblue }} className=" px-4 pt-4    h-[740px] w-full">



{[1,2,3,4,5].map((e)=>{
    return(

        <div className=' flex  items-center gap-3 mb-4'>
<div style={{  background:them.purpleColor }} className=" w-36 h-[120px] rounded-lg"/>
{/* البداية */}
<div className=' flex   px-2  h-28 w-full  '>



    <div>
    <button  className=' rounded-full p-0  mb-2    w-24 h-9' style={{color:them.blackColor, background:them.button }}>
  <p className=' pt-1'>Lunch</p>
</button>






{/* *********** */}
<div className=' flex gap-4 items-center w-[950px] justify-between '>



<h6 className=' mt-1 '>Beef Steak with Fried Potato</h6> 

<div className=' flex items-center '>
<StarIcon style={{ color:them.ylawoColor }}/>4.9
</div>

<div className=' flex gap-2'>
<div  className='  pt-2 '>
<LeaderboardIcon  fontSize='large' style={{ color:them.button  }} />
</div>

<div >
    <h6 className=' m-0'>1.456</h6>
<small  >Total Order</small>


</div>
    </div>


<div className=' flex gap-2'>
<div  className='  pt-2 '>
<CallMadeIcon  fontSize='large' style={{ color:them.button  }} />
</div>

<div >
    <h6 className=' m-0'>26%</h6>
<small  >Interest</small>


</div>
    </div>

<div className=' cercl h-12 w-12 text-center pt-[5px] '>
    <small>50%</small>
</div>
<button style={{ background:them.Darkblue,color:them.fontColor  }}><MoreHorizIcon/> </button>













</div>
   {/* *********** */}
    </div>














</div>
</div>
    )
})}











{/* ******************* */}

</div>




{/* ------------------------------------- */}

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
  )
}
