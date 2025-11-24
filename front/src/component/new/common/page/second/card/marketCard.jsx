import MARKET_IMG from "@/assets/image/img/standby/img_market_2690x1864.jpg";
import {WEB_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";


const MarketCard = ({isShow}) => {
    const setActiveCreateModal = useCreate().actions.setActiveModal;


    return (
        <div id="modal-market" className={`modal ${isShow ? '' : 'hidden'}`}>
            <div className="dimmed"></div>
            <div className="modal__content">
                <div className={`modal__frame modal__frame--market ${isShow ? 'ani' : ''}`}>
                    <img src={MARKET_IMG} alt="해전통시장 안내도"/>
                </div>
                <div className="modal__footer">
                    <button type="button" className="btn-icon btn-icon--red btn-close modal-close"
                            onPointerDown={() => setActiveCreateModal(WEB_TYPE.NONE)}>나가기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MarketCard