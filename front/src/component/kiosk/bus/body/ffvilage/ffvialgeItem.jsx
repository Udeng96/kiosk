import {BUS_TYPE, FF_VILLAGE_LIST} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";
import {useEffect} from "react";
import {useKiosk} from "@/store/kioskZustand.jsx";

const FfvialgeItem = () =>{

    const {activeVilLine,  activeBus} = useKiosk(useShallow((state)=> ({
        activeVilLine: state.activeVilLine,
        activeBus: state.activeBus
    })));


    return(
        <ul className="bus-tab__list">
            {
                FF_VILLAGE_LIST.map((item, index) => {
                    return(
                        <li className={`bus-tab__item ${index ===0 ? 'bus-tab__item--home' : '' } ${activeVilLine.index === item.index && activeBus.cd === BUS_TYPE.VILL.cd ? ' active' : ''}`} key={index}>
                            <img src={item.img} alt={item.title}/>
                        </li>
                    )
                })
            }
        </ul>
    )

}

export default FfvialgeItem