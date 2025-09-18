import {useEffect, useState} from "react";
import XeusGate from "@/assets/player/xeus.player.2.2.0.js";
import {useCreate} from "@/store/createZustand.jsx";
import {useKiosk} from "@/store/kioskZustand.jsx";

const CctvPlayer = () => {

    const activeModalType = useKiosk((state)=> state.activeModalType);
    const activeTourPlace = useKiosk((state)=> state.activeTourPlace);
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
        if(activeModalType === 'CCTV' && activeTourPlace.mgtno !== ''){
            setPlayerId(`${PLAYER_ID_PREFIX}_BADA`);
            setCctvReloadCnt(cctvReloadCnt+1);
            console.log("activeTourPlace.mgtno",activeTourPlace.mgtno)
        }else{
            setPlayer('')
        }
    }, [activeModalType, activeTourPlace]);

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
            url:  `ws://172.16.8.19/xeus-gate/stream`,
            evtType: '112',
            userId: 'tester1',
            speed: '',
            codec: 'h264',
            rtsp: '',
        });
        setPlayer(xeusPlayer);
    }

    return(
        <div style={{width:'2304px',height:'1296px', position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)" }} id={playerId}></div>
    )

}

export default CctvPlayer

