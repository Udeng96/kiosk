import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {MODAL_TYPE, TWELVE_ITEM_NONE} from "@/data/const/const.js";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useEffect, useState} from "react";
import TourNone from "@/component/new/common/page/third/modal/tour/none/tourNone.jsx";
import TourModalItem from "@/component/new/common/page/third/modal/tour/item/tourModalItem.jsx";

const TourModal = ({isCreate}) => {

    const {activeCreateModal, selectModalCreateTour} = useCreate((useShallow((state)=> ({
        activeCreateModal : state.activeModal,
        selectModalCreateTour : state.selectModalTour
    }))))

    const {activeModal, selectModalTour} = useKiosk((useShallow((state)=> ({
        activeModal : state.activeModal,
        selectModalTour : state.selectModalTour
    }))))

    const [modalItem, setModalItem] = useState(TWELVE_ITEM_NONE);

    useEffect(() => {
        if(isCreate){
            setModalItem(selectModalCreateTour);
        }else{
            setModalItem(selectModalTour)
        }
    },[isCreate, selectModalTour, selectModalCreateTour])


    return(
        <section className={`modal screen view ${(activeCreateModal === MODAL_TYPE.TOUR || activeModal === MODAL_TYPE.TOUR) ? '' : 'hidden'}`}>
            <div className="view__item-wrap">
                {
                    modalItem.title === TWELVE_ITEM_NONE.title &&
                    <TourNone isCreate ={isCreate} isShow={true}/>
                }
                {
                    modalItem.title !== TWELVE_ITEM_NONE.title &&
                    <TourModalItem isCreate={isCreate} activeTour={modalItem}/>
                }
            </div>
        </section>
    )
}

export default TourModal