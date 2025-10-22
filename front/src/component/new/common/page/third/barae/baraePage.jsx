import {MENU_TYPE} from "@/data/const/const.js";
import BaraeMenu from "@/component/new/common/page/third/barae/baraeMenu.jsx";
import BaraeItem from "@/component/new/common/page/third/barae/baraeItem.jsx";

const BaraePage = ({isCreate, activeMenu, activeBarae}) => {

    return (
        <section className={`baraegil tab__item ${activeMenu === MENU_TYPE.BARAE ? 'active' : ''}`}>
            <BaraeMenu isCreate={isCreate} activeBarae={activeBarae} />
            <BaraeItem isShow={activeMenu === MENU_TYPE.BARAE} barae={activeBarae} activeMenu={activeMenu}/>
        </section>
    )

}
export default BaraePage