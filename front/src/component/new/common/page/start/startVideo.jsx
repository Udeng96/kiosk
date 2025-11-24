import VIDEO from "@/assets/video/intro.mp4";
import HWA_JEONG from "@/assets/image/img/etc/img_hwajeon_edit.png";

const StartVideo = ( ) => {

    return(
        <div className="intro-frame">
            {/*<img style={{width: "100%", height: "100%"}} src={HWA_JEONG}/>*/}
            <video style={{width: "100%", height: "100%"}} src={VIDEO} autoPlay loop muted/>
        </div>
    )

}
export default StartVideo