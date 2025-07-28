import {useShallow} from "zustand/react/shallow";
import {TWELVE_ITEM_LIST, TWELVE_ITEM_NONE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";

const ContentFoot = () => {

    const {activeTwelve, setActiveTwelve} = useCreate(useShallow((state)=> ({
        activeTwelve: state.activeTwelve,
        setActiveTwelve: state.actions.setActiveTwelve,
    })))

    const handlePrevBtn = () => {
        setActiveTwelve(TWELVE_ITEM_LIST[activeTwelve.index-2]);
    }

    const handleNextBtn = () => {
        setActiveTwelve(TWELVE_ITEM_LIST[activeTwelve.index]);
    }

    return(
        <div className="view__footer">
            <button type="button" className="btn-back" onClick={()=> setActiveTwelve(TWELVE_ITEM_NONE)}>12경 메인으로 돌아가기</button>
            <div className="frame">
                {
                    activeTwelve.index >1 &&
                    <button type="button" className="btn-icon btn-icon--blue btn-prev black" onClick={handlePrevBtn}><p>제 {activeTwelve.index-1}경</p></button>
                }
                {
                    activeTwelve.index < 12 &&
                    <button type="button" className="btn-icon--blue btn-next black" onClick={handleNextBtn}><p>제 {activeTwelve.index+1}경</p></button>
                }
            </div>
        </div>
    )

}

export default ContentFoot