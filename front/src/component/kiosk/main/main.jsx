import QuickBtn from "@/component/kiosk/main/quick/quickBtn.jsx";
import SubMenu from "@/component/kiosk/main/menu/subMenu.jsx";
import Tour from "@/component/kiosk/main/page/tour/tour.jsx";
import Barae from "@/component/kiosk/main/page/barae/barae.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {MAIN_TYPE, NAMHAE_AREA, NAMHAE_BARAE, PAGE_TYPE, TOUR_MODAL_NONE} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";



const Main = () => {

    const {activePage, setActivePage, setActiveMainType, setActiveTourArea, setActiveTourPlace, setActiveBaraeArea} = useKiosk(useShallow((state)=> ({
        activePage: state.activePage,
        setActivePage: state.actions.setActivePage,
        setActiveMainType: state.actions.setActiveMainType,
        setActiveTourArea: state.actions.setActiveTourArea,
        setActiveTourPlace: state.actions.setActiveTourPlace,
        setActiveBaraeArea: state.actions.setActiveBaraeArea
    })));

    const handleBackBtn = () => {
        setActivePage(PAGE_TYPE.STANDBY);
        setActiveMainType(MAIN_TYPE.TOUR);
        setActiveBaraeArea(NAMHAE_BARAE.NONE);
        setActiveTourArea(NAMHAE_AREA.NONE);
        setActiveTourPlace(TOUR_MODAL_NONE);
    }
    return (
        <section className={`screen main ${activePage === PAGE_TYPE.MAIN ? '' : 'hidden'}`}>
            <button type="button" className="btn-back" onClick={()=>handleBackBtn()}>대기화면으로 돌아가기</button>
            <QuickBtn/>
            <SubMenu/>
            <Tour/>
            <Barae/>
        </section>
    )

}

export default Main