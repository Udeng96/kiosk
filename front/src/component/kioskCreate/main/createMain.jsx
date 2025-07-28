import {MAIN_TYPE, NAMHAE_AREA, NAMHAE_BARAE, PAGE_TYPE, TOUR_MODAL_NONE} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";
import QuickBtn from "@/component/kioskCreate/main/menu/quickBtn.jsx";
import SubMenuBtn from "@/component/kioskCreate/main/menu/subMenuBtn.jsx";
import Tour from "@/component/kioskCreate/main/page/tour/tour.jsx";
import Barae from "@/component/kioskCreate/main/page/barae/barae.jsx";

const CreateMain = () => {

    const{activePage, setActivePage, setActiveMainType, setActiveTourArea, setActiveTourPlace, setActiveBaraeArea} = useCreate(useShallow((state)=> ({
        activePage: state.activePage,
        setActivePage: state.actions.setActivePage,
        setActiveMainType: state.actions.setActiveMainMenu,
        setActiveTourArea: state.actions.setActiveTourArea,
        setActiveTourPlace: state.actions.setActiveTourPlace,
        setActiveBaraeArea: state.actions.setActiveBaraeArea
    })))

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
            <SubMenuBtn/>
            <Tour/>
            <Barae/>
        </section>
    )

}

export default CreateMain