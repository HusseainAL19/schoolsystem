import { useAppSelector } from "@/publicStore/store/store";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import PrintIcon from '@mui/icons-material/Print';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
 function Intuition() {
  const them = useAppSelector((state) => state.theme.colors);
  return (
  <div>
    
    <div style={{ color:them.fontColor , background:them.Navsheet }} className="   mt-4 h-24 w-full">
      <div className=" container px-10  ">
    <h4 className=" pt-8">Unpaid Student Intuition</h4>
 </div>



      </div>



      <div style={{ color:them.fontColor , background:them.Darkblue }} className="   h-[340px] w-full">


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
  )
}

export default Intuition








