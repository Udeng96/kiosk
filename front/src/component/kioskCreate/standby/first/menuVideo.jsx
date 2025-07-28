import THUMBNAIL from "@/assets/image/img/standby/thumbnail_intro-low.png"
import VIDEO from "@/assets/video/intro.mp4"

const MenuVideo = () => {

    return(
        <div className="intro-frame">
            <video style={{width: "100%", height: "100%"}} src={VIDEO} autoPlay loop muted/>
            {/*<img src={THUMBNAIL} alt="홍보영상 썸네일"/>*/}
        </div>
    )
}

export default MenuVideo