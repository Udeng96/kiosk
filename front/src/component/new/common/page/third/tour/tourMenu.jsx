import {NAMHAE_AREA_LIST, NAMHAE_CREATE_AREA_LIST} from "@/data/const/const.js";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";
import {useEffect, useState} from "react";

const TourMenu = ({isCreate, activeArea}) => {
    const [menuList, setMenuList] = useState(NAMHAE_AREA_LIST);

    const {setSelectTourArea} = useKiosk(useShallow((state)=> ({
        setSelectTourArea : state.actions.setSelectTourArea
    })))

    const {setSelectTourCreateArea} = useCreate(useShallow((state)=> ({
        setSelectTourCreateArea : state.actions.setSelectTourArea
    })))

    useEffect(() => {
        if(isCreate){
            setMenuList(NAMHAE_CREATE_AREA_LIST);
        }else{
            setMenuList(NAMHAE_AREA_LIST);
        }

    },[isCreate])

    const handleMenu = (area) => {
        if(isCreate){
            setSelectTourCreateArea(area);
        }else{
            setSelectTourArea(area);
        }
    }

    return(
        <div className="tab-wrap">
            {
                menuList.map((area)=>(
                    <button type="button" className={`btn-tab ${activeArea.cd === area.cd ? 'active' : ''}`} onClick={()=> handleMenu(area)} key={area.cd}>{area.nm}</button>
                ))
            }
        </div>
    )

}

export default TourMenu