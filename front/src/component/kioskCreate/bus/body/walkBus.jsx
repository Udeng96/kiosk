import {BUS_TYPE, WALK_BUS_LIST} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";

const WalkBus = () => {

    const activeBus = useCreate((state) => state.activeBus);

    return(
        <>
            {
                WALK_BUS_LIST.map((item)=>(
                    <li className={`bus__item ${activeBus.cd === BUS_TYPE.WALK.cd ? 'active' : ''}`}>
                        <div className="bus__title">{item.nm}<p>{item.notice}</p></div>
                        <div className="bus__content">
                            <img src={item.img} alt={"남해"+ item.title}/>
                        </div>
                    </li>
                ))
            }
        </>

    )

}

export default WalkBus