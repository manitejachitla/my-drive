import './login.less'
import loginImg from '../../img/login.svg'
import google from '../../img/google.png'
import google2 from '../../img/google2.svg'
import Axios from "../../config/Axios";
import { useSearchParams,useNavigate} from "react-router-dom";
import {useEffect} from "react";
const LoginPage=({setUser})=>{
    let navigate = useNavigate();
    const [searchParams]=useSearchParams()
    const code = searchParams.get('code');
    const connectGoogle=()=>{
        Axios.get('/auth').then(res=>{
            if (res?.data?.url){
                window.location.href=res.data.url
            }
            if (res?.data?.status==='success'){
                setUser(true)
                navigate('/')
            }
            // setDrive(res.data.list)
        })
    }

    useEffect(() => {
        if (code && code!==""){
            Axios.get('/google/auth?code='+code).then(res=>{
                if (res?.data?.status==='success'){
                    setUser(true)
                    navigate('/')
                }
                // setDrive(res.data.list)
            })
        }else {
            Axios.get('/delete/token').then(res=>{
            })
        }
    }, []);
    return (
        <div className="login_main_cont df">
            <div className="login_content_cont df">
                <div className="login_left_cont df">
                    <p className={'heading'}>Welcome to My Cloud</p>
                    <p className={'sub_heading'}>Re-Designed File Manager</p>
                    <button onClick={connectGoogle}><img src={google2} alt=""/>Connect Google Drive</button>
                </div>
                <div className="login_right_cont">
                    <img src={loginImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;