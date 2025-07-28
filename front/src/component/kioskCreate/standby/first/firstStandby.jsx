import MenuSwiper from "@/component/kioskCreate/standby/first/menuSwiper.jsx";
import MenuVideo from "@/component/kioskCreate/standby/first/menuVideo.jsx";
import MenuTour from "@/component/kioskCreate/standby/first/menuTour.jsx";

const FirstStandby = () => {

    return(
        <section className="create_standby__item intro">

            <MenuVideo/>
            <MenuSwiper/>
            <MenuTour/>


        </section>
    )

}

export default FirstStandby