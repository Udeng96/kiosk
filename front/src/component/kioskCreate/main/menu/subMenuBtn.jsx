import {MAIN_TYPE} from "@/data/const/const.js";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";

const SubMenuBtn = () => {

    const {activeMainMenu, setActiveMainMenu} = useCreate(useShallow((state)=> ({
        activeMainMenu: state.activeMainMenu,
        setActiveMainMenu: state.actions.setActiveMainMenu
    })));
    
    return(
        <div className="menu-toggle">
            <button type="button"
                    className={`btn-menu btn-menu--tour ${activeMainMenu === MAIN_TYPE.TOUR ? 'active' : ''}`}
                    onClick={() => setActiveMainMenu(MAIN_TYPE.TOUR)}>관광지</button>
            <button type="button"
                    className={`btn-menu btn-menu--bus ${activeMainMenu === MAIN_TYPE.BARAE ? 'active' : ''}`}
                    onClick={() => setActiveMainMenu(MAIN_TYPE.BARAE)}>바래길</button>
            <div className="bg"></div>
        </div>
    )
    
}

export default SubMenuBtn