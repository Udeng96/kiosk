import {PAGE_TYPE} from "@/data/const/const.js";
import {useEffect, useState} from "react";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";

const StartNavi = ({isCreate}) => {

    const {activeCreatePage, setActiveCreatePage} = useCreate(useShallow((state)=> ({
        activeCreatePage: state.activePage,
        setActiveCreatePage: state.actions.setActivePage
    })))

    const {activePage, setActivePage} = useKiosk(useShallow((state)=> ({
        activePage : state.activePage,
        setActivePage : state.actions.setActivePage
    })))


    const handleBtn = () => {
        if(isCreate){
            setActiveCreatePage(PAGE_TYPE.THIRD)
        }else{
            setActivePage(PAGE_TYPE.THIRD)
        }
    }

    return(
        <div className="intro-frame" onClick={()=>handleBtn()}>
            <p>관광지 정보<br/>바로가기</p>
        </div>
    )

}

export default StartNavi