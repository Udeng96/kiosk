import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {MODAL_TYPE, TWELVE_ITEM_NONE} from "@/data/const/const.js";

const TourFoot = ({isCreate}) => {

    const {setActiveCreateModal, setSelectModalCreateTour} = useCreate((useShallow((state)=> ({
        setActiveCreateModal : state.actions.setActiveModal,
        selectModalCreateTour : state.actions.setSelectModalTour
    }))))

    const {setActiveModal, setSelectModalTour} = useKiosk((useShallow((state)=> ({
        setActiveModal : state.actions.setActiveModal,
        setSelectModalTour : state.actions.setSelectModalTour
    }))))

    const handleClsBtn = () =>{
        if(isCreate){
            setActiveCreateModal(MODAL_TYPE.NONE);
            setSelectModalCreateTour(TWELVE_ITEM_NONE);
        }else{
            setActiveModal(MODAL_TYPE.NONE);
            setSelectModalTour(TWELVE_ITEM_NONE);
        }
    }
    return(
        <div className="view__footer">
            <button type="button" onPointerDown={()=>handleClsBtn()}
                    className="btn-icon btn-icon--red btn-close modal-close black">나가기
            </button>
        </div>
    )
}

export default TourFoot