import './styles.less'
import Navbar from "./NavBar";
import SideBar from "./SideBar";
const Structure = () => {
  return (
      <div className="md_main_struct_cont">
        <Navbar/>
        <div className="md_main_cont">
          <SideBar/>
          <div className="md_main_content_cont">
            <h2>Structure</h2>
          </div>
        </div>
      </div>
  )
}
export default Structure;