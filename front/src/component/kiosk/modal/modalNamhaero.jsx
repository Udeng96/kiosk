import {useKiosk} from "@/store/kioskZustand.jsx";
import {IFRAME_URL, MODAL_TYPE} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";

const ModalNamhaero = () => {

    const { activeModalType, setActiveModalType } = useKiosk(useShallow((state)=> ({
        activeModalType: state.activeModalType,
        setActiveModalType: state.actions.setActiveModalType
    })));
    return (
        <div id="modal-namhaeroOn" className={`modal ${activeModalType === MODAL_TYPE.NAMHAERO ? '' : 'hidden'}`}>
            <div className="dimmed"></div>
            <div className={`modal__content`}>
                <div className={`modal__frame ${activeModalType === MODAL_TYPE.NAMHAERO ? 'ani' : ''}`}>
                    <iframe
                        src={IFRAME_URL.NAMHAERO}
                        allow="encrypted-media"
                        width="810"
                        height="1800"
                        style={{backgroundColor:'#fff',marginBottom:'80px'}}
                        title="낭만남해 홈페이지">
                    </iframe>
                </div>
                <div className="modal__footer">
                    <button type="button" className="btn-icon btn-icon--red btn-close modal-close" onClick={()=> setActiveModalType(MODAL_TYPE.NONE)}>나가기</button>
                </div>
            </div>
        </div>
    )

}

export default ModalNamhaero