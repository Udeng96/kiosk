import {
    NAMHAE_BARAE_LIST,
    NAMHAE_BARAE_SECOND_LIST,
    NAMHAE_BARAE_THREE_LIST
} from "@/data/const/const.js";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useEffect, useRef, useState} from "react";

const BaraeMenu = () => {

    const {setActiveBaraeArea, activeBaraeArea} = useKiosk(useShallow((state)=>({
        setActiveBaraeArea : state.actions.setActiveBaraeArea,
        activeBaraeArea : state.activeBaraeArea
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


    return(
        <div className="tab-wrap">
            <button className="btn-tab-prev" disabled={currentIndex === 0} onClick={handlePrev}></button>
            <div className="slide-wrap">
                <div className="btn-tab-list" ref={tabListRef}>
                    {
                        NAMHAE_BARAE_LIST.map((area,index)=> (
                            <button type="button" className={`btn-tab ${ area.cd === "NONE" ? 'btn-tab--home' : ''} ${activeBaraeArea.cd === area.cd ? 'active' : ''}`} onClick={()=> setActiveBaraeArea(area)} key={area.cd}>
                                {
                                    area.cd !== "NONE" &&
                                    <i>{index}</i>
                                }
                                {area.nm}
                            </button>
                        ))
                    }
                    {
                        NAMHAE_BARAE_SECOND_LIST.map((area,index)=>(
                            <button type="button" className="btn-tab" onClick={()=> setActiveBaraeArea(area)}><i>{index+1}</i>{area.nm}</button>
                        ))
                    }
                    {
                        NAMHAE_BARAE_THREE_LIST.map((area,index)=>(
                            <button type="button" className="btn-tab" onClick={()=> setActiveBaraeArea(area)}><i>{index+1}</i>{area.nm}</button>
                        ))
                    }
                </div>
            </div>
            <button className="btn-tab-next" onClick={handleNext} disabled={currentIndex === 2}></button>
        </div>
    )

}

export default BaraeMenu