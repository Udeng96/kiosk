import {useShallow} from "zustand/react/shallow";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useEffect, useState} from "react";
import {MODAL_TYPE, WEB_TYPE} from "@/data/const/const.js";
import NangmanCard from "@/component/new/common/page/second/card/nangmanCard.jsx";
import FoodCard from "@/component/new/common/page/second/card/foodCard.jsx";
import NamhaeroCard from "@/component/new/common/page/second/card/namhaeroCard.jsx";
import VisitCard from "@/component/new/common/page/second/card/visitCard.jsx";
import MarketCard from "@/component/new/common/page/second/card/marketCard.jsx";
import MallCard from "@/component/new/common/page/second/card/mallCard.jsx";

const Card = ({isCreate}) => {

    const {activeCreateWeb, activeModal} = useCreate(useShallow((state) => ({
        activeCreateWeb: state.activeWeb,
        activeModal : state.activeModal
    })))

    const {activeWeb} = useKiosk(useShallow((state) => ({
        activeWeb: state.activeWeb,
    })))

    const [activeCard, setActiveCard] = useState(WEB_TYPE.NONE);

    useEffect(() => {
        if (isCreate) {
            setActiveCard(activeCreateWeb)
        } else {
            setActiveCard(activeWeb)
        }
    }, [isCreate, activeCreateWeb, activeWeb]);


    return (
        <>
            <NangmanCard isCreate={isCreate} isShow={activeCard === WEB_TYPE.NANGMAN}/>
            <NamhaeroCard isCreate={isCreate} isShow={activeCard === WEB_TYPE.NAMHAERO}/>
            <FoodCard isCreate={isCreate} isShow={activeCard === WEB_TYPE.NAMHAEROFOOD}/>
            <VisitCard isCreate={isCreate} isShow={activeCard === WEB_TYPE.VISIT}/>
            <MallCard  isCreate={isCreate} isShow={activeCard === WEB_TYPE.MALL}/>
            <MarketCard isShow={activeModal === MODAL_TYPE.MARKET}/>
        </>
    )

}

export default Card