import {PAGE_TYPE, TWELVE_ITEM_NONE} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";
import TwelveHead from "@/component/kioskCreate/twelve/home/twelveHead.jsx";
import TwelveBody from "@/component/kioskCreate/twelve/home/twelveBody.jsx";
import TwelveFoot from "@/component/kioskCreate/twelve/home/twelveFoot.jsx";
import Content from "@/component/kioskCreate/twelve/content/content.jsx";
import ContentFoot from "@/component/kioskCreate/twelve/content/contentFoot.jsx";

const Twelve = () => {
    const {activePage, activeTwelve} = useCreate(useShallow((state)=> ({
        activePage: state.activePage,
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