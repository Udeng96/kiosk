import {useEffect, useRef} from "react";
import {isDev} from "@/data/const/const.js";

const PING_URL = (isDev
    ? "http://localhost:22511/kiosk"
    : `http://${window.location.host}/kiosk`
) + "/file/media";

const INTERVAL_MS = 3000;

const ServerWatcher = () => {
    const wasDown = useRef(false);

    useEffect(() => {
        const check = async () => {
            try {
                await fetch(PING_URL, {method: "HEAD"});
                if (wasDown.current) {
                    window.location.reload();
                }
            } catch {
                wasDown.current = true;
            }
        };

        const id = setInterval(check, INTERVAL_MS);
        return () => clearInterval(id);
    }, []);

    return null;
};

export default ServerWatcher;
