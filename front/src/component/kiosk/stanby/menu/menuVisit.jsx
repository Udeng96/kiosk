import {useKiosk} from "@/store/kioskZustand.jsx";
import {MODAL_TYPE} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";

const MenuVisit =() => {
    const {setActiveModalType} = useKiosk(useShallow((state)=>({
        setActiveModalType: state.actions.setActiveModalType
    })));
    return(
        <li className="kiosk__item card-05" onClick={()=>setActiveModalType(MODAL_TYPE.VISIT)}></li>

    )

}

export default MenuVisit