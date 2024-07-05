import React from 'react'
import SidBar from '../home/Sidbar/SidBar'
import { useAppSelector } from '@/publicStore/store/store';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import LeaderboardIcon  from '@mui/icons-material/Leaderboard';
import CallMadeIcon from '@mui/icons-material/CallMade';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './style.css'
function FoodDetails() {
    const Arr=[
        "2 tablespoons butter, softened, divided"
        ,"1 teaspoon minced fresh parsley"
        ,"1/2 teaspoon minced garlic"
        ,"1/4 teaspoon reduced-sodium soy sauce"
        ,"1 beef flat iron steak or boneless top sirloin steak (3/4 pound)"
        ,"1/8 teaspoon salt"
        ,"1/8 teaspoon pepper"]




        const Arr2=[
            "Calories: 217."
            ,"Water: 61%"
            ,"Protein: 26.1 grams."
            ,"Carbs: 0 grams."
            ,"Sugar: 0 grams."
            ,"Fiber: 0 grams."
            ,"Fat: 11.8 grams."]

    const them = useAppSelector((state) => state.theme.colors);
  return (
    <div  className=' flex '>
    <SidBar/>



<div  className="px-8 mt-[37px] " style={{ color:them.fontColor, width:1250  }}>
    <div className=" flex justify-between ">
          <h3>FoodDetails</h3>
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

<div className=' w-full flex gap-5 '>

{/* ----------------------------------- */}
<div style={{ background:them.Navsheet }} className=' w-3/4  '>



<div className=' flex  px-4 pt-14 gap-4'>
    
<div style={{ background:them.purpleColor}} className=' w-2/5 h-40  rounded-2xl'/>
{/* ------------- */}
<div className=' w-full'>
<div className=' flex justify-between  items-center '>
<h5>Beef Steak with Fried Potato</h5>
<button style={{ background:them.Navsheet,color:them.fontColor  }}><MoreHorizIcon/> </button>
</div>

<button  className=' rounded-full p-0  w-24 h-9' style={{color:them.blackColor, background:them.button }}>
  <p className=' pt-1'>Lunch</p>
</button>

<div className='  w-3/4 mt-7'>
<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </small>

</div>

</div>



</div>




{/* ---------------------------------- */}
<div  className=' w-full flex gap-16 items-center   px-4 h-14 mt-10 '>
    <div> 
        Rating
        <div  className='  flex gap-1  '>
             <StarIcon style={{ color:them.ylawoColor }}/>4.9
        </div>
     
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
      
50%
    </div>
</div>

{/* -------------- */}


<div className=' flex px-4 mt-16'>
    
<div className='  w-[390px]  '>
<h5 className='mb-3'>Ingredients</h5>
{Arr.map((e)=>{
    return(
<div className='  flex items-center  gap-2 pt-2'>
<div style={{ background:them.fontColor}} className=' rounded-full w-1 h-1  ' />
<small>{e} </small>
</div>
    )
})}


</div>





<div className='  w-1/2'>
<h5>Nutrition:</h5>

{Arr2.map((e)=>{
    return(
<div className='  flex items-center  gap-2 pt-2'>
<div style={{ background:them.fontColor}} className=' rounded-full w-1 h-1  ' />
<small>{e} </small>
</div>
    )
})}

</div>


</div>



</div>





{/* ---------------------- */}

<div className='w-1/4  '>

<h4>Student Comments</h4>


{[1,2,3].map((e)=>{
    return(
<div  style={{ background:them.Navsheet }} className=' w-full mt-3 h-52 rounded-2xl  px-4 '>

<div className=' pt-3 pb-2'>

<DeviceHubIcon/>
<DeviceHubIcon/>
</div>
<p>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur.</p>

<div className='flex gap-3  '>

<small style={{ background:them.purpleColor}} className=' rounded-full w-12 h-12  text-center  '/>

<div>
<h6 className=' mb-0 '  style={{  color:them.gray}}>Samantha W.</h6>
 <p className='  '>5 days ago</p>  
 </div>

 </div>










</div>
    )
})}


</div>

</div>



</div>



















</div>
  )
}

export default FoodDetails