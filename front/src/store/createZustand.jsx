import {create} from "zustand/react";
import {
    BUS_TYPE, CHANGSENG_TYPE,
    FF_VILLAGE_LIST,
    MENU_TYPE, MODAL_TYPE,
    NAMHAE_AREA, NAMHAE_BARAE,
    PAGE_TYPE,
    TOUR_MODAL_NONE,
    TWELVE_ITEM_NONE, WEB_TYPE
} from "@/data/const/const.js";

export const useCreate = create((set)=> ({
    activePage : PAGE_TYPE.START,
    activeWeb : WEB_TYPE.NONE,
    activeModal : MODAL_TYPE.NONE,

    activeThirdMenu : MENU_TYPE.TOUR,
    selectTourArea : NAMHAE_AREA.NONE,
    selectTourPlace : TOUR_MODAL_NONE,
    selectBarae : NAMHAE_BARAE.NONE,

    selectModalTour : TWELVE_ITEM_NONE,
    selectModalBus : BUS_TYPE.PUBLIC,
    selectModalVillage : FF_VILLAGE_LIST[0],
    selectModalChangseng : CHANGSENG_TYPE.FIRST,

    activeStandby : "FIRST",
    activeMenu : "NONE",
    activeMainMenu : "TOUR",
    activeTourArea : NAMHAE_AREA.NONE,
    activeTourPlace : TOUR_MODAL_NONE,
    activeBaraeArea : NAMHAE_AREA.NONE,
    activeBus : BUS_TYPE.NONE,
    activeTwelve : TWELVE_ITEM_NONE,
    activeVilLine : FF_VILLAGE_LIST[0],
    activeChangseng: "FIRST",
    actions:{
        setActivePage : (page) => set({activePage: page}),
        setActiveWeb : (web) => set({activeWeb: web}),
        setActiveModal : (modal) => set({activeModal: modal}),

        setActiveThirdMenu : (menu) => set({activeThirdMenu: menu}),
        setSelectTourArea : (area) => set({selectTourArea: area}),
        setSelectTourPlace : (place) => set({selectTourPlace: place}),
        setSelectBarae : (barae) => set({selectBarae: barae}),

        setSelectModalTour : (tour) => set({selectModalTour: tour}),
        setSelectModalBus : (bus) => set({selectModalBus: bus}),
        setSelectModalVillage : (village) => set({selectModalVillage: village}),
        setSelectModalChangseng : (chang) => set({selectModalChangseng: chang}),

        setActiveStandby: (standby) => set({activeStandby: standby}),
        setActiveMenu : (menu) => set({activeMenu: menu}),
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
