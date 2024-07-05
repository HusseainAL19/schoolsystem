
import { useAppSelector } from '@/publicStore/store/store';
import SidBar from '../home/Sidbar/SidBar'
import { NotificationsActive, Settings } from '@mui/icons-material';
import './style.css'

function Notification() {
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


<h6 style={{ background:them.gray, color:them.blackColor}} className='  rounded-full w-10 h-10 pt-2   text-center  '><NotificationsActive/> </h6>
<h6 style={{ background:them.gray,color:them.blackColor}} className=' rounded-full w-10 h-10 pt-2  text-center  '><Settings/></h6>
 <h6 style={{  color:them.gray}}>Nabila A.<br/>Admin 
 </h6>
<h4 style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>
 

 

          </div>
</div>
{/* div1 */}
<div  style={{background:them.Navsheet }} className=' w-full px-4  h-full  mt-3'>
    <h4 className=' pt-6' >Today</h4>

<div  className=' flex gap-4'>
<div className='linef  ml-1 relative'>
<div  className='  bor rounded-full w-4 h-4 absolute left-[-8px]'/>
<div  className='  bor rounded-full w-4 h-4 absolute top-16 left-[-8px]'/>
<div  className='  bor rounded-full w-4 h-4 absolute top-32 left-[-8px]'/>
<div  className='  bor rounded-full w-4 h-4 absolute top-48 left-[-8px]'/>
<div  className='  bor rounded-full w-4 h-4 absolute top-96 left-[-8px]'/>
</div>




<div className=' '>
<div >
<small>Monday, June 31 2020</small>
<h6>Karen Hope has created new task at HIstory Lesson</h6>
</div>


<div className='   mt-4 '>
<small>Monday, June 31 2020</small>
<h6>Karen Hope has created new task at HIstory Lesson</h6>
</div>


<div className='   mt-[20px] '>
<small>Monday, June 31 2020</small>
<h6>Tony Soap commented at Science Homework</h6>
</div>


<div className='   mt-[20px] '>
<small>Monday, June 31 2020</small>
<h6>Samantha William add 4 files on Art Class</h6>
</div>


<div className=' flex w-[900px] mt-3  justify-between '>
<div style={{ background:them.purpleColor }} className=' w-48 h-28 rounded-2xl '/>
<div style={{ background:them.purpleColor }} className=' w-48 h-28 rounded-2xl '/>
<div style={{ background:them.purpleColor }} className=' w-48 h-28 rounded-2xl '/>
<div style={{ background:them.purpleColor }} className=' w-48 h-28 rounded-2xl '/>
</div>

<div className='   mt-[20px] '>
<small>Monday, June 31 2020</small>
<h6>Samantha William add 4 files on Art Class</h6>
</div>



























</div>


</div>



<h4 className=' pt-6' >Yesterday</h4>

<div  className=' flex gap-4'>
<div className='linefff  ml-1 relative'>
<div  className='  bor rounded-full w-4 h-4 absolute left-[-8px]'/>
<div  className='  bor rounded-full w-4 h-4 absolute top-16 left-[-8px]'/>

</div>




<div className=' '>
<div >
<small>Monday, June 31 2020</small>
<h6>Karen Hope has created new task at HIstory Lesson</h6>
</div>


<div className='   mt-4 '>
<small>Monday, June 31 2020</small>
<h6>Karen Hope has created new task at HIstory Lesson</h6>
</div>






























</div>


</div>









</div>


















</div>

</div>
    </div>
  )
}

export default Notification