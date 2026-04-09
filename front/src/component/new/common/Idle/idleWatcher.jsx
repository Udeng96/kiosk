import {useEffect, useRef} from "react";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {
    BUS_TYPE, CHANGSENG_TYPE,
    FF_VILLAGE_LIST,
    MENU_TYPE,
    MODAL_TYPE,
    NAMHAE_AREA, NAMHAE_BARAE,
    PAGE_TYPE, TOUR_MODAL_NONE, TWELVE_ITEM_NONE,
    WEB_TYPE
} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";


const IdleWatcher = ({ timeout}) => {
    const timerRef = useRef(null);
    const {setActiveCreatePage, setActiveCreateModal, setSelectCreateModalVillage, setSelectCreateModalBus, setActiveCreateWeb, setSelectThirdMenu, setSelectTourCreateArea, setSelectTourCreatePlace, setSelectCreateBarae, setSelectCreateModalTour, setSelectCreateModalChangseng} = useCreate(useShallow((state)=>({
        setActiveCreatePage : state.actions.setActivePage,
        setActiveCreateModal : state.actions.setActiveModal,
        setSelectCreateModalVillage : state.actions.setSelectModalVillage,
        setSelectCreateModalBus : state.actions.setSelectModalBus,
        setActiveCreateWeb : state.actions.setActiveWeb,
        setSelectThirdMenu : state.actions.setActiveThirdMenu,
        setSelectTourCreateArea : state.actions.setSelectTourArea,
        setSelectTourCreatePlace : state.actions.setSelectTourPlace,
        setSelectCreateBarae : state.actions.setSelectBarae,
        setSelectCreateModalTour : state.actions.setSelectModalTour,
        setSelectCreateModalChangseng : state.actions.setSelectModalChangseng

    })))
    const {setActivePage,setActiveModal, setSelectModalVillage, setSelectModalBus,setActiveWeb,setActiveThirdMenu, setSelectTourArea, setSelectTourPlace, setSelectBarae, setSelectModalTour} = useKiosk(useShallow((state)=> ({
        setActivePage : state.actions.setActivePage,
        setActiveModal : state.actions.setActiveModal,
        setSelectModalVillage : state.actions.setSelectModalVillage,
        setSelectModalBus : state.actions.setSelectModalBus,
        setActiveWeb : state.actions.setActiveWeb,
        setActiveThirdMenu : state.actions.setActiveThirdMenu,
        setSelectTourArea : state.actions.setSelectTourArea,
        setSelectTourPlace : state.actions.setSelectTourPlace,
        setSelectBarae : state.actions.setSelectBarae,
        setSelectModalTour : state.actions.setSelectModalTour,

    })));
    const pathName = window.location.pathname;
    useEffect(() => {
        const resetTimer = () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(()=>{
                if(pathName.includes("create")){
                    setActiveCreatePage(PAGE_TYPE.START);
                    setActiveCreateModal(MODAL_TYPE.NONE)
                    setSelectCreateModalBus(BUS_TYPE.PUBLIC)
                    setSelectCreateModalVillage(FF_VILLAGE_LIST[0])
                    setActiveCreateWeb(WEB_TYPE.NONE);
                    setSelectThirdMenu(MENU_TYPE.TOUR);
                    setSelectTourCreateArea(NAMHAE_AREA.NONE);
                    setSelectTourCreatePlace(TOUR_MODAL_NONE);
                    setSelectCreateBarae(NAMHAE_BARAE.NONE);
                    setSelectCreateModalTour(TWELVE_ITEM_NONE);
                    setSelectCreateModalChangseng(CHANGSENG_TYPE.FIRST);

                }else{
                    setActivePage(PAGE_TYPE.START);
                    setActiveModal(MODAL_TYPE.NONE)
                    setSelectModalBus(BUS_TYPE.PUBLIC)
                    setSelectModalVillage(FF_VILLAGE_LIST[0])
                    setActiveWeb(WEB_TYPE.NONE);
                    setActiveThirdMenu(MENU_TYPE.TOUR);
                    setSelectTourArea(NAMHAE_AREA.NONE);
                    setSelectTourPlace(TOUR_MODAL_NONE);
                    setSelectBarae(NAMHAE_BARAE.NONE);
                    setSelectModalTour(TWELVE_ITEM_NONE);

                }
            }, timeout);
        };

        const events = ["click", "touchstart", "mousemove", "keydown", "scroll"];
        events.forEach((event) => window.addEventListener(event, resetTimer));

        resetTimer(); // 초기 시작

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            events.forEach((event) => window.removeEventListener(event, resetTimer));
        };
    }, [timeout]);

    return null; // 화면에 표시할 필요 없음

}

export default IdleWatcher