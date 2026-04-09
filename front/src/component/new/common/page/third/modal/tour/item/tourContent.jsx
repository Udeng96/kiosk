import {TWELVE_ITEM_LIST} from "@/data/const/const.js";
import TourContentItem from "@/component/new/common/page/third/modal/tour/item/tourContentItem.jsx";

const TourContent = ({activeTour}) => {

    return(
        <div className={`view-content`}>
            <ul className="view-content__list">
                {
                    TWELVE_ITEM_LIST.map((item)=>(
                        <TourContentItem
                            isActive={activeTour.title === item.title}
                            key={item.index}
                            index={item.index}
                            title={item.title}
                            notice={item.notice}
                            notice2={item.notice2}
                            qr={item.qr}
                            content={item.content}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TourContent