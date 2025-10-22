import {MODAL_TYPE, WEB_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";

const SecondPage = ({isCreate}) => {

    const {setActiveCreateWeb, setActiveCreateModal} = useCreate(useShallow((state) => ({
        setActiveCreateWeb: state.actions.setActiveWeb,
        setActiveCreateModal: state.actions.setActiveModal
    })))

    const {setActiveWeb} = useKiosk(useShallow((state) => ({
        setActiveWeb: state.actions.setActiveWeb,
    })))

    const handleModal = (modal) => {
        if (isCreate) {
            setActiveCreateModal(modal)
        }
    }

    const handleCard = (web) => {
        if (isCreate) {
            setActiveCreateWeb(web)
        } else {
            setActiveWeb(web)
        }
    }

    return (
        <section className="create_standby__item menu">
            <div className="kiosk-frame">
                <ul>
                    <li className="kiosk__item card-01" onClick={() => handleModal(MODAL_TYPE.MARKET)}>
                        {
                            isCreate &&
                            <div className="kiosk-info"><p>남해전통시장 <br/>안내도 보기</p></div>
                        }
                    </li>
                    <li className="kiosk__item card-03" onClick={() => handleCard(WEB_TYPE.NAMHAERO)}></li>
                    <li className="kiosk__item card-04" onClick={() => handleCard(WEB_TYPE.NAMHAEROFOOD)}></li>
                    <li className="kiosk__item card-05" onClick={() => handleCard(WEB_TYPE.VISIT)}></li>
                </ul>
            </div>
        </section>
    )

}

export default SecondPage