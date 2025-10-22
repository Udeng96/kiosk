import VIDEO from "@/assets/video/intro.mp4";

const StartVideo = ( ) => {

    return(
        <div className="intro-frame">
            <video style={{width: "100%", height: "100%"}} src={VIDEO} autoPlay loop muted/>
        </div>
    )

}
export default StartVideo