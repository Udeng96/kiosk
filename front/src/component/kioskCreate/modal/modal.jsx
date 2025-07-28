import ModalNamhaero from "@/component/kioskCreate/modal/modalNamhaero.jsx";
import ModalFood from "@/component/kioskCreate/modal/modalFood.jsx";
import ModalVisit from "@/component/kioskCreate/modal/modalVisit.jsx";
import ModalMarket from "@/component/kioskCreate/modal/modalMarket.jsx";
import ModalTourInfo from "@/component/kioskCreate/modal/modalTourInfo.jsx";
import ModalCctv from "@/component/kioskCreate/modal/modalCctv.jsx";

const Modal = () => {

    return(
        <>
            <ModalCctv/>
            <ModalNamhaero/>
            <ModalFood/>
            <ModalVisit/>
            <ModalMarket/>
            <ModalTourInfo/>
        </>
    )
}
export default Modal;