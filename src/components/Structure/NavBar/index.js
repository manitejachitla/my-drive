import './styles.less'
import m_icon from '../../../img/m_icon.svg'
import searchicon from '../../../img/search_icon.svg'
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
const Navbar = ({user}) => {
    const location=useLocation()
    const navigate=useNavigate()
    const [search,setSearch]=useState('')
    useEffect(() => {
        const getData = setTimeout(async () => {
            if (search && search!==''){
                navigate('/search/'+search)
            }
        }, 1000)
        return () => clearTimeout(getData)
    }, [search]);
    return (
        <div className="md_nav_main_cont">
            <div className="app_name">
                <img src={m_icon} alt=""/>
                <h2>My Cloud</h2>
            </div>
            <div className="search_cont">
                <img src={searchicon} alt="" />
                <input type="text" placeholder={'Search Files'} value={search} onChange={e=>setSearch(e.target.value)}/>
            </div>
            <div className="user_cont">
                {
                    user?(
                        <>
                            <img src={user.photoLink} alt=""/>
                            <div className="name_cont">
                                <p>{user.displayName}</p>
                                <p>{user.emailAddress}</p>
                            </div>
                        </>
                    ):""
                }

            </div>
        </div>
    )
}
export default Navbar;