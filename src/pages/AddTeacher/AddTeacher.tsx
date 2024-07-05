import { useAppSelector } from "@/publicStore/store/store";
import SidBar from "../home/Sidbar/SidBar";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import './style.css'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function AddTeacher() {
    const them = useAppSelector((state) => state.theme.colors);
  return (
        <div  className=' flex '>
    <SidBar/>


<div  className="px-8 mt-[37px] " style={{ color:them.fontColor, width:1250  }}>
    <div className=" flex justify-between ">
          <h3>Add New Teacher</h3>
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
<h4 className="  pt-2 pl-9 ">Personal Details</h4>
</div>







{/* --------------------------- */}
<div className=" w-full h-[530px] flex gap-6 px-6 pt-3 " style={{ color:them.fontColor,background:them.Navsheet }} >








<div className="w-[500px]   ">
<h5 className=" mb-2  " >First Name *</h5>
<input type="texet" placeholder="Samantha" className=" h-9 rounded-md w-full inputs  "/>



<h5 className=" mt-3  " >Email *</h5>
<input type="texet" placeholder="Email@mail.com" className=" h-9 rounded-md w-full inputs  "/>

<h5 className=" mt-3  " >Address *</h5>
<input type="texet" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
className=" h-44 rounded-md w-full inputs  "/>
  <small className="ml-[420px] ">0/2000</small>


  <h5 className=" mb-[10px]  " >Date of Birth *</h5>
<input type="texet" placeholder="Email@mail.com" className=" h-9 rounded-md w-full inputs  "/>
</div>







<div className=" w-[500px]  ">

<h5 className="   " >Last Name *</h5>
<input type="texet" placeholder="William" className=" h-9 rounded-md w-full inputs  "/>



<h5 className=" mt-3   " >Phone *</h5>
<input type="texet" placeholder="+1234567890" className=" h-9 mb-3 rounded-md w-full inputs  "/>


<h4 className=" mb-1" >Photo *</h4>
<input placeholder="  Drag and drop or 
click " className=" h-44 inputs  "/>



<h5 className=" mt-[27px] " >Place of Birth *</h5>
<input type="texet" placeholder="Mana William" className=" h-9 rounded-md w-full inputs  "/>
</div>








</div>




{/* *************************** */}










<div className=" w-full h-14 mt-4 rounded-t-2xl " style={{ color:them.blackColor,background:them.button }} >
<h4 className="  pt-2 pl-9 ">Education</h4>
</div>







{/* --------------------------- */}
<div className=" w-full h-[250px] flex gap-6 px-6 pt-7 " style={{ color:them.fontColor,background:them.Navsheet }} >



<div className="w-[500px]    ">

<h5 className=" mb-4  " >University *</h5>
<input type="texet" placeholder="University Akademi Historia" className=" h-9 rounded-md w-full inputs  "/>


<h5 className=" mt-4  " >Start & End Date *</h5>
<div className=" flex justify-between" >
<input type="texet" placeholder="September 2013" className=" h-9 rounded-md  w-[245px] inputs  "/>
<input type="texet" placeholder="September 2017" className=" h-9 rounded-md  w-[245px] inputs  "/>
</div>



</div>







<div className=" w-[500px]  ">

<h5 className=" mb-4  " >Degree *</h5>
<input type="texet" placeholder="History Major" className=" h-9 rounded-md w-full inputs  "/>





<h5 className=" mt-4  " >City *</h5>
<input type="texet" placeholder="Yogyakarta, Indonesia" className=" h-9 rounded-md w-full inputs  "/>

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

export default AddTeacher