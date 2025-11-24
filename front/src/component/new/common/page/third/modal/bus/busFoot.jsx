import {BUS_TYPE, BUS_TYPE_LIST, FF_VILLAGE_LIST, MODAL_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";

const BusFoot = ({isCreate,activeBus}) => {

    const {setSelectCreateModalBus, setActiveCreateModal, setSelectCreateModalVillage} = useCreate((useShallow((state)=> ({
        setSelectCreateModalBus : state.actions.setSelectModalBus,
        setActiveCreateModal : state.actions.setActiveModal,
        setSelectCreateModalVillage : state.actions.setSelectModalVillage
    }))))

    const {setSelectModalBus, setActiveModal, setSelectModalVillage} = useKiosk((useShallow((state)=> ({
        setSelectModalBus : state.actions.setSelectModalBus,
        setActiveModal : state.actions.setActiveModal,
        setSelectModalVillage : state.actions.setSelectModalVillage
    }))))

    const handleSelectBus = (bus) => {
        if(isCreate){
            setSelectCreateModalBus(bus)
        }else{
            setSelectModalBus(bus)
        }
    }

    const handleClsBtn = () => {
        if(isCreate){
            setSelectCreateModalBus(BUS_TYPE.PUBLIC)
            setActiveCreateModal(MODAL_TYPE.NONE)
            setSelectCreateModalVillage(FF_VILLAGE_LIST[0])
        }else{
            setSelectModalBus(BUS_TYPE.PUBLIC)
            setActiveModal(MODAL_TYPE.NONE)
            setSelectModalVillage(FF_VILLAGE_LIST[0])
        }
    }

    return(
        <div className="bus__footer">
            <button type="button"
                    className="btn-icon btn-icon--red btn-close modal-close black"
                    onPointerDown={()=> handleClsBtn()}>나가기
            </button>
            <div className="frame">
                {
                    BUS_TYPE_LIST.map((item, index)=>(
                        <button type="button" className={`btn-navi ${index===0 ? 'btn-navi--home' : ''} ${activeBus.cd === item.cd ? 'active' : ''}`} onPointerDown={()=> handleSelectBus(item)}>{item.nm}</button>
                    ))
                }
            </div>
        </div>
    )

}

export default BusFoot