import {useKiosk} from "@/store/kioskZustand.jsx";
import {MODAL_TYPE, TOUR_MODAL_NONE} from "@/data/const/const.js";
import {useEffect, useState} from "react";
import {useShallow} from "zustand/react/shallow";

const TourInfoItem = () => {

    const [isActive, setIsActive] = useState(false);
    const {activeModalType, activeTourPlace, setActiveTourPlace, setActiveModalType} = useKiosk(useShallow((state) => ({
        activeModalType: state.activeModalType,
        activeTourPlace: state.activeTourPlace,
        setActiveTourPlace: state.actions.setActiveTourPlace,
        setActiveModalType: state.actions.setActiveModalType
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
                <div className={`modal__frame modal__frame--tour ${isActive ? 'ani' : ''}`}>
                    <img src={activeTourPlace.img} alt={activeTourPlace.title}/>
                </div>
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

export default TourInfoItem