import {BUS_TYPE, FF_VILLAGE_LIST} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";

const FfvialgeItem = () =>{

    const {activeVilLine, setActiveVilLine, activeBus} = useCreate(useShallow((state)=> ({
        activeVilLine: state.activeVilLine,
        setActiveVilLine : state.actions.setActiveVilLine,
        activeBus: state.activeBus
    })));

    return(
        <ul className="bus-tab__list">
            {
                FF_VILLAGE_LIST.map((item, index) => {
                    return(
                        <li className={`bus-tab__item ${index ===0 ? 'bus-tab__item--home' : '' } ${activeVilLine.title === item.title && activeBus.cd === BUS_TYPE.VILL.cd ? 'active' : ''}`} onClick={()=> setActiveVilLine(item)} key={index}>
                            <img src={item.img} alt={item.title}/>
                        </li>
                    )
                })
            }
        </ul>
    )

}

export default FfvialgeItem