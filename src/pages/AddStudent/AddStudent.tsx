import { useAppSelector } from "@/publicStore/store/store";
import SidBar from "../home/Sidbar/SidBar";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import './style.css'
import Checkbox from '@mui/material/Checkbox';

import AdjustIcon from '@mui/icons-material/Adjust';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function AddStudent() {
    const them = useAppSelector((state) => state.theme.colors);
  return (
        <div  className=' flex '>
    <SidBar/>


<div  className="px-8 mt-[37px] " style={{ color:them.fontColor, width:1250  }}>
    <div className=" flex justify-between ">
          <h3>Add New Student</h3>
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





<div className=" w-full h-14 mt-3 rounded-t-2xl " style={{ color:them.blackColor,background:them.button }} >
<h4 className="  pt-2 pl-9 ">Student Details</h4>
</div>







{/* --------------------------- */}
<div className=" w-full h-[470px] flex gap-6 px-6 pt-3 " style={{ color:them.fontColor,background:them.Navsheet }} >


<div className=" w-1/6 " >
<h4 className=" mb-3" >Photo *</h4>
<input placeholder="  Drag and drop or 
click " className=" h-48 inputs  "/>
</div>







<div className="w-5/12   ">
<h5 className=" mb-2  " >First Name *</h5>
<input type="texet" placeholder="Samantha" className=" h-9 rounded-md w-full inputs  "/>



<h5 className=" mt-2  " >Date & Place of Birth *</h5>
<div className=" flex justify-between" >
<input type="texet" placeholder="Samantha" className=" h-9 rounded-md  w-[220px] inputs  "/>
<input type="texet" placeholder="Jakarta" className=" h-9 rounded-md  w-[220px] inputs  "/>
</div>

<h5 className=" mt-2  " >Email *</h5>
<input type="texet" placeholder="Email@mail.com" className=" h-9 rounded-md w-full inputs  "/>

<h5 className=" mt-2  " >Address *</h5>
<input type="texet" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
className=" h-32 rounded-md w-full inputs  "/>

  <small className="ml-[420px] ">0/2000</small>
</div>







<div className=" w-5/12  ">

<h5 className="   " >Last Name *</h5>
<input type="texet" placeholder="William" className=" h-9 rounded-md w-full inputs  "/>

<h5 className=" mt-2  " >Parent Name *</h5>
<input type="texet" placeholder="Mana William" className=" h-9 rounded-md w-full inputs  "/>

<h5 className=" mt-2  " >Phone *</h5>
<input type="texet" placeholder="+1234567890" className=" h-9 rounded-md w-full inputs  "/>


</div>








</div>




{/* *************************** */}










<div className=" w-full h-14 mt-4 rounded-t-2xl " style={{ color:them.blackColor,background:them.button }} >
<h4 className="  pt-2 pl-9 ">Parent Details</h4>
</div>







{/* --------------------------- */}
<div className=" w-full h-[470px] flex gap-6 px-6 pt-7 " style={{ color:them.fontColor,background:them.Navsheet }} >



<div className=" w-[500px]   ">

<h5 className=" mb-4  " >First Name *</h5>
<input type="texet" placeholder="Samantha" className=" h-9 rounded-md w-full inputs  "/>





<h5 className=" mt-4  " >Email *</h5>
<input type="texet" placeholder="Email@mail.com" className=" h-9 rounded-md w-full inputs  "/>

<h5 className=" mt-4  " >Address *</h5>
<input type="texet" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
className=" h-32 rounded-md w-full inputs  "/>

  <small className="ml-[510px] ">0/2000</small>
</div>







<div className=" w-[500px]   ">

<h5 className=" mb-4  " >Last Name *</h5>
<input type="texet" placeholder="Samantha" className=" h-9 rounded-md w-full inputs  "/>





<h5 className=" mt-4  " >Phone *</h5>
<input type="texet" placeholder="Email@mail.com" className=" h-9 rounded-md w-full inputs  "/>

<h5 className=" mt-4  " >Payments *</h5>


<Checkbox {...label} style={{ background:them.Navsheet, color:them.fontColor }} size="small"  icon={<RadioButtonUncheckedIcon />} checkedIcon={<AdjustIcon />} />
Cash


<Checkbox {...label} style={{ background:them.Navsheet, color:them.fontColor }} size="small" icon={<RadioButtonUncheckedIcon />} checkedIcon={<AdjustIcon />} />
Debit
</div>








</div>



<div className="  mt-3 flex gap-3  ml-[940px] " >

<button  className=" inputss rounded-3xl ">Save as Draft</button>
<button style={{ color:them.fontColor,background:them.button }} className=" rounded-3xl " >Submit</button> 
</div>

















</div>



















</div>
)
}

export default AddStudent