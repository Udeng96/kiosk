import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {PAGE_TYPE} from "@/data/const/const.js";
import {useEffect, useState} from "react";
import {useKiosk} from "@/store/kioskZustand.jsx";

const ArrowBtn = ({isCreate}) => {

    const [page, setPage] = useState(PAGE_TYPE.START);

    const {activeCreatePage, setActiveCreatePage} = useCreate(useShallow((state)=> ({
        activeCreatePage: state.activePage,
        setActiveCreatePage: state.actions.setActivePage
    })))

    const {activePage, setActivePage} = useKiosk(useShallow((state)=> ({
        activePage : state.activePage,
        setActivePage : state.actions.setActivePage
    })))

    useEffect(() =>{
        if(isCreate){
            setPage(activeCreatePage);
        }else{
            setPage(activePage);
        }
    },[activeCreatePage, activePage, isCreate])

    const handlePrevBtn = () => {
        if(page === PAGE_TYPE.THIRD){
            setPage(PAGE_TYPE.SECOND);
            if(isCreate) {
                setActiveCreatePage(PAGE_TYPE.SECOND);
            }else{
                setActivePage(PAGE_TYPE.SECOND);
            }
        }else if(page === PAGE_TYPE.SECOND){
            setPage(PAGE_TYPE.START);
            if(isCreate) {
                setActiveCreatePage(PAGE_TYPE.START);
            }else{
                setActivePage(PAGE_TYPE.START);
            }
        }
    }

    const handleNextBtn = () => {
        if(page === PAGE_TYPE.START){
            setPage(PAGE_TYPE.SECOND);
            if(isCreate) {
                setActiveCreatePage(PAGE_TYPE.SECOND);
            }else{
                setActivePage(PAGE_TYPE.SECOND);
            }
        }else if(page === PAGE_TYPE.SECOND){
            setPage(PAGE_TYPE.THIRD);
            if(isCreate) {
                setActiveCreatePage(PAGE_TYPE.THIRD);
            }else{
                setActivePage(PAGE_TYPE.THIRD);
            }
        }
    }

    return(
        <div className="indicator">
            <button type="button" className={`btn-icon video-btn ${page === PAGE_TYPE.START ? 'hidden' : ''}`} onPointerDown={() => handlePrevBtn()}/>
        </div>
    )

}

export default ArrowBtn