import {useCreate} from "@/store/createZustand.jsx";
import {MODAL_TYPE} from "@/data/const/const.js";

const SecondStandby = () => {
    const setActiveMenu = useCreate().actions.setActiveMenu;
    return(
        <section className="create_standby__item menu">
            <div className="kiosk-frame">
                <ul>
                    <li className="kiosk__item card-01" onClick={() => setActiveMenu(MODAL_TYPE.MARKET)}><div className="kiosk-info"><p>남해전통시장 <br/>안내도 보기</p></div></li>
                    <li className="kiosk__item card-03" onClick={() => setActiveMenu(MODAL_TYPE.NAMHAERO)}></li>
                    <li className="kiosk__item card-04" onClick={() => setActiveMenu(MODAL_TYPE.FOOD)}></li>
                    <li className="kiosk__item card-05" onClick={() => setActiveMenu(MODAL_TYPE.VISIT)}></li>
                </ul>
            </div>
        </section>
    )
}

export default SecondStandby