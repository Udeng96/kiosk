import TourFrame from "@/component/kiosk/main/page/tour/tourFrame.jsx";
import TourMenu from "@/component/kiosk/main/page/tour/tourMenu.jsx";
import {useShallow} from "zustand/react/shallow";
import {MAIN_TYPE} from "@/data/const/const.js";
import {useKiosk} from "@/store/kioskZustand.jsx";

const Tour = () => {

    const {activeMainType} = useKiosk(useShallow((state)=> ({
        activeMainType: state.activeMainType,
    })));

    return(
        <section className={`tour tab__item ${activeMainType === MAIN_TYPE.TOUR ? 'active' : ''}`}>
            <TourFrame/>
            <TourMenu/>
        </section>
    )

}

export default Tour