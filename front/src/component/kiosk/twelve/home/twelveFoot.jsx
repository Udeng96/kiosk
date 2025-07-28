import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {PAGE_TYPE, TWELVE_ITEM_NONE} from "@/data/const/const.js";

const TwelveFoot = () => {
    const {setActivePage, setActiveTwelve} = useKiosk(useShallow((state)=> ({
        setActivePage: state.actions.setActivePage,
        setActiveTwelve: state.actions.setActiveTwelve
    })));
    const handleClsBtn = () => {
        setActivePage(PAGE_TYPE.MAIN);
        setActiveTwelve(TWELVE_ITEM_NONE);
    }
    return(
        <div className="view__footer">
            <button type="button" onClick={handleClsBtn}
                    className="btn-icon btn-icon--red btn-close modal-close black">나가기
            </button>
        </div>
    )
}

export default TwelveFoot