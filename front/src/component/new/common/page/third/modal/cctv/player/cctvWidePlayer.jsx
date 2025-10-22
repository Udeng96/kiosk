import {useEffect, useState} from "react";
import XeusGate from "@/assets/player/xeus.player.2.2.0.js";
import {domain, TOUR_MODAL_NONE} from "@/data/const/const.js";

const CctvWidePlayer = ({activeTourPlace}) => {
    const PLAYER_ID_PREFIX = `Video_Player_`;
    const [cctvReloadCnt, setCctvReloadCnt] = useState(0);
    const [playerId, setPlayerId] = useState('');
    const [player, setPlayer] = useState(null);


    useEffect(() => {

        return () => {
            //@ts-ignore
            player?.destroy()
        }

    }, [player]);

    useEffect(() => {
        if(activeTourPlace.mgtno !== ''){
            setPlayerId(`${PLAYER_ID_PREFIX}_BADA`);
            setCctvReloadCnt(cctvReloadCnt+1);
        }else{
            setPlayer('');
        }
    }, [activeTourPlace]);

    useEffect(() => {

        if (playerId !== ''){
            makePlayerAndStart();
        }else{
            setPlayer(null);
        }

    }, [playerId,cctvReloadCnt]);

    const makePlayerAndStart = () => {
        //@ts-ignore
        if (player && player.destroy) {
            //@ts-ignore
            player?.destroy();
        }


        // @ts-ignore
        let xeusPlayer = new XeusGate.Player({
            playerId: playerId,
            cctvMgrNo: activeTourPlace.mgtno,
            timestamp: '',
            debug: false,
            url:  `ws://${domain}/xeus-gate/stream`,
            evtType: '112',
            userId: 'tester1',
            speed: '',
            codec: 'h264',
            rtsp: '',
        });
        setPlayer(xeusPlayer);
    }

    return(
        activeTourPlace.area !== TOUR_MODAL_NONE.area &&
        <div style={{width:'2304px',height:'1296px', position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)" }} id={playerId}></div>
    )

}

export default CctvWidePlayer