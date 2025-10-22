import {BUS_TYPE, FF_VILLAGE_LIST} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useEffect, useState} from "react";

const BusVilliageMenu = ({isCreate,activeBus}) => {

    const [activeVilLine, setActiveVilLine] = useState(FF_VILLAGE_LIST[0])
    const {selectCreateModalVillage, setSelectCreateModalVillage} = useCreate((useShallow((state)=> ({
        selectCreateModalVillage : state.selectModalVillage,
        setSelectCreateModalVillage : state.actions.setSelectModalVillage

    }))))

    const {selectModalVillage, setSelectModalVillage} = useKiosk((useShallow((state)=> ({
        selectModalVillage : state.selectModalVillage,
        setSelectModalVillage : state.actions.setSelectModalVillage

    }))))

    useEffect(() => {
        if(isCreate){
            setActiveVilLine(selectCreateModalVillage)
        }else{
            setActiveVilLine(selectModalVillage)
        }

    },[selectCreateModalVillage, selectModalVillage, isCreate])

    const handleSelectVillage = (village) => {
        if(isCreate){
            setSelectCreateModalVillage(village)
        }else{
            setSelectModalVillage(village)
        }
    }

    return(
        <div className="bus__tab">
            {
                activeBus.cd === BUS_TYPE.VILL.cd &&
                FF_VILLAGE_LIST.map((item, index) => {
                    return(
                        <button type="button" className={`btn__bus-tab ${index ===0 ? 'btn__bus-tab--home' : '' } ${activeVilLine.index === item.index ? 'active' : ''}`} onClick={()=> handleSelectVillage(item)} key={index}>{item.title}</button>
                    )
                })
            }
        </div>
    )

}

export default BusVilliageMenu