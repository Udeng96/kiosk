import FfVailgeMenu from "@/component/kioskCreate/bus/body/ffvilage/ffVailgeMenu.jsx";
import FfvialgeItem from "@/component/kioskCreate/bus/body/ffvilage/ffvialgeItem.jsx";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {BUS_TYPE} from "@/data/const/const.js";

const FfvilageBus = () => {

    const {activeBus} = useCreate(useShallow((state)=> ({
        activeBus: state.activeBus,
    })));

    return(
        <li className={`bus__item ${activeBus.cd === BUS_TYPE.VILL.cd ? 'active' : ''}`}>
            <div className="bus__title">남해 농어촌 버스<p>농어촌 버스는 전 구간 ‘1,000원' 요금으로 이용할 수 있습니다. (시외버스 제외)</p>
            </div>
            <FfvialgeItem/>
            <FfVailgeMenu/>
        </li>
    )

}

export default FfvilageBus