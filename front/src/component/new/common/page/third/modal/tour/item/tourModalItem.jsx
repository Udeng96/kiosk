import TourContent from "@/component/new/common/page/third/modal/tour/item/tourContent.jsx";
import TourContentFoot from "@/component/new/common/page/third/modal/tour/item/tourContentFoot.jsx";
import {useEffect} from "react";

const TourModalItem = ({isCreate, activeTour}) => {

    return(
        <div className={`view__item view__item--content active`}>
            <TourContent activeTour={activeTour}/>
            <TourContentFoot isCreate={isCreate} activeTour={activeTour}/>
        </div>
    )
}

export default TourModalItem
