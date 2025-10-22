import {BUS_TYPE, FF_VILLAGE_LIST} from "@/data/const/const.js";
import {useEffect, useState} from "react";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";

const BusVillageContent = ({isCreate, activeBus}) => {

    const [activeVilLine, setActiveVilLine] = useState(FF_VILLAGE_LIST[0])
    const {selectCreateModalVillage} = useCreate((useShallow((state)=> ({
        selectCreateModalVillage : state.selectModalVillage,

    }))))

    const {selectModalVillage} = useKiosk((useShallow((state)=> ({
        selectModalVillage : state.selectModalVillage,

    }))))

    useEffect(() => {
        if(isCreate){
            setActiveVilLine(selectCreateModalVillage)
        }else{
            setActiveVilLine(selectModalVillage)
        }

    },[selectCreateModalVillage, selectModalVillage, isCreate])



    return(
        <ul className="bus-tab__list">
            {
                FF_VILLAGE_LIST.map((item, index) => {
                    return(
                        <li className={`bus-tab__item ${index ===0 ? 'bus-tab__item--home' : '' } ${activeVilLine.title === item.title && activeBus.cd === BUS_TYPE.VILL.cd ? 'active' : ''}`}  key={index}>
                            <img src={item.img} alt={item.title}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default BusVillageContent