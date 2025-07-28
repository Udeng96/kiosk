import {useKiosk} from "@/store/kioskZustand.jsx";
import {MAIN_TYPE, MODAL_TYPE, NAMHAE_AREA, PAGE_TYPE} from "@/data/const/const.js";
import {useEffect, useState} from "react";
import {useShallow} from "zustand/react/shallow";

const TourFrameItem = () => {
    const {
        activePage,
        activeMainType,
        activeTourArea,
        setActiveTourPlace,
        setActiveModal
    } = useKiosk(useShallow((state) => ({
        activePage: state.activePage,
        activeMainType: state.activeMainType,
        activeTourArea: state.activeTourArea,
        setActiveTourPlace: state.actions.setActiveTourPlace,
        setActiveModal: state.actions.setActiveModalType
    })));
    const [isActive, setIsActive] = useState(false);
    const [activeArea, setActiveArea] = useState(NAMHAE_AREA.NONE);

    useEffect(()=>{
        setIsActive(false);
        setTimeout(()=>{
            setActiveArea(activeTourArea);
        },500)
    },[activeTourArea])

    useEffect(() => {
        if(activePage === PAGE_TYPE.MAIN && activeMainType === MAIN_TYPE.TOUR){
            setTimeout(() => {
                setIsActive(true);
            }, 200)
        }else{
            setIsActive(false);
        }
    }, [activePage, activeMainType, activeArea]);

    const handleTourItem = (item) =>{
        setActiveModal(MODAL_TYPE.TOUR);
        setActiveTourPlace(item)
    }

    return(
        <li className={`tour__frame ${activeArea.cd === NAMHAE_AREA.NONE.cd ? 'tour__frame--home' : ''} ${isActive ? 'active' : ''}`}>
            <div className={`title ${activeArea.cd === NAMHAE_AREA.NONE.cd ? 'title__home' : ''}`}>
                <img src={activeArea.img} alt={activeArea.title}/>
            </div>
            <div className="map">
                <img src={activeArea.map} alt={activeArea.title+" 지도"}/>
            </div>
            {
                activeArea.cd !== NAMHAE_AREA.NONE.cd &&
                <ul className="tour__list tour__list--left">
                    {
                        activeArea.tourList.length > 0 &&
                        activeArea.tourList.map((item, index) => (
                            index<4 &&
                            <li className="tour__item" key={index} onClick={() => handleTourItem(item)}>
                                <button type="button" >{item.title}</button>
                            </li>
                        ))
                    }
                </ul>
            }
            {
                <ul className="tour__list tour__list--right">
                    {
                        activeArea.tourList.length > 4 &&
                        activeArea.tourList.map((item, index) => (
                            index>3 &&
                            <li className="tour__item" key={index} onClick={() => handleTourItem(item)}>
                                <button type="button" >{item.title}</button>
                            </li>
                        ))
                    }
                </ul>
            }
        </li>
    )
}

export default TourFrameItem