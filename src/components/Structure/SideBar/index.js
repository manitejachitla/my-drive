import './styles.less'
import dashoard from '../../../img/sidebar/dashboard.svg'
import allfiles from '../../../img/sidebar/all_files.svg'
import shared from '../../../img/sidebar/shared.svg'
import fav from '../../../img/sidebar/fav.svg'
import recent from '../../../img/sidebar/rcenet.svg'
import scale from '../../../img/sidebar/Scale.svg'
import File from '../../../img/sidebar/File.svg'
import signedFile from '../../../img/sidebar/Signed-File.svg'
import camera from '../../../img/sidebar/Camera.svg'
import videoCamera from '../../../img/sidebar/Video-camera.svg'
import {useLocation, useNavigate} from "react-router-dom";
import {getSize} from "../../imports/logic";
const SideBar = ({storage}) => {
    const navigate=useNavigate()
    const location=useLocation()
    const sidebarItems=[
        {name:'Dashboard',icon:dashoard,path:'/'},
        {name:'All Files',icon:allfiles,path:'/all_files'},
        {name:'Shared',icon:shared,path:'/shared'},
        {name:'Favorites',icon:fav,path:'/starred'},
        {name:'Recent',icon:recent,path:'/recent'},
        {name:'Request',icon:scale,path:'/requested'},
    ]
    const sidebarItems2=[
        {name:'Pictures',icon:camera,path:'/pictures'},
        {name:'Videos',icon:videoCamera,path:'/videos'},
        {name:'Documents',icon:File,path:'/documents'},
        {name:'Signed',icon:signedFile,path:'/signed'},
    ]
    const onSideBarClick = (item) => {
      navigate(item.path)
    }
    let usage=(storage.usage/storage.limit)*100
    return (
        <div className="md_sidebar_cont">
            <div className="md_sb_icon_cont">
                <div className="nav_cont">
                    {
                        sidebarItems.map(item=>(
                            <div className={`md_sb_each_icon ${item.name==='Dashboard'?"md_sb_active_icon":""}`} onClick={()=>onSideBarClick(item)}>
                                <div className="icon_back">
                                    <img src={item.icon} alt=""/>
                                </div>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="file_type_cont">
                    {
                        sidebarItems2.map(item=>(
                            <div className={`md_sb_each_icon ${item.name==='Dashboard'?"md_sb_active_icon":""}`} onClick={()=>onSideBarClick(item)}>
                                <div className="icon_back">
                                    <img src={item.icon} alt=""/>
                                </div>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="md_sb_space_cont">
                <div className="usage_cont">
                    <p>{getSize(storage.usage,'GB')} Used</p>
                    <p>{usage.toFixed(2)}% used - {getSize(storage.usageInDrive,'GB')} free</p>
                    <div className="usage_bar">
                        <div className={'background'} style={{width:`${parseInt(usage)}%`}}/>
                    </div>
                </div>
                <button>Add More Space</button>
            </div>
        </div>
    )
}
export default SideBar;