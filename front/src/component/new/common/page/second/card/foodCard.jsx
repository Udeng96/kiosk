import {IFRAME_URL, MODAL_TYPE, WEB_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useEffect, useRef} from "react";

const FoodCard = ({isCreate, isShow}) => {

    const setActiveCreateWeb = useCreate().actions.setActiveWeb;
    const setActiveWeb = useKiosk().actions.setActiveWeb;

    const iframeRef = useRef(null);

    useEffect(() => {
        if(isShow && iframeRef.current){
            iframeRef.current.src = IFRAME_URL.FOOD;
        }
    },[isShow])

    const handleClsBtn = () => {
        if(isCreate){
            setActiveCreateWeb(WEB_TYPE.NONE);
        }else{
            setActiveWeb(WEB_TYPE.NONE);
        }
    }


    return(
        <div id="modal-storyFood" className={`modal ${isShow ? '' : 'hidden'}`}>
            <div className="dimmed"></div>
            <div className="modal__content">
                <div className={`modal__frame ${isShow ? 'ani' : ''} iframe-scroll-wrapper`}>
                    <iframe
                        className={'iframe-scroll'}
                        ref={iframeRef}
                        src={IFRAME_URL.FOOD}
                        allow="encrypted-media"
                        width="810"
                        height="1800"
                        style={{backgroundColor:'#fff',marginBottom:'80px'}}
                        title="남해의 먹거리 추천 페이지">
                    </iframe>
                </div>
                <div className="modal__footer">
                    <button type="button" className="btn-icon btn-icon--red btn-close modal-close" onClick={()=> handleClsBtn()}>나가기</button>
                </div>
            </div>
        </div>
    )

}

export default FoodCard