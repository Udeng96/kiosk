import {useEffect, useState} from "react";
import {MODAL_TYPE, NAMHAE_AREA} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";

const TourItem = ({isCreate, isShow, tourArea, activeMenu}) => {

    const [isActive, setIsActive] = useState(false);
    const [activeArea, setActiveArea] = useState(tourArea);
    const {setActiveCreateModal, setSelectCreateTourPlace} = useCreate((useShallow((state) => ({
        setActiveCreateModal: state.actions.setActiveModal,
        setSelectCreateTourPlace: state.actions.setSelectTourPlace

    }))))

    const {setActiveModal, setSelectTourPlace} = useKiosk((useShallow((state) => ({
        setActiveModal: state.actions.setActiveModal,
        setSelectTourPlace: state.actions.setSelectTourPlace

    }))))

    useEffect(() => {
        setTimeout(() => {
            setIsActive(false);
            setActiveArea(NAMHAE_AREA.NONE);
        }, 300)
    }, [activeMenu]);

    useEffect(() => {
        if (isShow) {
            if (isActive) {
                setIsActive(false);
            } else {
                if (isShow) {
                    setIsActive(true);
                }
            }
        } else {
            setIsActive(false);
        }

    }, [tourArea, isShow])

    useEffect(() => {
        if (!isActive && isShow) {
            setTimeout(() => {
                setIsActive(true);
                setActiveArea(tourArea)
            }, 500)
        }
    }, [isActive, isShow]);

    const handleGisBtn = (nm) => {
        const place = activeArea.tourList.find((item) => item.title === nm);
        if (place) {
            if (isCreate) {
                setSelectCreateTourPlace(place);
                setActiveCreateModal(MODAL_TYPE.PLACE)
            } else {
                setSelectTourPlace(place);
                setActiveModal(MODAL_TYPE.PLACE)
            }
        }
    }

    const handlePlace = (place) => {
        if (isCreate) {
            setSelectCreateTourPlace(place)
            if (place.index === 37) {
                setActiveCreateModal(MODAL_TYPE.CHANGSENG)
            } else {
                setActiveCreateModal(MODAL_TYPE.PLACE)
            }

        } else {
            setSelectTourPlace(place)
            setActiveModal(MODAL_TYPE.PLACE)
        }
    }

    return (
        <ul className="tour-wrap">
            <li className={`tour__frame 'tour__frame--home ${isActive && activeArea.cd === NAMHAE_AREA.NONE.cd ? 'active' : ''}`}>
                <div className={`title title__home`}>
                    <img src={`${NAMHAE_AREA.NONE.img}`} alt={NAMHAE_AREA.NONE.title}/>
                </div>
                <div className="map">
                    <img src={`${NAMHAE_AREA.NONE.map}`} alt={NAMHAE_AREA.NONE.title + " 지도"}/>
                </div>
            </li>
            <li className={`tour__frame  ${isActive ? 'active' : ''}`}>
                <div className={`title`}>
                    <img src={`${activeArea.img}`} alt={activeArea.title}/>
                </div>
                <div className="map">
                    <img src={`${activeArea.map}`} alt={activeArea.title + " 지도"}/>
                    <ul className={"tour__list--gis--buttons"}>

                        {
                            activeArea.gisList.length > 0 &&
                            activeArea.gisList.map((item) => (
                                <li className="tour__item--button"
                                    style={{width: item.width, height: item.height, left: item.left, top: item.top}}>
                                    <button type="button" onClick={() => handleGisBtn(item.title)}></button>
                                </li>))
                        }
                    </ul>
                </div>
                <ul className="tour__list tour__list--left">
                    {
                        activeArea.tourList.length > 0 &&
                        activeArea.tourList.map((item, index) => (
                            index < 4 &&
                            <li className="tour__item" key={index}>
                                <button type="button" onClick={() => handlePlace(item)}>{item.title}</button>
                            </li>
                        ))
                    }
                </ul>
                <ul className="tour__list tour__list--right">
                    {
                        tourArea.tourList.length > 4 &&
                        tourArea.tourList.map((item, index) => (
                            index > 3 &&
                            <li className="tour__item" key={index}>
                                <button type="button" onClick={() => handlePlace(item)}>{item.title}</button>
                            </li>
                        ))
                    }
                </ul>
            </li>
        </ul>

    )
}

export default TourItem