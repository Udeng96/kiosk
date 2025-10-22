import {useEffect, useState} from "react";
import {MENU_TYPE, NAMHAE_AREA, NAMHAE_BARAE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";

const   MenuBtn = ({isCreate, isShow}) => {

    const [activeMenu, setActiveMenu] = useState(MENU_TYPE.TOUR);
    const {activeThirdCreateMenu, setActiveThirdCreateMenu, setSelectTourCreateArea, setSelectCreateBarae} = useCreate(useShallow((state)=> ({
        activeThirdCreateMenu : state.activeThirdMenu,
        setActiveThirdCreateMenu : state.actions.setActiveThirdMenu,
        setSelectTourCreateArea : state.actions.setSelectTourArea,
        setSelectCreateBarae : state.actions.setSelectBarae
    })))

    const {activeThirdMenu, setActiveThirdMenu, setSelectTourArea, setSelectBarae} = useKiosk(useShallow((state)=> ({
        activeThirdMenu : state.activeThirdMenu,
        setActiveThirdMenu : state.actions.setActiveThirdMenu,
        setSelectTourArea : state.actions.setSelectTourArea,
        setSelectBarae : state.actions.setSelectBarae
    })))

    useEffect(() => {
        if(isCreate){
            setActiveMenu(activeThirdCreateMenu)
        }else{
            setActiveMenu(activeThirdMenu)
        }
    }, [isCreate, activeThirdCreateMenu, activeThirdMenu]);

    const handleMenu = (menu) => {
        if(isCreate){
            setActiveThirdCreateMenu(menu)
            setSelectCreateBarae(NAMHAE_BARAE.NONE);
            setSelectTourCreateArea(NAMHAE_AREA.NONE);
        }else{
            setActiveThirdMenu(menu)
            setSelectBarae(NAMHAE_BARAE.NONE);
            setSelectTourArea(NAMHAE_AREA.NONE);
        }
    }

    return(
        <div className={`menu-toggle ${isShow ? 'active' : ''}`}>
s            <button type="button"
                    className={`btn-menu btn-menu--tour ${activeMenu === MENU_TYPE.TOUR ? 'active' : ''}`}
                    onClick={() => handleMenu(MENU_TYPE.TOUR)}>관광지</button>
            <button type="button"
                    className={`btn-menu btn-menu--bus ${activeMenu === MENU_TYPE.BARAE ? 'active' : ''}`}
                    onClick={() => handleMenu(MENU_TYPE.BARAE)}>바래길</button>
            <div className="bg"></div>
        </div>
    )
}

export default MenuBtn