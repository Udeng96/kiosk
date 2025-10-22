import {MENU_TYPE} from "@/data/const/const.js";
import TourItem from "@/component/new/common/page/third/tour/tourItem.jsx";
import TourMenu from "@/component/new/common/page/third/tour/tourMenu.jsx";

const TourPage = ({isCreate, activeMenu, activeArea}) => {

    return (
        <section className={`tour active tab__item ${activeMenu === MENU_TYPE.TOUR ? 'active' : ''}`}>
            <TourItem isCreate={isCreate} isShow={activeMenu === MENU_TYPE.TOUR} tourArea={activeArea} activeMenu={activeMenu}/>
            <TourMenu isCreate={isCreate} activeArea={activeArea}/>
        </section>
    )
}

export default TourPage