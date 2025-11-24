import {MODAL_TYPE, TOUR_MODAL_NONE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useEffect, useState} from "react";

const PlaceModal = ({isCreate}) => {

    const [activeTourPlace, setActiveTourPlace] = useState(TOUR_MODAL_NONE);

    const {activeCreateModal, setActiveCreateModal,selectCreateTourPlace, setActiveCreateTourPlace} = useCreate((useShallow((state)=> ({
        activeCreateModal : state.activeModal,
        setActiveCreateModal : state.actions.setActiveModal,
        selectCreateTourPlace : state.selectTourPlace,
        setActiveCreateTourPlace : state.actions.setSelectTourPlace

    }))))

    const {activeModal, setActiveModal, selectTourPlace, setSelectTourPlace} = useKiosk((useShallow((state)=> ({
        activeModal : state.activeModal,
        setActiveModal : state.actions.setActiveModal,
        selectTourPlace : state.selectTourPlace,
        setActiveTourPlace : state.actions.setSelectTourPlace
    }))))

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (activeTourPlace.area === TOUR_MODAL_NONE.area) {
            setIsActive(false);
        } else {
            setIsActive(false);
            setTimeout(() => {
                setIsActive(true);
            }, 100);
        }

        if(isCreate){
            if(activeCreateModal === MODAL_TYPE.NONE){
                setIsActive(false)
            }
        }else{
            if(activeModal === MODAL_TYPE.NONE){
                setIsActive(false);
            }
        }

    }, [activeTourPlace, activeModal, activeCreateModal]);


    useEffect(() => {
        if(isCreate){
            setActiveTourPlace(selectCreateTourPlace)
        }else{
            setActiveTourPlace(selectTourPlace)
        }
    }, [selectTourPlace, isCreate, selectCreateTourPlace])

    const handleModalClose = () => {
        if(isCreate){
            setActiveCreateModal(MODAL_TYPE.NONE)
            setActiveCreateTourPlace(TOUR_MODAL_NONE)
        }else{
            setActiveModal(MODAL_TYPE.NONE)
            setSelectTourPlace(TOUR_MODAL_NONE)
        }
    }

    const handleLiveView=()=>{
        if(isCreate){
            setActiveCreateModal(MODAL_TYPE.CCTV)
        }else{
            setActiveModal(MODAL_TYPE.CCTV)
        }
    }

    return(
        <div id={`modal-tour${activeTourPlace.index}`}
             className={`modal ${(activeModal === MODAL_TYPE.PLACE || activeCreateModal === MODAL_TYPE.PLACE) && activeTourPlace.area !== TOUR_MODAL_NONE.area ? '' : 'hidden'}`}>
            <div className="dimmed"></div>
            <div className="modal__content">
                <div className={`modal__frame modal__frame--tour ${isActive ? 'ani' : ''}`}>
                    <img src={activeTourPlace.img} alt={activeTourPlace.title}/>
                </div>
                <div className="modal__footer">
                    {
                        activeTourPlace.mgtno !== '' &&
                        <button type="button"
                                className="btn-icon btn-icon--black btn-cctv"
                                onPointerDown={() => handleLiveView()}
                        >라이브 뷰
                        </button>
                    }
                    <button type="button" className="btn-icon btn-icon--red btn-close modal-close"
                            onPointerDown={() => handleModalClose()}>나가기
                    </button>
                </div>
            </div>
        </div>
    )

}

export default PlaceModal