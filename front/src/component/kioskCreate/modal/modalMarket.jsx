import MARKET_IMG from "@/assets/image/img/standby/img_market_2690x1864.jpg";
import {MODAL_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
const ModalMarket = () => {

    const { activeMenu, setActiveMenu } = useCreate(useShallow((state)=> ({
        activeMenu: state.activeMenu,
        setActiveMenu: state.actions.setActiveMenu
    })));

    return (
        <div id="modal-market" className={`modal ${activeMenu === MODAL_TYPE.MARKET ? '' : 'hidden'}`}>
            <div className="dimmed"></div>
            <div className="modal__content">
                <div className={`modal__frame modal__frame--market ${activeMenu === MODAL_TYPE.MARKET ? 'ani' : ''}`}>
                    <img src={MARKET_IMG} alt="해전통시장 안내도"/>
                </div>
                <div className="modal__footer">
                    <button type="button" className="btn-icon btn-icon--red btn-close modal-close" onClick={()=> setActiveMenu(MODAL_TYPE.NONE)}>나가기</button>
                </div>
            </div>
        </div>
    )

}

export default ModalMarket