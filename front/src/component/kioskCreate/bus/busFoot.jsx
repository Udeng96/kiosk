import {BUS_TYPE, BUS_TYPE_LIST, PAGE_TYPE} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";

const BusFoot = () => {

    const {activeBus, setActiveBus, setActivePage} = useCreate(useShallow((state)=> ({
        activeBus: state.activeBus,
        setActiveBus: state.actions.setActiveBus,
        setActivePage: state.actions.setActivePage
    })));

    const handleClsBtn = () => {
        setActivePage(PAGE_TYPE.MAIN);
        setActiveBus(BUS_TYPE.NONE);
    }

    return(
        <div className="bus__footer">
            <button type="button"
                    className="btn-icon btn-icon--red btn-close modal-close black"
                    onClick={()=> handleClsBtn()}>나가기
            </button>
            <div className="frame">
                {
                    BUS_TYPE_LIST.map((item, index)=>(
                        <button type="button" className={`btn-navi ${index===0 ? 'btn-navi--home' : ''} ${activeBus.cd === item.cd ? 'active' : ''}`} onClick={()=> setActiveBus(item)}>{item.nm}</button>
                    ))
                }
            </div>
        </div>
    )

}

export default BusFoot