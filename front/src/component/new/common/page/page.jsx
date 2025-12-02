import {useShallow} from "zustand/react/shallow";
import {useEffect, useRef, useState} from "react";
import {PAGE_TYPE} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";
import StartPage from "@/component/new/common/page/start/startPage.jsx";
import SecondPage from "@/component/new/common/page/second/secondPage.jsx";
import ArrowBtn from "@/component/new/common/btn/start/arrowBtn.jsx";

const Page = ({isCreate}) => {
    const [page, setPage] = useState(PAGE_TYPE.START);

    const {activeCreatePage} = useCreate(useShallow((state)=> ({
        activeCreatePage: state.activePage,
    })))

    const {activePage} = useKiosk(useShallow((state)=> ({
        activePage : state.activePage,
    })))

    const standbyListRef = useRef(null);

    useEffect(() =>{
        if(isCreate){
            setPage(activeCreatePage);
        }else{
            setPage(activePage);
        }
    },[activeCreatePage, activePage, isCreate])


    useEffect(() => {
        if(page === PAGE_TYPE.START){
            standbyListRef.current.style.transform = `translateX(0)`;
        }else if(page === PAGE_TYPE.SECOND){
            standbyListRef.current.style.transform = `translateX(-100%)`;
        }else{
            standbyListRef.current.style.transform = 'translateX(-200%)';
        }
    }, [page]);

    return(
        <section className={`screen create_standby`}>
            <div className="create_standby__frame">
                <div className="create_standby__list" ref={standbyListRef}>
                    <StartPage isCreate={isCreate}/>
                    <SecondPage isCreate={isCreate}/>
                </div>
            </div>
            <ArrowBtn/>
        </section>
    )
}
export default Page