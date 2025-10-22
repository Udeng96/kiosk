import XeusGate from "@/assets/player/xeus.player.2.2.0.js";
import {useEffect, useState} from "react";
import {useCreate} from "@/store/createZustand.jsx";
import {domain, MODAL_TYPE} from "@/data/const/const.js";

const CctvSmallPlayer = ({mgtNo, activeModal}) => {
    const PLAYER_ID_PREFIX = `Small_Video_Player_`;
    const [cctvReloadCnt, setCctvReloadCnt] = useState(0);
    const [playerId, setPlayerId] = useState('');
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        if (player) {
            return () => {
                //@ts-ignore
                player?.destroy()
            }
        }
    }, [player]);

    useEffect(() => {
        if (activeModal === MODAL_TYPE.CCTV_WHOLE && mgtNo !== '') {
            setPlayerId(`${PLAYER_ID_PREFIX}_${mgtNo}`);
            setCctvReloadCnt(cctvReloadCnt + 1);
        } else {
            setPlayer('');
        }
    }, [activeModal, mgtNo]);

    useEffect(() => {

        if (playerId !== '') {
            makePlayerAndStart();
        } else {
            setPlayer(null);
        }

    }, [playerId, cctvReloadCnt]);

    const makePlayerAndStart = () => {
        //@ts-ignore
        if (player && player.destroy) {
            //@ts-ignore
            player?.destroy();
        }


        // @ts-ignore
        let xeusPlayer = new XeusGate.Player({
            playerId: playerId,
            cctvMgrNo: mgtNo,
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


    return (
        <div style={{width: '1152px', height: '648px', position: "absolute"}} id={playerId}></div>
    )

}

export default CctvSmallPlayer