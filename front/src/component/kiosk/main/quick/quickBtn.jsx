import {useKiosk} from "@/store/kioskZustand.jsx";
import {BUS_TYPE, PAGE_TYPE} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";

const QuickBtn = () => {

    const {setActivePage, setActiveBus} = useKiosk(useShallow((state)=> ({
        setActivePage: state.actions.setActivePage,
        setActiveBus: state.actions.setActiveBus

    })));
    const handleBusBtn = () => {
        setActivePage(PAGE_TYPE.BUS);
        setActiveBus(BUS_TYPE.PUBLIC);
    }
    return(
        <div className="change-mode">
            <button type="button" onClick={()=> setActivePage(PAGE_TYPE.TWELVE)} className="btn-change btn-change--view"><i></i>남해
                12경 보기
            </button>
            <button type="button" onClick={()=> handleBusBtn()} className="btn-change btn-change--bus">
                <i></i>버스 노선 보기
            </button>
        </div>
    )

}

export default QuickBtn