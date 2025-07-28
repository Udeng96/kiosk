import SWIPER_IMG from "@/assets/image/img/standby/swiper-01.png";
import {useEffect} from "react";
import Swiper from "swiper";
Swiper.use([Autoplay, Pagination]);

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import {Autoplay, Pagination} from "swiper/modules";
import moment from "moment";

const MenuSwiper = () => {
    const slides = [
        { title: "[기타] 꽃피는 남해 사진콘테스트", date: moment().format("yyyy.mm.dd")+'~'+moment().format("yyyy.mm.dd"), img: SWIPER_IMG },
        { title: "[기타] 꽃피는 남해 사진콘테스트", date: moment().format("yyyy.mm.dd")+'~'+moment().format("yyyy.mm.dd"), img: SWIPER_IMG },
        { title: "[기타] 꽃피는 남해 사진콘테스트", date: moment().format("yyyy.mm.dd")+'~'+moment().format("yyyy.mm.dd"), img: SWIPER_IMG },
    ];

    useEffect(() => {
        const swiper = new Swiper(".standby-swiper", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }, []);

    return(
        <div className="intro-frame" onClick="modal('modal-tourplatform')">
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
                <div className="swiper-pagination"></div>
            </div>
        </div>

    )


}

export default MenuSwiper