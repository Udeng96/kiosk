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

export const useCommon = create((set)=> ({
    prevFile: null,
    actions:{
        setPrevFile: (prevFile) => set({prevFile: prevFile})
    }
}));
