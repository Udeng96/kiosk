import {useCreate} from "@/store/createZustand.jsx";
import {PAGE_TYPE} from "@/data/const/const.js";

const MenuTour = () => {
    const setActivePage = useCreate().actions.setActivePage;
    return(
        <div className="intro-frame" onClick={()=>setActivePage(PAGE_TYPE.MAIN)}>
            <p>관광지 정보<br/>바로가기</p>
        </div>
    )
}

export default MenuTour