
import THUMBNAIL from "@/assets/image/img/standby/thumbnail_intro-low.png"
import VIDEO from "@/assets/video/intro.mp4"
const PrVideo = () => {

    return(
        <section className="standby__item intro">
            <div className="intro__video">
                <video style={{width: "100%", height: "100%"}} src={VIDEO} autoPlay loop muted/>
                {/*<img src={`${THUMBNAIL}`} alt="홍보영상 썸네일"/>*/}
            </div>
        </section>
    )

}
export default PrVideo