import {TWELVE_ITEM_LIST} from "@/data/const/const.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useKiosk} from "@/store/kioskZustand.jsx";

const TourBody = ({isCreate}) => {

    const{setSelectCreateModalTour} = useCreate(useShallow((state)=> ({
        setSelectCreateModalTour : state.actions.setSelectModalTour
    })))

    const{setSelectModalTour} = useKiosk(useShallow((state)=> ({
        setSelectModalTour : state.actions.setSelectModalTour
    })))

    const handleTour = (tour) => {
        if(isCreate){
            setSelectCreateModalTour(tour);
        }else{
            setSelectModalTour(tour);
        }
    }

    return(
        <div className="view__body">
            <ul>
                {
                    TWELVE_ITEM_LIST.map((item)=>(
                        <li className="view__card" onClick={()=>handleTour(item)}>
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

export default TourBody