import {MODAL_TYPE, PAGE_TYPE, WEB_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";

const SecondPage = ({isCreate}) => {

    const {setActiveCreateWeb, setActiveCreateModal, setActiveCreatePage} = useCreate(useShallow((state) => ({
        setActiveCreateWeb: state.actions.setActiveWeb,
        setActiveCreateModal: state.actions.setActiveModal,
        setActiveCreatePage : state.actions.setActivePage
    })))

    const {setActiveWeb, setActivePage} = useKiosk(useShallow((state) => ({
        setActiveWeb: state.actions.setActiveWeb,
        setActivePage : state.actions.setActivePage
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

    const handleBtn = () => {
        if(isCreate){
            setActiveCreatePage(PAGE_TYPE.THIRD)
        }else{
            setActivePage(PAGE_TYPE.THIRD)
        }
    }

    return (
        <section className="create_standby__item menu">
            <div className="kiosk-frame">
                <ul>
                    <div>

                        <li className="kiosk__item card-01" onPointerDown={() => handleModal(MODAL_TYPE.MARKET)}>
                            {
                                isCreate &&
                                <div className="kiosk-info"><p>남해전통시장 <br/>안내도 보기</p></div>
                            }
                        </li>
                    </div>
                    <div>
                        <li className="kiosk__item card-03" onPointerDown={() => handleCard(WEB_TYPE.VISIT)}></li>
                        <li className="kiosk__item card-05" onPointerDown={() => handleCard(WEB_TYPE.NAMHAERO)}></li>
                    </div>
                    <div>
                        <li className="kiosk__item card-04" onPointerDown={() => handleCard(WEB_TYPE.MALL)}></li>
                        <li className="kiosk__item card-06" onPointerDown={() => handleBtn()}></li>
                    </div>
                </ul>
            </div>
        </section>
    )

}

export default SecondPage