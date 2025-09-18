import {useEffect, useState} from "react";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {MODAL_TYPE, TOUR_MODAL_NONE} from "@/data/const/const.js";

import CHANSENG_FIRST from "@/assets/image/img/main/img_changsaeng-1f_3840x1796.jpg";
import CHANSENG_SECOND from "@/assets/image/img/main/img_changsaeng-2f_3840x1796.jpg";
import CHANSENG_THIRD from "@/assets/image/img/main/img_changsaeng-3f_3840x1796.jpg";

const ModalTourInfo = () => {
    const [isActive, setIsActive] = useState(false);

    const {activeModalType, activeTourPlace, activeChangseng, setActiveTourPlace, setActiveModalType, setActiveChangseng} = useCreate(useShallow((state) => ({
        activeModalType: state.activeMenu,
        activeTourPlace: state.activeTourPlace,
        activeChangseng: state.activeChangseng,
        setActiveTourPlace: state.actions.setActiveTourPlace,
        setActiveModalType: state.actions.setActiveMenu,
        setActiveChangseng: state.actions.setActiveChangseng
    })));

    useEffect(() => {
        if (activeTourPlace.area === TOUR_MODAL_NONE.area) {
            setIsActive(false);
        } else {
            setIsActive(false);
            setTimeout(() => {
                setIsActive(true);
            }, 100);
        }

        if(activeModalType === MODAL_TYPE.NONE){
            setIsActive(false)
        }

    }, [activeTourPlace, activeModalType]);

    const handleModalClose = () => {
        setActiveTourPlace(TOUR_MODAL_NONE)
        setActiveModalType(MODAL_TYPE.NONE);
    }

    return (
        <div id={`modal-tour${activeTourPlace.index}`}
             className={`modal ${activeModalType === MODAL_TYPE.TOUR && activeTourPlace.area !== TOUR_MODAL_NONE.area ? '' : 'hidden'}`}>
            <div className="dimmed"></div>
            <div className="modal__content">
                {
                    activeTourPlace.title === "창생플랫폼" &&
                    <div className={`modal__frame modal__frame--tour changsaeng ${isActive ? 'ani' : ''}`}>
                        <ul>
                            <li className={`tab-item ${activeChangseng === "FIRST" ? 'active' : ''}`}><img src={CHANSENG_FIRST} alt="창생플랫폼 1층"/></li>
                            <li className={`tab-item ${activeChangseng === "SECOND" ? 'active' : ''}`}><img src={CHANSENG_SECOND} alt="창생플랫폼 2층"/></li>
                            <li className={`tab-item ${activeChangseng === "THIRD" ? 'active' : ''}`}><img src={CHANSENG_THIRD} alt="창생플랫폼 3층"/></li>
                        </ul>
                        <div className="tab-wrap">
                            <p className="tab-title">주민 편의공간</p>
                            <button type="button" className={`btn-tab ${activeChangseng === "FIRST" ? 'active' : ''}`} onClick={()=> setActiveChangseng("FIRST")}>1층</button>
                            <button type="button" className={`btn-tab ${activeChangseng === "SECOND" ? 'active' : ''}`} onClick={()=> setActiveChangseng("SECOND")}>2층</button>
                            <button type="button" className={`btn-tab ${activeChangseng === "THIRD" ? 'active' : ''}`} onClick={()=> setActiveChangseng("THIRD")}>3층</button>
                        </div>
                    </div>
                }
                {
                    activeTourPlace.title !== "창생플랫폼" &&
                    <div className={`modal__frame modal__frame--tour ${isActive ? 'ani' : ''}`}>
                        <img src={activeTourPlace.img} alt={activeTourPlace.title}/>
                    </div>
                }
                <div className="modal__footer">
                    {
                        activeTourPlace.mgtno !== '' &&
                        <button type="button"
                                className="btn-icon btn-icon--black btn-cctv"
                                onClick={() => setActiveModalType(MODAL_TYPE.CCTV)}
                        >라이브 뷰
                        </button>
                    }
                    <button type="button" className="btn-icon btn-icon--red btn-close modal-close"
                            onClick={() => handleModalClose()}>나가기
                    </button>
                </div>
            </div>
        </div>
    )

}

export default ModalTourInfo