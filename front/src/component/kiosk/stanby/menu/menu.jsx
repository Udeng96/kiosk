import MenuSwiper from "@/component/kiosk/stanby/menu/menuSwiper.jsx";
import MenuTour from "@/component/kiosk/stanby/menu/menuTour.jsx";
import MenuVisit from "@/component/kiosk/stanby/menu/menuVisit.jsx";
import MenuNamhaero from "@/component/kiosk/stanby/menu/menuNamhaero.jsx";
import MenuFood from "@/component/kiosk/stanby/menu/menuFood.jsx";


const Menu = () =>{

    return(
        <section className="standby__item">
            <div className="kiosk-frame">
                <ul>
                    <MenuSwiper/>
                    <MenuTour/>
                    <MenuNamhaero/>
                    <MenuFood/>
                    <MenuVisit/>
                </ul>
            </div>
        </section>
    )

}

export default Menu