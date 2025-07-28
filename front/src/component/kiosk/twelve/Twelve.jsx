import TwelveHead from "@/component/kiosk/twelve/home/twelveHead.jsx";
import TwelveBody from "@/component/kiosk/twelve/home/twelveBody.jsx";
import TwelveFoot from "@/component/kiosk/twelve/home/twelveFoot.jsx";
import Content from "@/component/kiosk/twelve/content/content.jsx";
import ContentFoot from "@/component/kiosk/twelve/content/contentFoot.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {PAGE_TYPE, TWELVE_ITEM_NONE} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";

const Twelve = () => {
    const {activePage,setActivePage, activeTwelve} = useKiosk(useShallow((state)=> ({
        activePage: state.activePage,
        setActivePage: state.actions.setActivePage,
        activeTwelve : state.activeTwelve
    })));


    return (
        <section className={`screen view ${activePage === PAGE_TYPE.TWELVE ? '' : 'hidden'}`}>
            <div className="view__item-wrap">
                <div className={`view__item view__item--home ${activeTwelve.title === TWELVE_ITEM_NONE.title ? 'active' : ''}`}>
                    <TwelveHead/>
                    <TwelveBody/>
                    <TwelveFoot/>
                </div>

                <div className={`view__item view__item--content ${activeTwelve.title !== TWELVE_ITEM_NONE.title ? 'active' : ''}`}>
                    <Content/>
                    <ContentFoot/>
                </div>
            </div>
        </section>
    )

}

export default Twelve