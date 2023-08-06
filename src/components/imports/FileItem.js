import {getModifedDate, getSize} from "./logic";
import Folder from "./Folder";
import folder3 from '../../img/folder3.svg'
import {useLocation, useNavigate} from "react-router-dom";


const FileItem = ({item,type}) => {
    const location=useLocation()
    const navigate=useNavigate()
    let isFolder=item.mimeType==='application/vnd.google-apps.folder'
    const handleItemClick=()=>{
        if (isFolder){
            navigate('/folder/'+item.id)
        } else {
            let url='https://drive.google.com/file/d/'+item.id
            window.open(url,'_blank')
        }
    }
  return(
      <>
          {
              type==='list'?(
                  <div className={'each_file_item'}>
                      {
                          item.thumbnailLink?(
                              <img src={item.thumbnailLink} alt=""/>
                          ):""
                      }
                      <div className="name_cont">
                          <p className="name">{item.name}</p>
                          <p className="created">{getModifedDate(item.createdTime)}</p>
                      </div>
                      <p className={'size'}>{getSize(item.size)}</p>
                  </div>
              ):(
                  <div className={`each_quick_item ${isFolder?'each_quick_folder':''}`} key={item.id} onClick={handleItemClick}>
                      {
                          (item.thumbnailLink || isFolder)?(
                              <img className={isFolder?'folder_img':''} src={isFolder?folder3:item.thumbnailLink} alt=""/>
                          ):""
                      }
                      <div className="file_details_cont">
                          {
                              isFolder?(
                                  <>
                                      <p><span>{item.name.split('.')[0]}</span>{item.name.split('.')[1]?"."+item.name.split('.')[1].toLowerCase():""}</p>
                                  </>
                              ):(
                                  <>
                                      <img src={item.iconLink} alt=""/>
                                      <p><span>{item.name.split('.')[0]}</span>{item.name.split('.')[1]?"."+item.name.split('.')[1].toLowerCase():""}</p>
                                  </>
                              )
                          }
                      </div>
                  </div>
              )
          }
      </>
  )
}
export default FileItem;