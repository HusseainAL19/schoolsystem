import { useAppSelector } from "@/publicStore/store/store";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideocamIcon from '@mui/icons-material/Videocam';
import "../home/style.css"
import SidBar from "../home/Sidbar/SidBar";
import "./style.css"
export default function Chat() {
    
    const them = useAppSelector((state) => state.theme.colors);
    const Arr=[them.OrngColor,them.ylawoColor,them.greenColor]
  return (
    <div className=" flex">
    <SidBar/>
    <div  className="px-8 mt-[37px]" style={{ color:them.fontColor, width:1250  }}>
    
<div className=" flex justify-between ">
    <h3>Chat</h3>
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


{/* ---------------------- */}
<div style={{ background:them.Navsheet,marginTop:24,display:"flex" ,height:660 }} >

<div className=" w-1/3 px-6">

<h4 className=" mt-2">Messages</h4>

<form>
<input  className=" h-8 w-full rounded-full p-3" id="serch" placeholder="serch........"/>
</form>

<p className=" mt-6">Groups</p>


{Arr.map((e)=>{
  return(
    <>
  <div style={{ color:them.gray }} className='  flex mt-3 w-full mx-auto'>
    <p style={{ background:e}} className=' rounded-full w-8 h-8  text-center  '/>
    <div className='   flex gap-28 '>
    <small className=' pl-2' >Samantha William<br/>Lorem ipsumdolor  </small> 
    <small className=' pl-3'>12:45 PM
    <p style={{ background:them.OrngColor ,color:them.blackColor}} className=' rounded-full w-5 h-5 ml-9   text-center  '>1</p> 
        </small> 
   
    </div>
    </div>
    <div style={{ background:them.purpleColor }} className='w-full h-[1px] mx-auto'/>
    </>
    )
})}


<p className=" mt-3">Chats</p>

{[1,2,3].map((e)=>{
  return(
    <>
  <div style={{ color:them.gray }} className='  flex mt-3 w-full mx-auto'>
    <p style={{ background:them.purpleColor}} className=' rounded-full w-8 h-8  text-center  '/>
    <div className='   flex gap-28 '>
    <small className=' pl-2' >Samantha William<br/>Lorem ipsumdolor  </small> 
    <small className=' pl-3'>12:45 PM
    <p style={{ background:them.OrngColor ,color:them.blackColor}} className=' rounded-full w-5 h-5 ml-9   text-center  '>1</p> 
        </small> 
   
    </div>
    </div>
    <div style={{ background:them.purpleColor }} className='w-full h-[1px] mx-auto'/>
    </>
    )
})}

</div>




<div style={{ background:them.purpleColor }} className=" h-full  w-[1px]"></div>
{/* -------------الخط-- */}



{/* ------------ */}
<div className="">

<div  className="px-4 flex  w-[790px] justify-between ">

<div className=" flex pt-3 gap-2 ">
<h4 style={{ background:them.purpleColor}} className=' rounded-full w-12 h-12  text-center  '/>

<h5>
    Samantha WIlliam<br/>
    <small className=" flex gap-1  ">
        <div style={{ background:them.greenColor}} className=' rounded-full w-3 h-3 mt-[5px] text-center  '/>
         Online
         </small>
   

</h5>


</div>



<div>
<button className=' rounded-full p-1 relative m-4    left-14' style={{ background:them.card,color:them.fontColor  }}><VideocamIcon /> </button>
<button className=' rounded-full p-1 relative m-4   left-6 ' style={{ background:them.card,color:them.fontColor  }}><MoreHorizIcon /> </button>

</div>


</div>
{/* ------------ */}
<div style={{ background:them.purpleColor }} className=" w-full  h-[1px]"></div> 
{/* ------------ */}



<div  className=" w-full  h-[490px]  px-3 pt-4">
    <p style={{ background:them.button }} className="w-32 text-center h-11 rounded-2xl pt-2" >Hello Nabila!</p>
    <p style={{ background:them.button }} className="ss1 w-80 text-center h-11 pt-2 " >Can i see your history lesson homework? </p>
 <p style={{ color:them.button }}>12:45 PM</p>


 <div className="pl-[450px]">


 <p style={{ background:them.button }} className="w-32 text-center h-11 rounded-2xl pt-2 ml-48" >Hello Nabila!</p>
    <p style={{ background:them.button }} className="ss2 w-80 text-center h-16 pt-2 " >I’m not finished yet
        , why don’t work 
    together to finish homework? </p>

 <p className="ml-[250px]" style={{ color:them.button }}>12:45 PM</p>

 </div>

</div>





<div style={{ background:them.purpleColor }} className=" w-full  h-[1px]"></div> 
{/* jjjjjjjjj */}


<input style={{ background:them.Navsheet }}  type="texet" placeholder="  Write your message..." className="  relative h-14 mt-3 ml-28 rounded-full w-3/4 ints  "/>




<button style={{ background:them.button }}  className=" flex gap-1 absolute top-[707px]  left-[1280px] rounded-full ">
  <small>Send</small>
  <SendOutlinedIcon/>
</button>



















</div>

</div>










</div>  
</div>
  )
}
