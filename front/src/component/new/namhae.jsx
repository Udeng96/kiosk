import Header from "@/component/new/common/header.jsx";
import Page from "@/component/new/common/page/page.jsx";
import '@/assets/css/dashboard/create/standby.css';
import Card from "@/component/new/common/page/second/card/card.jsx";
import ThirdPage from "@/component/new/common/page/third/thirdPage.jsx";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {PAGE_TYPE} from "@/data/const/const.js";
import TourModal from "@/component/new/common/page/third/modal/tour/tourModal.jsx";
import BusModal from "@/component/new/common/page/third/modal/bus/busModal.jsx";
import CctvWhole from "@/component/new/common/page/third/modal/cctv/whole/cctvWhole.jsx";
import CctvNorm from "@/component/new/common/page/third/modal/cctv/small/cctvNorm.jsx";
import PlaceModal from "@/component/new/common/page/third/modal/place/placeModal.jsx";
import ChansengModal from "@/component/new/common/page/third/modal/place/chansengModal.jsx";


const Namhae = () => {
    const {activeCreatePage} = useCreate(useShallow((state) => ({
        activeCreatePage: state.activePage
    })))
    return(
        <div className="wrap">
            <Header/>
            <main>

                <Page isCreate={true}/>
                <Card isCreate={true}/>
                <TourModal isCreate={true}/>
                <BusModal isCreate={true}/>
                <PlaceModal isCreate={true}/>
                <ChansengModal isCreate={true}/>
                <CctvNorm isCreate={true}/>
                <CctvWhole isCreate={true}/>

                {
                    activeCreatePage === PAGE_TYPE.THIRD &&
                    <ThirdPage isCreate={true} isShow={activeCreatePage === PAGE_TYPE.THIRD}/>
                }
            </main>
        </div>
        )

}

export default Namhae