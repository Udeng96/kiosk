import {MODAL_TYPE, TOUR_MODAL_NONE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useEffect, useState} from "react";
import CctvWidePlayer from "@/component/new/common/page/third/modal/cctv/player/cctvWidePlayer.jsx";

const CctvNorm = ({isCreate}) => {

    const [activeTourPlace, setActiveTourPlace] = useState(TOUR_MODAL_NONE);

    const {activeCreateModal, setActiveCreateModal,selectCreateTourPlace} = useCreate((useShallow((state)=> ({
        activeCreateModal : state.activeModal,
        setActiveCreateModal : state.actions.setActiveModal,
        selectCreateTourPlace : state.selectTourPlace

    }))))

    const {activeModal, setActiveModal, selectTourPlace} = useKiosk((useShallow((state)=> ({
        activeModal : state.activeModal,
        setActiveModal : state.actions.setActiveModal,
        selectTourPlace : state.selectTourPlace
    }))))

    useEffect(() => {
        if(isCreate){
            setActiveTourPlace(selectCreateTourPlace)
        }else{
            setActiveTourPlace(selectTourPlace)
        }
    }, [selectTourPlace, isCreate, selectCreateTourPlace])

    const handleClsModal = () => {
        if(isCreate){
            setActiveCreateModal(MODAL_TYPE.NONE)
        }else{
            setActiveModal(MODAL_TYPE.PLACE)
        }
    }


    return(
        <>
            {
                <div id="modal-cctv" className={`modal ${(activeModal === MODAL_TYPE.CCTV|| activeCreateModal === MODAL_TYPE.CCTV) && activeTourPlace.mgtno !== ''  ? '' : 'hidden'}`}>
                    <div className="modal__content cctv">
                        <div className="cctv__in">
                            <div className={"cctv__title"}>{activeTourPlace? activeTourPlace.title : '-'}</div>
                            {
                                activeTourPlace.mgtno !== '' &&
                                <CctvWidePlayer activeTourPlace={activeTourPlace}/>
                            }
                        </div>
                        <button type="button" className="btn-icon btn-icon--red black btn-close modal-close" onPointerDown={()=> handleClsModal()}>나가기</button>
                    </div>
                </div>
            }
            {

                <div id="modal-cctv-nothing" className={`modal ${(activeModal === MODAL_TYPE.CCTV|| activeCreateModal === MODAL_TYPE.CCTV)  && activeTourPlace.mgtno === '' ? '' : 'hidden'}`}>
                    <div className="modal__content cctv">
                        <div className="cctv__in nothing">
                            <p>현재 영상이 준비중입니다.</p>
                        </div>
                        <button type="button" className="btn-icon btn-icon--red black btn-close modal-close" onPointerDown={()=> handleClsModal()}>나가기</button>
                    </div>
                </div>
            }
        </>
    )

}

export default CctvNorm