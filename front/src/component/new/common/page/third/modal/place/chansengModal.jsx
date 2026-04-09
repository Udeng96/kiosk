import {CHANGSENG_TYPE, MODAL_TYPE, TOUR_MODAL_NONE} from "@/data/const/const.js";
import CHANSENG_FIRST from "@/assets/image/img/main/img_changsaeng-1f_3840x1796.jpg";
import CHANSENG_SECOND from "@/assets/image/img/main/img_changsaeng-2f_3840x1796.jpg";
import CHANSENG_THIRD from "@/assets/image/img/main/img_changsaeng-3f_3840x1796.jpg";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useEffect, useState} from "react";

const ChansengModal = () => {

    const [isActive, setIsActive] = useState(false);
    const {activeCreateModal, setActiveCreateModal,selectCreateTourPlace, setActiveCreateTourPlace, selectModalChangseng, setSelectModalChangseng} = useCreate((useShallow((state)=> ({
        activeCreateModal : state.activeModal,
        setActiveCreateModal : state.actions.setActiveModal,
        selectCreateTourPlace : state.selectTourPlace,
        setActiveCreateTourPlace : state.actions.setSelectTourPlace,
        selectModalChangseng : state.selectModalChangseng,
        setSelectModalChangseng : state.actions.setSelectModalChangseng
    }))))

    useEffect(() => {
        if (selectCreateTourPlace.area === TOUR_MODAL_NONE.area) {
            setIsActive(false);
        } else {
            setIsActive(false);
            setTimeout(() => {
                setIsActive(true);
            }, 100);
        }

        if(activeCreateModal === MODAL_TYPE.NONE){
            setIsActive(false)
        }

    }, [selectCreateTourPlace, activeCreateModal]);

    const handleModalClose = () => {
        setActiveCreateTourPlace(TOUR_MODAL_NONE);
        setSelectModalChangseng(CHANGSENG_TYPE.FIRST);
        setActiveCreateModal(MODAL_TYPE.NONE);
    }

    return(
        <div id={`modal-tour${selectCreateTourPlace.index}`}
             className={`modal ${activeCreateModal === MODAL_TYPE.CHANGSENG && selectCreateTourPlace.area !== TOUR_MODAL_NONE.area ? '' : 'hidden'}`}>
            <div className="dimmed"></div>
            <div className="modal__content">
                {
                    selectCreateTourPlace.title === "창생플랫폼" &&
                    <div className={`modal__frame modal__frame--tour changsaeng ${isActive ? 'ani' : ''}`}>
                        <ul>
                            <li className={`tab-item ${selectModalChangseng.cd === CHANGSENG_TYPE.FIRST.cd ? 'active' : ''}`}><img src={CHANSENG_FIRST} alt="창생플랫폼 1층"/></li>
                            <li className={`tab-item ${selectModalChangseng.cd === CHANGSENG_TYPE.SECOND.cd ? 'active' : ''}`}><img src={CHANSENG_SECOND} alt="창생플랫폼 2층"/></li>
                            <li className={`tab-item ${selectModalChangseng.cd === CHANGSENG_TYPE.THIRD.cd ? 'active' : ''}`}><img src={CHANSENG_THIRD} alt="창생플랫폼 3층"/></li>
                        </ul>
                        <div className="tab-wrap">
                            <p className="tab-title">주민 편의공간</p>
                            <button type="button" className={`btn-tab ${selectModalChangseng.cd === CHANGSENG_TYPE.FIRST.cd? 'active' : ''}`} onPointerDown={()=> setSelectModalChangseng(CHANGSENG_TYPE.FIRST)}>1층</button>
                            <button type="button" className={`btn-tab ${selectModalChangseng.cd === CHANGSENG_TYPE.SECOND.cd ? 'active' : ''}`} onPointerDown={()=> setSelectModalChangseng(CHANGSENG_TYPE.SECOND)}>2층</button>
                            <button type="button" className={`btn-tab ${selectModalChangseng.cd === CHANGSENG_TYPE.THIRD.cd ? 'active' : ''}`} onPointerDown={()=> setSelectModalChangseng(CHANGSENG_TYPE.THIRD)}>3층</button>
                        </div>
                    </div>
                }
                {
                    selectCreateTourPlace.title !== "창생플랫폼" &&
                    <div className={`modal__frame modal__frame--tour ${isActive ? 'ani' : ''}`}>
                        <img src={selectCreateTourPlace.img} alt={selectCreateTourPlace.title}/>
                    </div>
                }
                <div className="modal__footer">
                    {
                        selectCreateTourPlace.mgtno !== '' &&
                        <button type="button"
                                className="btn-icon btn-icon--black btn-cctv"
                                onPointerDown={() => setActiveCreateModal(MODAL_TYPE.CCTV)}
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

export default ChansengModal