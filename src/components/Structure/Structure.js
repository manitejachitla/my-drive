import './styles.less'
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import Content from "./MainContent/Content";
const Structure = () => {
  return (
      <div className="md_main_struct_cont">
        <Navbar/>
        <div className="md_main_cont">
          <SideBar/>
            <Content/>
        </div>
      </div>
  )
}
export default Structure;