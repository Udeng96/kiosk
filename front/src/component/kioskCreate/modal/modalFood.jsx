import {IFRAME_URL, MODAL_TYPE} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";

const ModalFood = () => {

    const { activeMenu, setActiveMenu } = useCreate(useShallow((state)=> ({
        activeMenu: state.activeMenu,
        setActiveMenu: state.actions.setActiveMenu
    })));
    return (
        <div id="modal-storyFood" className={`modal ${activeMenu === MODAL_TYPE.FOOD ? '' : 'hidden'}`}>
            <div className="dimmed"></div>
            <div className="modal__content">
                <div className={`modal__frame ${activeMenu === MODAL_TYPE.FOOD ? 'ani' : ''}`}>
                    <iframe
                        src={IFRAME_URL.FOOD}
                        allow="encrypted-media"
                        width="810"
                        height="1800"
                        style={{backgroundColor:'#fff',marginBottom:'80px'}}
                        title="남해의 먹거리 추천 페이지">
                    </iframe>
                </div>
                <div className="modal__footer">
                    <button type="button" className="btn-icon btn-icon--red btn-close modal-close" onClick={()=> setActiveMenu(MODAL_TYPE.NONE)}>나가기</button>
                </div>
            </div>
        </div>
    )

}
export default ModalFood