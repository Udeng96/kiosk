import {TWELVE_ITEM_LIST} from "@/data/const/const.js";
import {useKiosk} from "@/store/kioskZustand.jsx";

const TwelveBody = () => {

    const setActiveTwelve = useKiosk().actions.setActiveTwelve;
    return(
        <div className="view__body">
            <ul>
                {
                    TWELVE_ITEM_LIST.map((item)=>(
                        <li className="view__card" onClick={()=>setActiveTwelve(item)}>
                            <img src={item.thumb} alt={item.title}/>
                            <div className="view__card__text">
                                <h3>{item.title}</h3>
                                <p>제 {item.index}경</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default TwelveBody