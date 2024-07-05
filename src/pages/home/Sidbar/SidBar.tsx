
import './SidBar.css'
import { useAppSelector } from '@/publicStore/store/store';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CelebrationIcon from '@mui/icons-material/Celebration';
export default function SidBar() {
  const them = useAppSelector((state) => state.theme.colors);
    const Arr=[

      {name:'Dashboard',icon:<HomeIcon/>,path:""},
      {name:'Students',icon:<PermIdentityIcon/>,path:""},
      {name:'Teachers',icon:<PermIdentityIcon/>,path:""},
      {name:'Event',icon:   <MailIcon/>,path:""},
      {name:'Finance',icon:   <MailIcon/>,path:""},    
      {name:'User',icon:   <MailIcon/>,path:""},
      {name:'Chat',icon:   <QuestionAnswerIcon/>,path:""},
      {name:'Lastest Activity',icon:   <CelebrationIcon/>,path:""},
      {name:'Advertisements',icon:   <CelebrationIcon/>,path:""}
    ]
  
  return (
  <div className='main'>
    
      <div className='Sidbar' style={{ background:them.SidBar}}>
        <div className='hed'>

        <h4  className='h44' style={{textAlign:"center",marginRight:10, width:30,height:30, background:them.OrngColor, color:them.fontColor }}>A</h4>
        <h4  style={{ color:them.fontColor }}>NXA.PROJECT</h4>
         
        </div>

{Arr.map((e,i)=>{
  return(
    <div  className='contentSidbar'>
    <div className='icon' style={{ color:them.SidBarfont,paddingRight:15 }}>
     {e.icon}
    </div>
  <p style={{ color:them.SidBarfont }}>
    {e.name}
  </p>
  </div>
  )
})}

<div  style={{ color:them.fontColor }}>
<p  style={{   fontSize:12,fontWeight:"bold",marginLeft:15,marginTop:15}}>
Akademi - School Admission Dashboard
Made with ♥ by Peterdraw
</p>

</div>



</div>





  </div>

  )
}
