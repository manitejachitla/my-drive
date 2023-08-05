import {getModifedDate, getSize} from "./logic";

const FileList = ({files,title,type}) => {
  return(
      <div className="md_file_list_cont">
          {
              title?(
                  <p className={'md_fl_title'}>{title}</p>
              ):""
          }
          <div className={`files_cont ${type!=='list'?"files_cont_horizontal":""}`}>
              {
                  files && Array.isArray(files)?(
                      files.map(item=>
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
                                  <div className={'each_quick_item'} key={item.id}>
                                      {
                                          item.thumbnailLink?(
                                              <img src={item.thumbnailLink} alt=""/>
                                          ):""
                                      }
                                      <div className="file_details_cont">
                                          <img src={item.iconLink} alt=""/>
                                          <p><span>{item.name.split('.')[0]}</span>{item.name.split('.')[1]?"."+item.name.split('.')[1].toLowerCase():""}</p>
                                      </div>
                                  </div>
                              )
                          }
                          </>

                      )
                  ):""
              }
          </div>

      </div>
  )
}
export default FileList;