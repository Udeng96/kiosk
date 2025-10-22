import {BUS_TYPE, MODAL_TYPE, PAGE_TYPE, TWELVE_ITEM_NONE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";
import BusBody from "@/component/new/common/page/third/modal/bus/busBody.jsx";
import BusFoot from "@/component/new/common/page/third/modal/bus/busFoot.jsx";
import {useEffect, useState} from "react";

const BusModal = ({isCreate}) => {
    const [activeBus, setActiveBus] = useState(BUS_TYPE.PUBLIC);


    const {activeCreateModal, selectCreateModalBus} = useCreate((useShallow((state)=> ({
        activeCreateModal : state.activeModal,
        selectCreateModalBus : state.selectModalBus

    }))))

    const {activeModal, selectModalBus} = useKiosk((useShallow((state)=> ({
        activeModal : state.activeModal,
        selectModalBus : state.selectModalBus

    }))))

    useEffect(() => {
        if(isCreate){
            setActiveBus(selectCreateModalBus)
        }else{
            setActiveBus(selectModalBus)
        }

    },[selectCreateModalBus, selectModalBus, isCreate])


    return(
        <section className={`modal screen bus ${(activeCreateModal === MODAL_TYPE.BUS || activeModal === MODAL_TYPE.BUS) ? '' : 'hidden'}`}>
            <BusBody isCreate={isCreate} activeBus={activeBus}/>
            <BusFoot isCreate={isCreate} activeBus={activeBus}/>
        </section>
    )

}

export default BusModal