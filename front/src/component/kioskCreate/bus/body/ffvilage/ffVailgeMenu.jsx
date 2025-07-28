import {BUS_TYPE, FF_VILLAGE_LIST} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";

const FfVailgeMenu = () => {
    const {activeBus,activeVilLine, setActiveVilLine} = useCreate(useShallow((state)=> ({
        activeBus: state.activeBus,
        activeVilLine: state.activeVilLine,
        setActiveVilLine: state.actions.setActiveVilLine
    })));
    return(
        <div className="bus__tab">
            {
                activeBus.cd === BUS_TYPE.VILL.cd &&
                FF_VILLAGE_LIST.map((item, index) => {
                    return(
                        <button type="button" className={`btn__bus-tab ${index ===0 ? 'btn__bus-tab--home' : '' } ${activeVilLine.index === item.index ? 'active' : ''}`} onClick={()=> setActiveVilLine(item)} key={index}>{item.title}</button>
                    )
                })
            }
        </div>
    )

}

export default FfVailgeMenu