import PrVideo from "@/component/kiosk/stanby/prVideo.jsx";
import Menu from "@/component/kiosk/stanby/menu/menu.jsx";
import {useEffect, useRef, useState} from "react";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {PAGE_TYPE} from "@/data/const/const.js";

const Stanby = () => {

    const [index, setIndex] = useState(0);
    const standbyListRef = useRef(null);
    const activePage = useKiosk((state) => state.activePage);

    useEffect(() => {
        if (standbyListRef) {
            if (index === 0) {
                standbyListRef.current.style.transform = `translateX(0)`;
            } else {
                standbyListRef.current.style.transform = `translateX(-100%)`;
            }
        }

    }, [standbyListRef, index])

    const updateSlice = () => {
        if (index === 1) {
            setIndex(0);
        } else {
            setIndex(1);
        }
    }

    return (
        <section className={`screen standby ${activePage === PAGE_TYPE.STANDBY ? '' : 'hidden'}`}>
            <div className="standby__list" ref={standbyListRef}>
                <PrVideo/>
                <Menu/>

            </div>
            <button type="button" onClick={updateSlice} className={`btn-intro ${index === 1 ? 'hidden' : ''}`}></button>
            <button type="button" onClick={updateSlice} className={`btn-back ${index === 0 ? 'hidden' : ''}`}>홍보영상 보러
                가기
            </button>
        </section>
    )

}

export default Stanby