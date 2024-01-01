import './styles.less'
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import Content from "./MainContent/Content";
import {useEffect, useState} from "react";
import Axios from "../../config/Axios";
const Structure = () => {
    const [drive,setDrive]=useState(null)
    useEffect(() => {
        Axios.get('/get_drive').then(res=>{
            // console.log(res.data)
            if (res?.data?.list){
                setDrive(res.data.list)
            }
        })
    }, []);
  return (
      <div className="md_main_struct_cont">
          {
              drive?(
                  <>
                      <Navbar user={drive.user}/>
                      <div className="md_main_cont">
                          <SideBar storage={drive.storageQuota}/>
                          <Content/>
                      </div>
                  </>
              ):""
          }
      </div>
  )
}
export default Structure;