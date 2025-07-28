import {NAMHAE_AREA, NAMHAE_CREATE_AREA_LIST} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";

const TourMenu = () => {

    const {activeTourArea, setActiveTourArea} = useCreate(useShallow((state)=> ({
        activeTourArea: state.activeTourArea,
        setActiveTourArea: state.actions.setActiveTourArea
    })))

    return(
        <div className="tab-wrap">
            {
                NAMHAE_CREATE_AREA_LIST.map((area)=> (
                    <button type="button" className={`btn-tab ${activeTourArea.cd === NAMHAE_AREA.NONE.cd ? 'btn-tab--home' : ''} ${activeTourArea.cd === area.cd ? 'active' : ''}`} onClick={()=> setActiveTourArea(area)} key={area.cd}>{area.nm}</button>
                ))
            }
        </div>
    )

}

export default TourMenu