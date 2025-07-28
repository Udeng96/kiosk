import {MAIN_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import BaraeFrame from "@/component/kioskCreate/main/page/barae/baraeFrame.jsx";
import BaraeMenu from "@/component/kioskCreate/main/page/barae/baraeMenu.jsx";

const Barae = () => {

    const activeMainMenu = useCreate((state)=> state.activeMainMenu)
    return(
        <section className={`baraegil tab__item ${activeMainMenu === MAIN_TYPE.BARAE ? 'active' : ''}`}>
            <BaraeFrame/>
            <BaraeMenu/>
        </section>
    )

}

export default Barae