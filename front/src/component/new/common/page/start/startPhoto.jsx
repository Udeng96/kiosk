import {PAGE_TYPE, WEB_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useShallow} from "zustand/react/shallow";

const StartPhoto = ({isCreate}) => {

    const {activeCreatePage, setActiveCreatePage} = useCreate(useShallow((state)=> ({
        activeCreatePage: state.activePage,
        setActiveCreatePage: state.actions.setActivePage
    })))

    const {activePage, setActivePage} = useKiosk(useShallow((state)=> ({
        activePage : state.activePage,
        setActivePage : state.actions.setActivePage
    })))

    const handleBtn = (web) => {
        if(isCreate){
            setActiveCreatePage(PAGE_TYPE.SECOND);
        }else{
            setActivePage(PAGE_TYPE.SECOND);
        }
    }

    return (
        <div className="intro-frame" onPointerDown={() => handleBtn()}>
        </div>
    )
}
export default StartPhoto
