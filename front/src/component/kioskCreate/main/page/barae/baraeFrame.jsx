import {useShallow} from "zustand/react/shallow";
import {
    MAIN_TYPE,
    NAMHAE_AREA,
    NAMHAE_BARAE_LIST,
    NAMHAE_BARAE_SECOND_LIST,
    NAMHAE_BARAE_THREE_LIST
} from "@/data/const/const.js";
import BARAE_HOME from "@/assets/image/img/main/img_home-baraegil-title-whole_860x1210.png";
import BARAE_HOME_MAP from "@/assets/image/img/main/img_home-baraegil-whole_2413x1879.png";
import {useEffect, useState} from "react";
import {useCreate} from "@/store/createZustand.jsx";

const BaraeFrame = () =>{

    const {activeMainMenu, activeBaraeArea} = useCreate(useShallow((state)=>({
        activeMainMenu : state.activeMainMenu,
        activeBaraeArea : state.activeBaraeArea
    })))
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(activeMainMenu === MAIN_TYPE.BARAE) {
            if(activeBaraeArea.cd !== NAMHAE_AREA.NONE.cd) {
                setIsActive(true);
            }else{
                setIsActive(false);
            }
        }else{
            setIsActive(false);
        }
    }, [activeMainMenu, activeBaraeArea]);

    return(
        <ul className="baraegil-wrap">
            <li className={`baraegil__frame baraegil__frame--home ${activeMainMenu === MAIN_TYPE.BARAE && activeBaraeArea.cd === NAMHAE_AREA.NONE.cd ? 'active' : ''}`}>
                <div className="title">
                    <img src={BARAE_HOME} alt="남해 바래길"/>
                </div>
                <div className="map">
                    <img src={BARAE_HOME_MAP} alt="지도 홈"/>
                </div>
            </li>
            {
                NAMHAE_BARAE_LIST.map((item)=>(
                    <li className={`baraegil__frame ${isActive&& activeBaraeArea.cd === item.cd ? 'active' : ''}`}>
                        <div className="map">
                            <img src={item.img} alt={item.nm}/>
                        </div>
                    </li>
                ))
            }
            {
                NAMHAE_BARAE_SECOND_LIST.map((item)=>(
                    <li className={`baraegil__frame ${isActive&& activeBaraeArea.cd === item.cd ? 'active' : ''}`}>
                        <div className="map">
                            <img src={item.img} alt={item.nm}/>
                        </div>
                    </li>
                ))
            }
            {
                NAMHAE_BARAE_THREE_LIST.map((item)=>(
                    <li className={`baraegil__frame ${isActive&& activeBaraeArea.cd === item.cd ? 'active' : ''}`}>
                        <div className="map">
                            <img src={item.img} alt={item.nm}/>
                        </div>
                    </li>
                ))
            }
        </ul>
    )

}

export default BaraeFrame