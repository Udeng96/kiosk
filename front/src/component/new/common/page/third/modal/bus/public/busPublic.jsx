import {PUBLIC_BUS_LIST} from "@/data/const/const.js";

const BusPublic = ({activeBus}) =>{

    return(
        <>
            {
                PUBLIC_BUS_LIST.map((item,index) => (
                    <li className={`bus__item bus__item--home ${activeBus.cd === 'PUBLIC'+(index+1) ? 'active' : ''}`}>
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

export default BusPublic