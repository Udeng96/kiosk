import BaraeMenu from "@/component/kiosk/main/page/barae/baraeMenu.jsx";
import BaraeFrame from "@/component/kiosk/main/page/barae/baraeFrame.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {MAIN_TYPE} from "@/data/const/const.js";

const Barae = () => {
    const {activeMainType} = useKiosk(useShallow((state)=>({
        activeMainType : state.activeMainType
    })))
    return (
        <section className={`baraegil tab__item ${activeMainType === MAIN_TYPE.BARAE ? 'active' : ''}`}>
            <BaraeFrame/>
            <BaraeMenu/>
        </section>
    )

}

export default Barae