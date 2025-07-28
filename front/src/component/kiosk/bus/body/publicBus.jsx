import {PUBLIC_BUS_LIST} from "@/data/const/const.js";
import {useKiosk} from "@/store/kioskZustand.jsx";
import {useEffect, useState} from "react";

const PublicBus = () => {

    const activeBus = useKiosk((state) => state.activeBus);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if(activeBus.cd === 'PUBLIC1') {
            setTimeout(()=>{
                setIsActive(true);
            },100)
        }else if(activeBus.cd === 'PUBLIC2') {
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }, [activeBus]);
    return (
        <>
            {
                PUBLIC_BUS_LIST.map((item,index) => (
                    <li className={`bus__item bus__item--home ${activeBus.cd === 'PUBLIC'+(index+1) && isActive ? 'active' : ''}`}>
                        <div className="bus__title">{item.title}<p>{item.notice}</p></div>
                        <div className="bus__content">
                            <img src={item.img} alt={item.title}/>
                        </div>
                    </li>
                ))
            }
        </>

    )

}
export default PublicBus
