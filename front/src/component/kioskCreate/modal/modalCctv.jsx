import {useShallow} from "zustand/react/shallow";
import {MODAL_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";

const ModalCctv= () => {

    const {activeModalType, setActiveModalType} = useCreate(useShallow((state)=> ({
        activeModalType: state.activeMenu,
        setActiveModalType: state.actions.setActiveMenu
    })));

    return (
        <>
            <div id="modal-cctv" className={`modal hidden`}>
                <div className="modal__content cctv">
                    <div className="cctv__in"></div>
                    <button type="button" className="btn-icon btn-icon--red black btn-close modal-close" onClick={()=> setActiveModalType(MODAL_TYPE.TOUR)}>나가기</button>
                </div>
            </div>

            <div id="modal-cctv-nothing" className={`modal ${activeModalType === MODAL_TYPE.CCTV ? '' : 'hidden'}`}>
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