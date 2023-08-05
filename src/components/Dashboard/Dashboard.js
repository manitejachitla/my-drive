import Folder from "../imports/Folder";
import './styles.less'
import {getSize,getModifedDate} from "../imports/logic";
import folder1 from '../../img/folder1.svg'
import folder from '../../img/folder.svg'
import pdf from '../../img/pdf icon.svg'
import folder2 from '../../img/folder2.svg'
import folder3 from '../../img/folder3.svg'
import folder4 from '../../img/folder4.svg'
import Axios from "../../config/Axios";
import {useEffect, useState} from "react";
import FileList from "../imports/FileList";
const Dashboard = () => {
    const [quick,setQuick]=useState(null)
    const [recent,setRecent]=useState(null)
    const [files,setFiles]=useState(null)
    useEffect(() => {
        let getData=async ()=>{
            let data=await Axios.get('/quick_access')
            let data2=await Axios.get('/recent')
            let data3=await Axios.get('/file_manager')
            // let data3=await Axios.get('https://docs.google.com/feeds/vt?gd=true&id=1k6nhXEBlp8P3DVeop4DBQAGS-RTzQmdv5VtevzKUrqA&v=1&s=AMedNnoAAAAAZMlsmvCJBAvbSWekl-ey0F_mltyIteuE&sz=s220')
            setQuick(data.data.data)
            setRecent(data2.data.data)
            setFiles(data3.data)
        }
        getData()
    }, []);

    const folders=[
        {title:'Design',size:'12',files:23,img:folder1,color:'#F6F5FF',shadow:'rgba(158,160,249,0.07)'},
        {title:'Documents',size:'12',files:23,img:folder2,color:'#F5FFFC',shadow:'rgba(103,207,236,0.07)'},
        {title:'Music',size:'12',files:230,img:folder3,color:'#FFF9F0',shadow:'rgba(253,131,66,0.07)'},
        {title:'Images',size:'12',files:170,img:folder4,color:'#FFF5F5',shadow:'rgba(255,125,125,0.07)'},
    ]
  return (
      <div className={'md_dashboard_cont'}>
          <div className="md_db_folder_cont">
              {
                  folders.map(item=>
                  <Folder folder={item}/>
                  )
              }
          </div>
          <div className="md_db_quick_cont">
              <FileList files={quick} title={'Quick Access'}/>
          </div>
          <div className="md_db_files_cont">
              <div className="md_db_recent_cont">
                  <FileList files={recent} title={'Recently Uploaded'} type={"list"}/>
              </div>
              <div className="md_db_manager_cont">
                  <p className={'md_db_title'}>File Manager</p>
                  <div className="files_cont">
                      {
                          files?(
                              files.map(item=>
                                  <div className={'each_file'}>
                                      <img src={item.mimeType==='application/vnd.google-apps.folder'?folder:pdf} alt=""/>
                                          <p className="name">{item.name}</p>
                                          <p className="created">created on {getModifedDate(item.createdTime)}</p>
                                  </div>
                              )
                          ):""
                      }
                  </div>

              </div>
          </div>
      </div>
  )
}
export default Dashboard