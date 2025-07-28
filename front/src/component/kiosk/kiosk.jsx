import Stanby from "@/component/kiosk/stanby/stanby.jsx";

import Main from "@/component/kiosk/main/main.jsx";
import Twelve from "@/component/kiosk/twelve/Twelve.jsx";
import Bus from "@/component/kiosk/bus/bus.jsx";
import Modal from "@/component/kiosk/modal/modal.jsx";
import Header from "@/component/header.jsx";
import '@/assets/css/dashboard/main/standby.css';



const Kiosk = () => {

    return (
        <div className="wrap">
            <Header/>
            <main>
                <Stanby/>
                <Main/>
                <Twelve/>
                <Bus/>
                <Modal/>
            </main>
        </div>
    )
}

export default Kiosk