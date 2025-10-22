import BusPublic from "@/component/new/common/page/third/modal/bus/public/busPublic.jsx";
import BusWalk from "@/component/new/common/page/third/modal/bus/walk/busWalk.jsx";
import BusVilliage from "@/component/new/common/page/third/modal/bus/villiage/busVilliage.jsx";

const BusBody = ({isCreate, activeBus}) => {

    return(
        <div className="bus__body">
            <ul className="bus__list">
                <BusPublic activeBus={activeBus}/>
                <BusWalk activeBus={activeBus}/>
                <BusVilliage isCreate={isCreate} activeBus={activeBus} />
            </ul>
        </div>
    )

}

export default BusBody