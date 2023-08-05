import './common.less'
import dotsImg from '../../img/dots.svg'
const Folder = ({folder}) => {
    return (
        <div className={'md_db_each_folder'} style={{background:folder.color}}>
            <div className="folder_shadow" style={{boxShadow:`0 80px 100px ${folder.shadow}`}}/>
            <div className="img_cont">
                <img src={folder.img} className={'folder_img'} alt=""/>
                <img src={dotsImg} className={'dots_img'} alt=""/>
            </div>
            <h2>{folder.title}</h2>
            <div className="details_cont">
                <p>{folder.files} Files</p>
                <p>{folder.size} GB</p>
            </div>
        </div>
    )
}
export default Folder;