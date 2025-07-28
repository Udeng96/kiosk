import {useKiosk} from "@/store/kioskZustand.jsx";
import {MODAL_TYPE, PAGE_TYPE} from "@/data/const/const.js";
import {useShallow} from "zustand/react/shallow";

const MenuTour = () => {
    const {setActivePage} = useKiosk(useShallow((state)=>({
        setActivePage: state.actions.setActivePage
    })));
    return(
        <li className="kiosk__item card-02" onClick={()=>setActivePage(PAGE_TYPE.MAIN)}><p>관광지 정보<br/>바로가기</p></li>
    )
}

export default MenuTour