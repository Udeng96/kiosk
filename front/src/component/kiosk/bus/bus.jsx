import BusBody from "@/component/kiosk/bus/busBody.jsx";
import BusFoot from "@/component/kiosk/bus/busFoot.jsx";
import {PAGE_TYPE} from "@/data/const/const.js";
import {useKiosk} from "@/store/kioskZustand.jsx";

const Bus = () => {

    const activePage = useKiosk((state) => state.activePage);
    return (
        <section className={`screen bus ${activePage === PAGE_TYPE.BUS ? '' : 'hidden'}`}>
            <BusBody/>
            <BusFoot/>
        </section>
    )

}
export default Bus