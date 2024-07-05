import { useAppSelector } from '@/publicStore/store/store';
import './style.css'
// 2222
import AlarmIcon from '@mui/icons-material/Alarm';
import TimelineIcon from '@mui/icons-material/Timeline';

import DateRangeIcon from '@mui/icons-material/DateRange';
function Schedule() {
    const them = useAppSelector((state) => state.theme.colors);
  return (
    <div className='  w-72'>
        {/* 111111111 */}
     <div className=' h-20 rounded-2xl  pt-2' style={{ background:them.Navsheet }}>
        <div className='   ml-6'>
        <h5>Schedule Details</h5>
        <small >Thursday, 10th April , 2021</small>

        </div>
     </div>
         {/* 111111111 */}

{[them.button,them.OrngColor,them.ylawoColor,them.fontColor].map((e)=>{
  return(
<div className=' flex'>
<div className='h-[135px] w-[15px] mt-3 ml-2 slid' style={{ background:e }} />

<div className=' h-[135px] w-64   rounded-2xl mt-3 pt-2' style={{ background:them.Navsheet }}>
<div className='   ml-6'>
<h6>World History</h6>
<small >Thursday, 10th April , 2021</small>


<div className='mt-3 flex     gap-[38px] '>
<div className='  '>
  <div>
  <DateRangeIcon style={{ color:them.OrngColor }} fontSize='small'/>
  <small className='ml-2 '>March 20, 2021</small>
  </div>


<div className='mt-1 '>
<AlarmIcon style={{ color:them.ylawoColor }} fontSize='small'/>
<small className='ml-2 '>09.00 - 10.00 AM</small>
</div>

{/*الفرق*/}
</div>
{/* <div style={{ background:them.purpleColor}} className='  rounded-full w-10 h-10  text-center  '/> */}




</div>















</div>


</div>

</div>
  )
})}

<button  className=' rounded-full mt-4   w-[275px] ml-1 h-11' style={{color:them.fontColor, background:them.button }}>
  <p>View More</p>
</button>

    </div>
  )
}

export default Schedule