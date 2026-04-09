import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";
import {MENU_TYPE, NAMHAE_AREA, NAMHAE_BARAE, PAGE_TYPE} from "@/data/const/const.js";
import {useEffect, useState} from "react";
import {useKiosk} from "@/store/kioskZustand.jsx";
import TourPage from "@/component/new/common/page/third/tour/tourPage.jsx";
import QuickBtn from "@/component/new/common/btn/third/quickBtn.jsx";
import MenuBtn from "@/component/new/common/btn/third/menuBtn.jsx";
import BaraePage from "@/component/new/common/page/third/barae/baraePage.jsx";

const ThirdPage = ({isCreate, isShow}) => {

    const [activeMenu, setActiveMenu] = useState(MENU_TYPE.TOUR);
    const [activeArea, setActiveArea] = useState(NAMHAE_AREA.NONE);
    const [activeBarae, setActiveBarae] = useState(NAMHAE_BARAE.NONE);


    const {
        activeThirdMenu,
        setActivePage,
        selectTourArea,
        setSelectTourArea,
        selectBarae,
        setActiveThirdMenu
    } = useKiosk(useShallow((state) => ({
        activeThirdMenu: state.activeThirdMenu,
        setActivePage: state.actions.setActivePage,
        selectTourArea: state.selectTourArea,
        setSelectTourArea: state.actions.setSelectTourArea,
        selectBarae: state.selectBarae,
        setActiveThirdMenu : state.actions.setActiveThirdMenu
    })))

    const {
        activeThirdCreateMenu,
        setActiveCreatePage,
        selectTourCreateArea,
        setSelectTourCreateArea,
        selectCreateBarae,
        setActiveThirdCreateMenu
    } = useCreate(useShallow((state) => ({
        activeThirdCreateMenu: state.activeThirdMenu,
        setActiveCreatePage: state.actions.setActivePage,
        selectTourCreateArea: state.selectTourArea,
        setSelectTourCreateArea: state.actions.setSelectTourArea,
        selectCreateBarae: state.selectBarae,
        setActiveThirdCreateMenu : state.actions.setActiveThirdMenu,
    })))

    useEffect(() => {
        if (isCreate) {
            setActiveArea(selectTourCreateArea)
        } else {
            setActiveArea(selectTourArea)
        }
    }, [isCreate, selectTourCreateArea, selectTourArea])


    useEffect(() => {
        if (isCreate) {
            setActiveMenu(activeThirdCreateMenu)
        } else {
            setActiveMenu(activeThirdMenu)
        }
    }, [isCreate, activeThirdCreateMenu, activeThirdMenu]);

    useEffect(() => {
        if (isCreate) {
            setActiveBarae(selectCreateBarae)
        } else {
            setActiveBarae(selectBarae)
        }
    }, [isCreate, selectBarae, selectCreateBarae]);



    const handleBackBtn = () => {
        if (isCreate) {
            setSelectTourCreateArea(NAMHAE_AREA.NONE);
            setActiveCreatePage(PAGE_TYPE.START);
            setActiveThirdCreateMenu(MENU_TYPE.TOUR);

        } else {
            setSelectTourArea(NAMHAE_AREA.NONE)
            setActivePage(PAGE_TYPE.START)
            setActiveThirdMenu(MENU_TYPE.TOUR);
        }
    }


    return (
        <section className={`screen main`}>
            <button type="button" className="btn-back" onPointerDown={() => {
                handleBackBtn()
            }}>대기화면으로 돌아가기
            </button>
            <TourPage isCreate={isCreate} activeArea={activeArea} activeMenu={activeMenu}/>
            <BaraePage isCreate={isCreate} activeMenu={activeMenu} activeBarae={activeBarae}/>
            <MenuBtn isCreate={isCreate} isShow={isShow}/>
            <QuickBtn isCreate={isCreate}/>
        </section>
    )

}

export default ThirdPage