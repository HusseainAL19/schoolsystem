import { useAppSelector } from '@/publicStore/store/store';
import './SidBar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
function SidBar2() {
  const Arr=["Samantha William","Tony Soap","Karen Hope","Jordan Nico","Nadila Adja"]
    const them = useAppSelector((state) => state.theme.colors);
  return (
    <div className='main'>
    <div className='Sidba2 ' style={{ background:them.SidBar}}>
<div className='  mt-9 '>

<div className=' flex gap-6 justify-center'>
<h6 style={{ background:them.gray}} className=' rounded-full w-10 h-10 pt-2   text-center  '><NotificationsIcon/> </h6>
<h6 style={{ background:them.gray}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SettingsIcon/></h6>
 <h6 style={{  color:them.gray}}>Nabila A.<br/>Admin 
 </h6>
<h4 style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '></h4>
 
</div>
 
<div className=' ml-5     flex mt-3 '>
  <div>
  <h4 style={{  color:them.fontColor}}>Recent Students</h4>
  <p style={{  color:them.fontColor}}>You have 456 students</p>
  </div>
<h4 style={{ color:them.fontColor}} className='iconmass  rounded-full w-10 h-10 mt-2 ml-9   text-center'><AddIcon/></h4>

</div>







{Arr.map((e,i)=>{
    return(
      <div key={i} className='ml-6 w-[250px]  mt-4  flex'>
<p style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>
<p className=' pl-4'  style={{  color:them.gray}}> {e} <br/>Class VII A 
</p>
<div style={{ flexGrow:2 }} />
<h4 style={{ color:them.fontColor}} className='iconmass  rounded-full w-10 h-10    text-center'><EmailIcon/></h4>

</div> 
    )
  })}

<button  className=' rounded-full ml-8 w-64 h-11' style={{color:them.fontColor, background:them.button }}>
  <p>View More</p>
</button>



<h4 style={{  color:them.gray}} className='mt-4 pl-5 mb-8'>Messages</h4>



{[1,2,3,4,5].map((e)=>{
  return(
    <>
  <div style={{ color:them.gray }} className='  flex mt-3 w-64 mx-auto'>
    <p style={{ background:them.purpleColor}} className=' rounded-full w-8 h-8  text-center  '/>
    <div className='   flex gap-3 '>
    <h6 className=' pl-2' >Samantha William<br/>Lorem ipsumdolor  </h6> 
    <p>12:45 PM</p> 
    </div>
    </div>
    <div style={{ background:them.gray }} className='w-64 h-[1px] mx-auto'/>
    </>
    )
})}
<button  className=' rounded-full mt-4 ml-8 w-64 h-11' style={{color:them.fontColor, background:them.button }}>
  <p>View More</p>
</button>


























<div className=' mt-5 '>
<h5 className=' ml-3' style={{ color:them.fontColor }}>Current Foods Menu</h5>

<div style={{background:them.purpleColor }} className=' rounded-2xl mt-4 ml-8  w-60 h-32'/>
<h6 className=' ml-3 mt-4' style={{ color:them.fontColor }}>Beef Steak with Fried Potato <br/>Lorem ipsum dolor sit amet... </h6>



<div style={{background:them.purpleColor }} className=' rounded-2xl mt-4 ml-8  w-60 h-32'/>
<h6 className=' ml-3 mt-4' style={{ color:them.fontColor }}>Beef Steak with Fried Potato <br/>Lorem ipsum dolor sit amet... </h6>



<div style={{background:them.purpleColor }} className=' rounded-2xl mt-4 ml-8  w-60 h-32'/>
<h6 className=' ml-3 mt-4' style={{ color:them.fontColor }}>Beef Steak with Fried Potato <br/>Lorem ipsum dolor sit amet... </h6>




<button  className=' rounded-full mt-3 ml-8 w-60 h-11' style={{color:them.fontColor, background:them.button }}>
  <p>View More</p>
</button>


</div>










</div>

</div>





</div>

  )
}

export default SidBar2