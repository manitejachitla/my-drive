import Dashboard from "../../Dashboard/Dashboard";
import './styles.less';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import FileList from "../../imports/FileList";
const Content = () => {
    const navigate=useNavigate()
    const location=useLocation()
  return(
      <div className="md_main_content_cont no_scroll_bar_cont">
          <Routes>
              <Route path={'/'} element={<Dashboard/>}/>
              <Route path={'/recent'} element={<FileList page={'recent'} key={'recent'} title={'Recent'}/>}/>
              <Route path={'/pictures'} element={<FileList page={'picture'} key={'picture'} title={'Pictures'}/>}/>
              <Route path={'/videos'} element={<FileList page={'video'} key={'video'} title={'Videos'}/>}/>
              <Route path={'/documents'} element={<FileList page={'document'} key={'document'} title={'Documents'}/>}/>
              <Route path={'/shared'} element={<FileList page={'shared'} key={'shared'} title={'Shared Files'}/>}/>
              <Route path={'/starred'} element={<FileList page={'starred'} key={'starred'} title={'Starred'}/>}/>
              <Route path={'/all_files'} element={<FileList page={'all_files'} key={'all_files'} title={'All Files'}/>}/>
              <Route path={'/folder/:id'} element={<FileList page={'folder'} key={'folder'} title={'Folder'}/>}/>
              <Route path={'/search/:search_key'} element={<FileList page={'search'} key={'search'} title={'Search Results'}/>}/>
          </Routes>
      </div>
  )
}
export default Content;