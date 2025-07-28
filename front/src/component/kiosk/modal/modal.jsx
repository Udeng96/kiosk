import ModalCctv from "@/component/kiosk/modal/modalCctv.jsx";
import ModalTour from "@/component/kiosk/modal/modalTour.jsx";
import ModalNamhaero from "@/component/kiosk/modal/modalNamhaero.jsx";
import ModalFood from "@/component/kiosk/modal/modalFood.jsx";
import ModalVisit from "@/component/kiosk/modal/modalVisit.jsx";
import ModalTourInfo from "@/component/kiosk/modal/modalTourInfo.jsx";

const Modal = () => {

    return(
        <>
            <ModalCctv/>
            <ModalTour/>
            <ModalNamhaero/>
            <ModalFood/>
            <ModalVisit/>
            <ModalTourInfo/>
        </>
    )
}
export default Modal;