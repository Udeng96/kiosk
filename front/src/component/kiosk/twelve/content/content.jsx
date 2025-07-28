import {TWELVE_ITEM_LIST} from "@/data/const/const.js";
import ContentItem from "@/component/kiosk/twelve/content/contentItem.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";

const Content = () => {
    const activeTwelve = useKiosk((state)=> state.activeTwelve);
    return(
        <div className={`view-content`}>
            <ul className="view-content__list">
                {
                    TWELVE_ITEM_LIST.map((item)=>(
                        <ContentItem
                            isActive={activeTwelve.title === item.title}
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

export default Content