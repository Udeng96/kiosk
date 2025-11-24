import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {MODAL_TYPE} from "@/data/const/const.js";

const QuickBtn = ({isCreate}) => {

    const {setActiveCreateModal} = useCreate(useShallow((state)=> ({
        setActiveCreateModal: state.actions.setActiveModal
    })));
    const {setActiveModal} = useKiosk(useShallow((state)=> ({
        setActiveModal: state.actions.setActiveModal
    })));

    const handleBtn = (modal) => {
        if(isCreate){
            setActiveCreateModal(modal)
        }else{
            setActiveModal(modal)
        }
    }

    return(
        <div className={"quick-btn"}>
            <div className="change-mode">
                <button type="button" onPointerDown={()=> handleBtn(MODAL_TYPE.TOUR)} className="btn-change btn-change--view"><i></i>남해
                    12경 보기
                </button>
                <button type="button" onPointerDown={()=> handleBtn(MODAL_TYPE.BUS)} className="btn-change btn-change--bus">
                    <i></i>버스 노선 보기
                </button>
            </div>
            <button className={"btn-change--cctv"} onPointerDown={()=>handleBtn(MODAL_TYPE.CCTV_WHOLE)}>라이브뷰 모아보기</button>
        </div>
    )

}

export default QuickBtn