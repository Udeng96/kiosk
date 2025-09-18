import {useShallow} from "zustand/react/shallow";
import {MODAL_TYPE, TOUR_MODAL_NONE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import CctvCreatePlayer from "@/component/kiosk/player/cctvCreatePlayer.jsx";

const ModalCctv= () => {

    const {activeModalType, setActiveModalType, activeTourPlace} = useCreate(useShallow((state)=> ({
        activeModalType: state.activeMenu,
        setActiveModalType: state.actions.setActiveMenu,
        activeTourPlace: state.activeTourPlace,
        setActiveTourPlace: state.actions.setActiveTourPlace
    })));

    const handleClsModal = () => {
        setActiveModalType(MODAL_TYPE.TOUR)
    }

    return (

        <>
            {

                <div id="modal-cctv" className={`modal ${activeModalType === MODAL_TYPE.CCTV && activeTourPlace.mgtno !== ''  ? '' : 'hidden'}`}>
                    <div className="modal__content cctv">
                        <div className="cctv__in">
                            <div className={"cctv__title"}>{activeTourPlace? activeTourPlace.title : '-'}</div>
                            {
                                activeModalType === MODAL_TYPE.CCTV &&
                                activeTourPlace.mgtno !== '' &&
                                <CctvCreatePlayer/>
                            }
                        </div>
                        <button type="button" className="btn-icon btn-icon--red black btn-close modal-close" onClick={()=> handleClsModal()}>나가기</button>
                    </div>
                </div>
            }
            {

                <div id="modal-cctv-nothing" className={`modal ${activeModalType === MODAL_TYPE.CCTV && activeTourPlace.mgtno === '' ? '' : 'hidden'}`}>
                    <div className="modal__content cctv">
                        <div className="cctv__in nothing">
                            {/*<i><img src="../../../assets/image/img/etc/img_video-play_120x120.svg"/></i>*/}
                            {/*<p>표시할 데이터가 없습니다.</p>*/}
                            <p>현재 영상이 준비중입니다.</p>
                        </div>
                        <button type="button" className="btn-icon btn-icon--red black btn-close modal-close" onClick={()=> handleClsModal()}>나가기</button>
                    </div>
                </div>
            }
        </>
    )
}
export default ModalCctv