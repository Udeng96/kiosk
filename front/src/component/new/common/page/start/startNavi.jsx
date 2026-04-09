import {PAGE_TYPE} from "@/data/const/const.js";
import {useEffect, useState} from "react";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";

const StartNavi = ({isCreate}) => {

    const {setActiveCreatePage} = useCreate(useShallow((state)=> ({
        setActiveCreatePage: state.actions.setActivePage
    })))

    const { setActivePage} = useKiosk(useShallow((state)=> ({
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
        <div className="intro-frame" onPointerDown={()=>handleBtn()}>
        </div>
    )

}

export default StartNavi