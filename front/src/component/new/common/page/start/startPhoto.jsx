import {WEB_TYPE} from "@/data/const/const.js";
import moment from "moment/moment.js";
import SWIPER_IMG from "@/assets/image/img/standby/swiper-01.png";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";

const StartPhoto = ({isCreate}) => {

    const setActiveCreateWeb = useCreate().actions.setActiveWeb;
    const setActiveWeb = useKiosk().actions.setActiveWeb;

    const handleBtn = (web) => {
        if(isCreate){
            setActiveCreateWeb(web)
        }else{
            setActiveWeb(web)
        }
    }

    const slides = [
        { title: "[기타] 꽃피는 남해 사진콘테스트", date: moment().format("YYYY.MM.DD")+'~'+moment().format("YYYY.MM.DD"), img: SWIPER_IMG },
    ];

    return (
        <div className="intro-frame" onClick={() => handleBtn(WEB_TYPE.NANGMAN)}>
            <div className="swiper standby-swiper">
                <div className="swiper-wrapper">
                    {slides.map((slide, idx) => (
                        <div className="swiper-slide" key={idx}>
                            <div className="swiper__bg">
                                <img src={slide.img} alt="슬라이드 이미지" />
                            </div>
                            <div className="swiper__text">
                                <strong>{slide.title}</strong>
                                <p>{slide.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default StartPhoto
