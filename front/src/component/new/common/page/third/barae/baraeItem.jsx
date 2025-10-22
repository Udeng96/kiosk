import {
    NAMHAE_BARAE,
    NAMHAE_BARAE_LIST,
    NAMHAE_BARAE_SECOND_LIST,
    NAMHAE_BARAE_THREE_LIST
} from "@/data/const/const.js";
import {useEffect, useState} from "react";
import BARAE_HOME from "@/assets/image/img/main/img_home-baraegil-title-whole_860x1210.png";
import BARAE_HOME_MAP from "@/assets/image/img/main/img_home-baraegil-whole_2413x1879.png";

const BaraeItem = ({isShow, barae, activeMenu}) => {
    const [isActive, setIsActive] = useState(true);
    const [activeBarae, setActiveBarae] = useState(barae);


    useEffect(() => {
        if (isShow) {
            if (isActive) {
                setIsActive(false);
            } else {
                if (isShow) {
                    setIsActive(true);
                }
            }
        } else {
            setIsActive(false);
        }
    }, [barae, isShow, activeBarae])

    useEffect(() => {

        if (!isActive ) {
            if(isShow){
                setTimeout(() => {
                    setIsActive(true);
                    setActiveBarae(barae);
                }, 300)
            }

        }
    }, [isActive, isShow]);


    return (
        <ul className="baraegil-wrap">
            <li className={`baraegil__frame baraegil__frame--home ${isActive && activeBarae.cd === NAMHAE_BARAE.NONE.cd ? 'active' : ''}`}>
                <div className="title">
                    <img src={BARAE_HOME} alt="남해 바래길"/>
                </div>
                <div className="map">
                    <img src={BARAE_HOME_MAP} alt="지도 홈"/>
                </div>
            </li>
            {
                NAMHAE_BARAE_LIST.map((item) => (
                    <li className={`baraegil__frame ${isActive && activeBarae.cd === item.cd ? 'active' : ''}`}>
                        <div className="map">
                            <img src={item.img} alt={item.nm}/>
                        </div>
                    </li>
                ))
            }
            {
                NAMHAE_BARAE_SECOND_LIST.map((item) => (
                    <li className={`baraegil__frame ${isActive && activeBarae.cd === item.cd ? 'active' : ''}`}>
                        <div className="map">
                            <img src={item.img} alt={item.nm}/>
                        </div>
                    </li>
                ))
            }
            {
                NAMHAE_BARAE_THREE_LIST.map((item) => (
                    <li className={`baraegil__frame ${isActive && activeBarae.cd === item.cd ? 'active' : ''}`}>
                        <div className="map">
                            <img src={item.img} alt={item.nm}/>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default BaraeItem