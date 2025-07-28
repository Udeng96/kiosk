import {PAGE_TYPE} from "@/data/const/const.js";
import BusBody from "@/component/kioskCreate/bus/busBody.jsx";
import BusFoot from "@/component/kioskCreate/bus/busFoot.jsx";
import {useCreate} from "@/store/createZustand.jsx";

const Bus = () => {

    const activePage = useCreate((state) => state.activePage);
    return (
        <section className={`screen bus ${activePage === PAGE_TYPE.BUS ? '' : 'hidden'}`}>
            <BusBody/>
            <BusFoot/>
        </section>
    )

}
export default Bus