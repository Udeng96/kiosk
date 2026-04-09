import {create} from "zustand/react";
import {
    BUS_TYPE,
    FF_VILLAGE_LIST,
     MENU_TYPE, MODAL_TYPE,
    NAMHAE_AREA,
    NAMHAE_BARAE,
    PAGE_TYPE,
    TOUR_MODAL_NONE,
    TWELVE_ITEM_NONE, WEB_TYPE
} from "@/data/const/const.js";


export const useKiosk = create((set)=> ({
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


    activeMainType : "TOUR",
    activeBaraeArea : NAMHAE_BARAE.NONE,
    activeTourArea : NAMHAE_AREA.NONE,
    activeTourPlace : TOUR_MODAL_NONE,
    activeModalType : "NONE",
    activeBus : BUS_TYPE.NONE,
    activeVilLine : FF_VILLAGE_LIST[0],
    activeTwelve : TWELVE_ITEM_NONE,
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
