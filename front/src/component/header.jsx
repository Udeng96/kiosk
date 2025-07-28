import NAMHAE_LOGO from "@/assets/image/lgo/lgo_namhae_dark_250x70.svg";
import {useEffect, useState} from "react";
import moment from "moment";
import "moment/locale/ko";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {isDev} from "@/data/const/const.js";

moment.locale("ko");


const Header = () => {

    const [skyInfo, setSkyInfo] = useState("sun");
    const [tempInfo, setTempInfo] = useState(0);
    const [now, setNow] = useState(moment());

    const fetchWeather = async () => {
        const url = (isDev ? "http://localhost:22511/kiosk" : "http://172.16.8.42:22511/kiosk") + "/weather/info";
        return await axios.get(url);
    }

    const {data: weather} = useQuery({
            queryKey: ['weather'],
            queryFn: () => fetchWeather(),
            refetchInterval: () => {
                const now = new Date();
                // 현재 시각의 다음 "정각+3분"
                const next = new Date(now);
                next.setHours(now.getMinutes() >= 3 ? now.getHours() + 1 : now.getHours());
                next.setMinutes(3, 0, 0);
                return next.getTime() - now.getTime();
            }
        }
    )




    useEffect(() => {
        const timer = setInterval(() => setNow(moment()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(()=>{
        if(weather){
            if(weather.data){
                let skyNm = weather.data[0].skyNm;
                let temp = weather.data[0].nowTemp;
                let ptyNm = weather.data[0].ptyNm;

                setTempInfo(temp);

                if(ptyNm === "없음"){
                    if(skyNm === "맑음"){
                        setSkyInfo("sun")
                    }else if(skyInfo === "흐림"){
                        setSkyInfo("cloud")
                    }else{
                        setSkyInfo("sun-cloud")
                    }
                }else{
                    if(ptyNm === "비"){
                        setSkyInfo("rain")
                    }else if(ptyNm === "눈"){
                        setSkyInfo("snow")
                    }else{
                        setSkyInfo("rain-snow")
                    }
                }
            }else{
                setSkyInfo("sun")
                setTempInfo("0")
            }
        }
    }, [weather])


    return (
        <header className="header">
            <div className="logo">
                <img src={`${NAMHAE_LOGO}`} alt="남해군 로고"/>
            </div>

            <div className="frame">
                <div className="wearther">
                    <p className="wearther__title">남해군은 현재</p>
                    <i className={`wearther__icon ${skyInfo}`}></i>
                    <p className="wearther__text">{tempInfo}°</p>
                </div>
                <p className="date">{now.format("YYYY. M. DD. HH:mm")}</p>
            </div>
        </header>
    )

}

export default Header