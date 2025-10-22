import {useShallow} from "zustand/react/shallow";
import {CCTV_LIST, MODAL_TYPE} from "@/data/const/const.js";
import {useState} from "react";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useCreate} from "@/store/createZustand.jsx";
import CctvSmallPlayer from "@/component/new/common/page/third/modal/cctv/player/cctvSmallPlayer.jsx";

const CctvWhole = ({isCreate}) => {

    const {activeCreateModal, setActiveCreateModal} = useCreate((useShallow((state)=> ({
        activeCreateModal : state.activeModal,
        setActiveCreateModal : state.actions.setActiveModal

    }))))

    const {activeModal, setActiveModal} = useKiosk((useShallow((state)=> ({
        activeModal : state.activeModal,
        setActiveModal : state.actions.setActiveModal

    }))))

    const [page, setPage] = useState(1);

    const handleCls = () => {
        setPage(1);
        if(isCreate){
            setActiveCreateModal(MODAL_TYPE.NONE)
        }else{
            setActiveModal(MODAL_TYPE.NONE)
        }
    }

    return(
        <div id={`modal-tour `}
             className={`modal cctv ${(activeCreateModal ===  MODAL_TYPE.CCTV_WHOLE || activeModal === MODAL_TYPE.CCTV_WHOLE)? '' : 'hidden'}`}>
            <div className="dimmed"></div>
            <div className="modal__content cctv">
                <div className={"cctv__box"}>
                    {
                        CCTV_LIST.map((cctv, idx)=>(
                            ((page-1)*6<= idx && idx < 6*page) &&
                            <div className="cctv__in" key={'WHOLE_CCTV'+idx}>
                                <CctvSmallPlayer activeModal={isCreate ? activeCreateModal : activeModal} mgtNo={cctv.mgtno}/>
                                <p>{cctv.nm}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="modal__footer">
                    <button type="button" className={`btn-icon btn-icon--blue btn-prev`} disabled={page===1} onClick={() => setPage(1)}>이전</button>
                    <button type="button" className="btn-icon btn-icon--red btn-close modal-close" onClick={()=>handleCls()}>나가기</button>
                    <button type="button" className={`btn-next `} disabled={page===2} onClick={() => setPage(2)} >다음</button>
                </div>
            </div>
        </div>
    )
}

export default CctvWhole