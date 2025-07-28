import Header from "@/component/header.jsx";
import '@/assets/css/dashboard/create/standby.css';
import Standby from "@/component/kioskCreate/standby/standby.jsx";
import Modal from "@/component/kioskCreate/modal/modal.jsx";
import CreateMain from "@/component/kioskCreate/main/createMain.jsx";
import Twelve from "@/component/kioskCreate/twelve/Twelve.jsx";
import Bus from "@/component/kioskCreate/bus/bus.jsx";

const Create = () => {

    return(
        <div className="wrap">
            <Header/>
            <main>
                <CreateMain/>
                <Standby/>
                <Modal/>
                <Twelve/>
                <Bus/>
            </main>
        </div>
    )
}

export default Create