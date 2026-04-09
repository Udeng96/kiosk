import TourHead from "@/component/new/common/page/third/modal/tour/none/tourHead.jsx";
import TourBody from "@/component/new/common/page/third/modal/tour/none/tourBody.jsx";
import TourFoot from "@/component/new/common/page/third/modal/tour/none/tourFoot.jsx";

const TourNone = ({isCreate}) => {

    return(
        <div className={`view__item view__item--home active`}>
            <TourHead/>
            <TourBody isCreate={isCreate}/>
            <TourFoot isCreate={isCreate}/>
        </div>
    )
}

export default TourNone