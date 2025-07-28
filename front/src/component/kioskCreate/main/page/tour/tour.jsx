import {MAIN_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import TourFrame from "@/component/kioskCreate/main/page/tour/tourFrame.jsx";
import TourMenu from "@/component/kioskCreate/main/page/tour/tourMenu.jsx";

const Tour = () => {

    const activeMainMenu = useCreate((state)=> state.activeMainMenu);
    return(
        <section className={`tour tab__item ${activeMainMenu === MAIN_TYPE.TOUR ? 'active' : ''}`}>
            <TourFrame/>
            <TourMenu/>
        </section>
    )

}

export default Tour