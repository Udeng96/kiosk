import {create} from "zustand/react";
import {
    BUS_TYPE,
    FF_VILLAGE_LIST,
    MAIN_TYPE,
    MODAL_TYPE,
    NAMHAE_AREA,
    PAGE_TYPE,
    TOUR_MODAL_NONE,
    TWELVE_ITEM_NONE
} from "@/data/const/const.js";

export const useCreate = create((set)=> ({
    activeStandby : "FIRST",
    activeMenu : MODAL_TYPE.NONE,
    activePage : PAGE_TYPE.STANDBY,
    activeMainMenu : MAIN_TYPE.TOUR,
    activeTourArea : NAMHAE_AREA.NONE,
    activeTourPlace : TOUR_MODAL_NONE,
    activeBaraeArea : NAMHAE_AREA.NONE,
    activeBus : BUS_TYPE.NONE,
    activeTwelve : TWELVE_ITEM_NONE,
    activeVilLine : FF_VILLAGE_LIST[0],
    activeChangseng: "FIRST",
    actions:{
        setActiveStandby: (standby) => set({activeStandby: standby}),
        setActiveMenu : (menu) => set({activeMenu: menu}),
        setActivePage : (page) => set({activePage: page}),
        setActiveMainMenu : (mainMenu) => set({activeMainMenu: mainMenu}),
        setActiveTourArea: (area) => set({activeTourArea: area}),
        setActiveTourPlace: (place) => set({activeTourPlace: place}),
        setActiveBaraeArea: (area) => set({activeBaraeArea: area}),
        setActiveBus: (bus) => set({activeBus: bus}),
        setActiveTwelve: (twelve) => set({activeTwelve: twelve}),
        setActiveVilLine: (line) => set({activeVilLine: line}),
        setActiveChangseng: (changseng) => set({activeChangseng: changseng})
    }
}));
