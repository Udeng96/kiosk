import {TWELVE_ITEM_LIST, TWELVE_ITEM_NONE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useEffect} from "react";

const TourContentFoot = ({isCreate, activeTour}) => {
    const{setSelectCreateModalTour} = useCreate(useShallow((state)=> ({
        setSelectCreateModalTour : state.actions.setSelectModalTour
    })))


    const{setSelectModalTour} = useKiosk(useShallow((state)=> ({
        setSelectModalTour : state.actions.setSelectModalTour
    })))

    const handlePrevBtn = () => {
        if(isCreate){
            setSelectCreateModalTour(TWELVE_ITEM_LIST[activeTour.index-2]);
        }else{
            setSelectModalTour(TWELVE_ITEM_LIST[activeTour.index-2]);
        }
    }

    const handleNextBtn = () => {
        if(isCreate){
            setSelectCreateModalTour(TWELVE_ITEM_LIST[activeTour.index]);
        }else{
            setSelectModalTour(TWELVE_ITEM_LIST[activeTour.index]);
        }
    }

    const handleTour = () => {
        if(isCreate){
            setSelectCreateModalTour(TWELVE_ITEM_NONE);
        }else{
            setSelectModalTour(TWELVE_ITEM_NONE);
        }
    }
    return(
        <div className="view__footer">
            <button type="button" className="btn-back" onPointerDown={()=> handleTour(TWELVE_ITEM_NONE)}>12경 메인으로 돌아가기</button>
            <div className="frame">
                {
                    activeTour.index >1 &&
                    <button type="button" className="btn-icon btn-icon--blue btn-prev black" onPointerDown={handlePrevBtn}><p>제 {activeTour.index-1}경</p></button>
                }
                {
                    activeTour.index < 12 &&
                    <button type="button" className="btn-icon--blue btn-next black" onPointerDown={handleNextBtn}><p>제 {activeTour.index+1}경</p></button>
                }
            </div>
        </div>
    )
}

export default TourContentFoot