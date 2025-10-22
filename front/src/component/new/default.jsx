import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";
import Header from "@/component/new/common/header.jsx";
import Page from "@/component/new/common/page/page.jsx";
import Card from "@/component/new/common/page/second/card/card.jsx";
import TourModal from "@/component/new/common/page/third/modal/tour/tourModal.jsx";
import BusModal from "@/component/new/common/page/third/modal/bus/busModal.jsx";
import PlaceModal from "@/component/new/common/page/third/modal/place/placeModal.jsx";
import CctvNorm from "@/component/new/common/page/third/modal/cctv/small/cctvNorm.jsx";
import CctvWhole from "@/component/new/common/page/third/modal/cctv/whole/cctvWhole.jsx";
import {PAGE_TYPE} from "@/data/const/const.js";
import ThirdPage from "@/component/new/common/page/third/thirdPage.jsx";

const Default = () => {

    const {activePage} = useKiosk(useShallow((state) => ({
        activePage: state.activePage
    })))
    return(
        <div className="wrap">
            <Header/>
            <main>
                <Page isCreate={false}/>
                <Card isCreate={false}/>
                <TourModal isCreate={false}/>
                <BusModal isCreate={false}/>
                <PlaceModal isCreate={false}/>
                <CctvNorm isCreate={false}/>
                <CctvWhole isCreate={false}/>

                {
                    activePage === PAGE_TYPE.THIRD &&
                    <ThirdPage isCreate={false} isShow={activePage === PAGE_TYPE.THIRD}/>
                }
            </main>
        </div>
    )
}

export default Default