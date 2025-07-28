import PublicBus from "@/component/kiosk/bus/body/publicBus.jsx";
import WalkBus from "@/component/kiosk/bus/body/walkBus.jsx";
import FfvilageBus from "@/component/kiosk/bus/body/ffvilage/ffvilageBus.jsx";

const BusBody = () => {

    return(
        <div className="bus__body">
            <ul className="bus__list">
                <PublicBus/>
                <WalkBus/>
                <FfvilageBus/>
            </ul>
        </div>
    )

}

export default BusBody