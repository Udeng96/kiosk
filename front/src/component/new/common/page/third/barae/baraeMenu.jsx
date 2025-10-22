import {
    NAMHAE_BARAE,
    NAMHAE_BARAE_LIST,
    NAMHAE_BARAE_SECOND_LIST,
    NAMHAE_BARAE_THREE_LIST
} from "@/data/const/const.js";
import {useEffect, useRef, useState} from "react";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";

const BaraeMenu = ({isCreate, activeBarae}) => {

    const {selectCreateBarae, setSelectCreateBarae} = useCreate(useShallow((state)=> ({
        selectCreateBarae : state.selectBarae,
        setSelectCreateBarae : state.actions.setSelectBarae
    })))

    const {selectBarae, setSelectBarae} = useKiosk(useShallow((state)=> ({
        selectBarae : state.selectBarae,
        setSelectBarae : state.actions.setSelectBarae
    })))

    const tabListRef = useRef(null);
    const slideCounts = [7,6];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidePositions, setSlidePositions] = useState([]);

    useEffect(() => {
        let pos = 0;
        while(pos < 23){
            setSlidePositions((prev) => [...prev, pos]);
            pos += slideCounts[slidePositions.length % slideCounts.length];
        }
    }, []);

    useEffect(()=>{
        let offset = slidePositions[currentIndex] * 334;
        if(currentIndex === 0){
            offset = 0;
        }else if(currentIndex === 1){
            offset=2004;
        }else{
            offset=4342;
        }
        tabListRef.current.style.transform = `translateX(calc(-${offset}px - 3px))`;
    },[currentIndex])

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < slidePositions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleBarae = (barae) => {
        if(isCreate){
            setSelectCreateBarae(barae)
        }else{
            setSelectBarae(barae);
        }
    }

    return(
        <div className="tab-wrap">
            <button className="btn-tab-prev" disabled={currentIndex === 0} onClick={handlePrev}></button>
            <div className="slide-wrap">
                <div className="btn-tab-list" ref={tabListRef}>
                    {
                        NAMHAE_BARAE_LIST.map((barae,index)=> (
                            <button type="button" className={`btn-tab ${barae.cd === NAMHAE_BARAE.NONE.cd ? 'btn-tab--home' : ''} ${activeBarae.cd === barae.cd ? 'active' : ''}`} onClick={()=> handleBarae(barae)} key={barae.cd}>
                                {
                                    barae.cd !== "NONE" &&
                                    <i>{index}</i>
                                }
                                {barae.nm}
                            </button>
                        ))
                    }
                    {
                        NAMHAE_BARAE_SECOND_LIST.map((barae,index)=>(
                            <button type="button" className="btn-tab" onClick={()=> handleBarae(barae)}><i>{index+1}</i>{barae.nm}</button>
                        ))
                    }
                    {
                        NAMHAE_BARAE_THREE_LIST.map((barae,index)=>(
                            <button type="button" className="btn-tab" onClick={()=> handleBarae(barae)}><i>{index+1}</i>{barae.nm}</button>
                        ))
                    }
                </div>
            </div>
            <button className="btn-tab-next" onClick={handleNext} disabled={currentIndex === 2}></button>
        </div>
    )

}

export default BaraeMenu