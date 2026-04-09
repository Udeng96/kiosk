import {BUS_TYPE} from "@/data/const/const.js";
import BusVilliageMenu from "@/component/new/common/page/third/modal/bus/villiage/busVilliageMenu.jsx";
import BusVillageContent from "@/component/new/common/page/third/modal/bus/villiage/busVillageContent.jsx";

const BusVilliage = ({isCreate,activeBus}) => {
    return(
        <li className={`bus__item ${activeBus.cd === BUS_TYPE.VILL.cd ? 'active' : ''}`}>
            <div className="bus__title">남해 농어촌 버스<p>농어촌 버스는 전 구간 ‘1,000원' 요금으로 이용할 수 있습니다. (시외버스 제외)</p></div>
            <BusVilliageMenu isCreate={isCreate} activeBus={activeBus}/>
            <BusVillageContent isCreate={isCreate} activeBus={activeBus}/>
        </li>
    )
}
export default BusVilliage