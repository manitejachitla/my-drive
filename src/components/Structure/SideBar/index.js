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
const SideBar = () => {
    const sidebarItems=[
        {name:'Dashboard',icon:dashoard,path:'/'},
        {name:'All Files',icon:allfiles,path:'/'},
        {name:'Shared',icon:shared,path:'/'},
        {name:'Favorites',icon:fav,path:'/'},
        {name:'Recent',icon:recent,path:'/'},
        {name:'Request',icon:scale,path:'/'},
    ]
    const sidebarItems2=[
        {name:'Pictures',icon:camera,path:'/'},
        {name:'Videos',icon:videoCamera,path:'/'},
        {name:'Documents',icon:File,path:'/'},
        {name:'Signed',icon:signedFile,path:'/'},
    ]
    return (
        <div className="md_sidebar_cont">
            <div className="md_sb_icon_cont">
                <div className="nav_cont">
                    {
                        sidebarItems.map(item=>(
                            <div className={`md_sb_each_icon ${item.name==='Dashboard'?"md_sb_active_icon":""}`}>
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
                            <div className={`md_sb_each_icon ${item.name==='Dashboard'?"md_sb_active_icon":""}`}>
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
                    <p>20.35 GB Used</p>
                    <p>69% used - 6.64 GB free</p>
                    <div className="usage_bar">
                        <div className={'background'} style={{width:'69%'}}/>
                    </div>
                </div>
                <button>Add More Space</button>
            </div>
        </div>
    )
}
export default SideBar;