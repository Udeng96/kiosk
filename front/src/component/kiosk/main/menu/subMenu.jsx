import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {MAIN_TYPE} from "@/data/const/const.js";

const subMenu = () => {

    const {activeMainType, setActiveMainType} = useKiosk(useShallow((state)=> ({
        activeMainType: state.activeMainType,
        setActiveMainType: state.actions.setActiveMainType
    })));

    return(
        <div className="menu-toggle">
            <button type="button"
                    className={`btn-menu btn-menu--tour ${activeMainType === MAIN_TYPE.TOUR ? 'active' : ''}`}
                    onClick={() => setActiveMainType(MAIN_TYPE.TOUR)}
            >관광지
            </button>
            <button type="button"
                    className={`btn-menu btn-menu--bus ${activeMainType === MAIN_TYPE.BARAE ? 'active' : ''}`}
                    onClick={() => setActiveMainType(MAIN_TYPE.BARAE)}
            >바래길
            </button>
            <div className="bg"></div>
        </div>
    )

}

export default subMenu