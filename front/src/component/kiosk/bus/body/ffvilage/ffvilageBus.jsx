import FfVailgeMenu from "@/component/kiosk/bus/body/ffvilage/ffVailgeMenu.jsx";
import FfvialgeItem from "@/component/kiosk/bus/body/ffvilage/ffvialgeItem.jsx";

const FfvilageBus = () => {

    return(
        <li className="bus__item">
            <div className="bus__title">남해 농어촌 버스<p>농어촌 버스는 전 구간 ‘1,000원' 요금으로 이용할 수 있습니다. (시외버스 제외)</p>
            </div>
            <FfvialgeItem/>
            <FfVailgeMenu/>
        </li>
    )

}

export default FfvilageBus