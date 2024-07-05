import { useAppSelector } from "@/publicStore/store/store";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default function Content() {
    const them = useAppSelector((state) => state.theme.colors);
  return (
    <div  >
        {/*  الطول*/}
        {[2].map((e)=>{
            return(
                <div className=" mt-4 flex  gap-4 px-2">



{[1,2,3,4,5].map((e)=>{
    return(
        <div style={{ background:them.card   }} className=" text-center w-1/2 h-60 ">
            <button className=' rounded-full p-0 relative  left-20 ' style={{ background:them.card,color:them.fontColor  }}><MoreHorizIcon /> </button>
        <h4 style={{ background:them.purpleColor}} className=' rounded-full w-16 h-16 mx-auto   text-center  '/>
        
        
        
        <p className=' pt-9 ' >Mathematics</p>
        
        <div className=" flex justify-center gap-4">
        <button className=' rounded-full p-0 ' style={{ background:them.card,color:them.fontColor  }}><LocalPhoneIcon /> </button>
        <button className=' rounded-full p-0 ' style={{ background:them.card,color:them.fontColor  }}><MailOutlineIcon /> </button>
        </div>
        </div>
    )
})}

    
              
                
                
       
                </div>
            )
        })}





    </div>
  )
}
