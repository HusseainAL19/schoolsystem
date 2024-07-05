import { useAppSelector } from "@/publicStore/store/store";
import SidBar2 from "./Sidbar/SidBar2"
import Main from "./main/Main";
import SidBar from "./Sidbar/SidBar";


function Home() {

  return (
    <div style={{ display:"flex"}}>
        <SidBar/>
        <Main/>
        <SidBar2/>
    </div>
  )
}

export default Home