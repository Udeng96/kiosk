import FirstStandby from "@/component/kioskCreate/standby/first/firstStandby.jsx";
import SecondStandby from "@/component/kioskCreate/standby/second/secondStandby.jsx";
import Indicator from "@/component/kioskCreate/standby/indicator/indicator.jsx";
import {useEffect, useRef} from "react";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {PAGE_TYPE} from "@/data/const/const.js";

const Standby = () => {

    const standbyListRef = useRef(null);
    const {activeStandby, activePage} = useCreate(useShallow((state)=> ({
        activeStandby : state.activeStandby,
        activePage : state.activePage
    })))

    useEffect(() => {
        if(activeStandby === "FIRST"){
            standbyListRef.current.style.transform = `translateX(0)`;
        }else{
            standbyListRef.current.style.transform = `translateX(-100%)`;
        }
    }, [activeStandby]);

    return (
        <section className={`screen create_standby ${activePage === PAGE_TYPE.STANDBY ? '' : 'hidden'}`}>
            <div className="create_standby__frame">
                <div className="create_standby__list" ref={standbyListRef}>
                    <FirstStandby/>
                    <SecondStandby/>
                </div>
            </div>
            <Indicator/>
        </section>
    )

}
export default Standby