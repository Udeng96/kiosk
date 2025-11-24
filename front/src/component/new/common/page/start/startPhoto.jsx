import {WEB_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";

const StartPhoto = ({isCreate}) => {

    const setActiveCreateWeb = useCreate().actions.setActiveWeb;
    const setActiveWeb = useKiosk().actions.setActiveWeb;

    const handleBtn = (web) => {
        if(isCreate){
            setActiveCreateWeb(web)
        }else{
            setActiveWeb(web)
        }
    }

    return (
        <div className="intro-frame" onPointerDown={() => handleBtn(WEB_TYPE.NANGMAN)}>
        </div>
    )
}
export default StartPhoto
