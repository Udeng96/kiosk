import StartVideo from "@/component/new/common/page/start/startVideo.jsx";
import StartPhoto from "@/component/new/common/page/start/startPhoto.jsx";
import StartNavi from "@/component/new/common/page/start/startNavi.jsx";


const StartPage = ({isCreate}) => {

    return (
        <section className="create_standby__item intro">
            <StartVideo/>
            <StartPhoto isCreate={isCreate}/>
            <StartNavi isCreate={isCreate}/>
        </section>
    )

}

export default StartPage