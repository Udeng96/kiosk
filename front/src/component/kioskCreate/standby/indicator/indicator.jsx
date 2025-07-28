import {useCreate} from "@/store/createZustand.jsx";
import {useShallow} from "zustand/react/shallow";

const Indicator = () => {

    const {activeStandby, setActiveStandby} = useCreate(useShallow((state)=> ({
        activeStandby: state.activeStandby,
        setActiveStandby: state.actions.setActiveStandby
    })));
    return(
        <div className="indicator">
            <button type="button" className={`btn-icon btn-icon--blue btn-prev ${activeStandby === "FIRST" ? 'hidden' : ''}`} onClick={() => setActiveStandby("FIRST")}>이전</button>
            <ul className="indicator__list">
                <li className={`indicator__item ${activeStandby === "FIRST" ? 'active' : ''}`}></li>
                <li className={`indicator__item ${activeStandby !== "FIRST" ? 'active' : ''}`}></li>
            </ul>
            <button type="button" className={`btn-next ${activeStandby === "SECOND" ? 'hidden' : ''}`} onClick={() => setActiveStandby("SECOND")}>다음</button>
        </div>
    )

}

export default Indicator