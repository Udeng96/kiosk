import {IFRAME_URL, WEB_TYPE} from "@/data/const/const.js";
import {useEffect, useRef} from "react";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";

const NangmanCard = ({isCreate, isShow}) => {

    const setActiveCreateWeb = useCreate().actions.setActiveWeb;
    const setActiveWeb = useKiosk().actions.setActiveWeb;

    const iframeRef = useRef(null);

    useEffect(() => {
        if (isShow && iframeRef.current) {
            iframeRef.current.src = IFRAME_URL.TOUR;
        }
    }, [isShow])

    const handleClsBtn = () => {
        if (isCreate) {
            setActiveCreateWeb(WEB_TYPE.NONE);
        } else {
            setActiveWeb(WEB_TYPE.NONE);
        }
    }

    const sendScrollMessage = (distance) => {
        iframeRef.current?.contentWindow?.postMessage(
            {type: "scrollDown", value: distance},
            "*" // 보안을 위해 실제 origin 예: "https://www.visitnamhae.go.kr" 로 바꾸세요
        );
    };

    const handlePrev = () => sendScrollMessage(1900); // 아래로 1900px
    const handleNext = () => sendScrollMessage(-1900); // 위로 1900px

    return (
        <div id="modal-tourplatform" className={`modal ${isShow ? '' : 'hidden'}`}>
            <div className="dimmed"></div>
            <div className="modal__content">
                <div className={`modal__frame ${isShow ? 'ani' : ''} iframe-scroll-wrapper`}>
                    <iframe
                        ref={iframeRef}
                        className={'iframe-scroll'}
                        src={IFRAME_URL.TOUR}
                        allow="encrypted-media"
                        width="900"
                        height="2000"
                        style={{backgroundColor: '#fff', marginBottom: '80px'}}
                        title="낭만남해 홈페이지">
                    </iframe>
                    <div className="modal__footer">
                        <button type="button" className="btn-icon btn-icon--red btn-close"
                                onPointerDown={() => handleClsBtn(WEB_TYPE.NONE)}></button>
                        {/*<div>*/}
                        {/*    <button type="button" className="btn-icon btn-icon--blue page btn-next "*/}
                        {/*            onPointerDown={() => handleNext()}></button>*/}
                        {/*    <button type="button" className="btn-icon btn-icon--blue page btn-prev "*/}
                        {/*            onPointerDown={() => handlePrev()}></button>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NangmanCard