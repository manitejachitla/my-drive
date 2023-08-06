import FileItem from "./FileItem";
import {useEffect, useState} from "react";
import Axios from "../../config/Axios";
import {useLocation, useParams} from "react-router-dom";

const FileList = ({files,title,type,page}) => {
    const [renderFiles,setRenderFiles]=useState(files)
    const {id}=useParams()
    const location=useLocation()
    console.log(id,location)
    useEffect(() => {
        if ((!files || !Array.isArray(files)) && page){
            let url=`custom/${page}/100`
            if (id && location.pathname.includes('folder')){
                url=`custom/${page}/${id}`
            }
            Axios.get(url).then(res=>{
                setRenderFiles(res.data.data)
            })
        }else {
            setRenderFiles(files)
        }
    }, [files,id]);
  return(
      <div className="md_file_list_cont">
          {
              title?(
                  <p className={'md_fl_title'}>{title}</p>
              ):""
          }
          <div className={`files_cont ${type!=='list'?"files_cont_horizontal":""}`}>
              {
                  renderFiles && Array.isArray(renderFiles)?(
                      renderFiles.map(item=>
                          <>
                              <FileItem item={item} type={type} key={item.id}/>
                          </>
                      )
                  ):""
              }
          </div>

      </div>
  )
}
export default FileList;