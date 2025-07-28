import {create} from "zustand/react";
import {
    BUS_TYPE,
    FF_VILLAGE_LIST,
    MAIN_TYPE,
    MODAL_TYPE,
    NAMHAE_AREA,
    NAMHAE_BARAE,
    PAGE_TYPE,
    TOUR_MODAL_NONE,
    TWELVE_ITEM_NONE
} from "@/data/const/const.js";


export const useKiosk = create((set)=> ({
    activePage : PAGE_TYPE.STANDBY,
    activeMainType : MAIN_TYPE.TOUR,
    activeBaraeArea : NAMHAE_BARAE.NONE,
    activeTourArea : NAMHAE_AREA.NONE,
    activeTourPlace : TOUR_MODAL_NONE,
    activeModalType : MODAL_TYPE.NONE,
    activeBus : BUS_TYPE.NONE,
    activeVilLine : FF_VILLAGE_LIST[0],
    activeTwelve : TWELVE_ITEM_NONE,
    actions:{
        setActivePage : (page) => set({activePage: page}),
        setActiveMainType: (mainType) => set({activeMainType: mainType}),
        setActiveBaraeArea: (area) => set({activeBaraeArea: area}),
        setActiveTourArea: (area) => set({activeTourArea: area}),
        setActiveTourPlace: (place) => set({activeTourPlace: place}),
        setActiveModalType: (modalType) => set({activeModalType: modalType}),
        setActiveBus: (bus) => set({activeBus: bus}),
        setActiveVilLine: (vilLine) => set({activeVilLine: vilLine}),
        setActiveTwelve: (twelve) => set({activeTwelve: twelve})
    }
}))
