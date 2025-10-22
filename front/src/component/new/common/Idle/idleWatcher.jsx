import {useEffect, useRef} from "react";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {PAGE_TYPE} from "@/data/const/const.js";


const IdleWatcher = ({ timeout}) => {
    const timerRef = useRef(null);
    const setActiveCreatePage = useCreate().actions.setActivePage;
    const setActivePage = useKiosk().actions.setActivePage;
    const pathName = window.location.pathname;
    useEffect(() => {
        const resetTimer = () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(()=>{
                if(pathName.includes("create")){
                    setActiveCreatePage(PAGE_TYPE.START);
                }else{
                    setActivePage(PAGE_TYPE.START);
                }
            }, timeout);
        };

        const events = ["click", "touchstart", "mousemove", "keydown", "scroll"];
        events.forEach((event) => window.addEventListener(event, resetTimer));

        resetTimer(); // 초기 시작

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            events.forEach((event) => window.removeEventListener(event, resetTimer));
        };
    }, [timeout]);

    return null; // 화면에 표시할 필요 없음

}

export default IdleWatcher