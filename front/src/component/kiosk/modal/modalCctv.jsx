import {useKiosk} from "@/store/kioskZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {MODAL_TYPE} from "@/data/const/const.js";
import CctvPlayer from "@/component/kiosk/player/cctvPlayer.jsx";

const ModalCctv= () => {

    const {activeModalType, setActiveModalType, activeTourPlace} = useKiosk(useShallow((state)=> ({
        activeModalType: state.activeModalType,
        setActiveModalType: state.actions.setActiveModalType,
        activeTourPlace : state.activeTourPlace
    })));

    return (
        <>
            <div id="modal-cctv" className={`modal ${activeModalType === MODAL_TYPE.CCTV && activeTourPlace.mgtno !== ''  ? '' : 'hidden'}`}>
                <div className="modal__content cctv">
                    <div className="cctv__in">
                        <div className={"cctv__title"}>{activeTourPlace? activeTourPlace.title : '-'}</div>
                        {
                            activeModalType === MODAL_TYPE.CCTV &&
                            activeTourPlace.mgtno !== '' &&
                            <CctvPlayer/>
                        }
                    </div>
                    <button type="button" className="btn-icon btn-icon--red black btn-close modal-close" onClick={()=> setActiveModalType(MODAL_TYPE.TOUR)}>나가기</button>
                </div>
            </div>

            <div id="modal-cctv-nothing" className={`modal ${activeModalType === MODAL_TYPE.CCTV && activeTourPlace.mgtno === ''  ? '' : 'hidden'}`}>
                <div className="modal__content cctv">
                    <div className="cctv__in nothing">
                        {/*<i><img src="../../../assets/image/img/etc/img_video-play_120x120.svg"/></i>*/}
                        {/*<p>표시할 데이터가 없습니다.</p>*/}
                        <p>현재 영상이 준비중입니다.</p>
                    </div>
                    <button type="button" className="btn-icon btn-icon--red black btn-close modal-close" onClick={()=> setActiveModalType(MODAL_TYPE.TOUR)}>나가기</button>
                </div>
            </div>
        </>

    )

}

export default ModalCctv