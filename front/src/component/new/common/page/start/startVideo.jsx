import VIDEO_SPECIAL from "@/assets/video/intro.mp4";
import {isDev} from "@/data/const/const.js";
import {useEffect, useState} from "react";

const StartVideo = () => {

    const [mediaSrc, setMediaSrc] = useState(null);
    const [mediaType, setMediaType] = useState("video");

    const fileUrl = (isDev
        ? "http://localhost:22511/kiosk"
        : `http://${window.location.host}/kiosk`
    ) + "/file/media";

    const loadMediaInfo = async () => {
        try {
            const res = await fetch(fileUrl, { method: "HEAD" });
            if (!res.ok) { setMediaSrc(VIDEO_SPECIAL); return; }
            const contentType = res.headers.get("Content-Type") || "";
            if (contentType.startsWith("image/")) {
                setMediaType("image");
            } else {
                setMediaType("video");
            }
            setMediaSrc(fileUrl);
        } catch {
            setMediaSrc(VIDEO_SPECIAL);
        }
    };

    useEffect(() => {
        loadMediaInfo();
    }, []);

    useEffect(() => {
        const handleStorage = (event) => {
            if (event.key === "mediaUpdated") {
                setMediaSrc(null);
                setTimeout(() => loadMediaInfo(), 100);
            }
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);



    if (!mediaSrc) return null;

    return (
        <div className="intro-frame">
            {mediaType === "video" ? (
                <video
                    style={{ width: "100%", height: "100%" }}
                    src={mediaSrc}
                    autoPlay
                    loop
                    muted
                    onError={() => setMediaSrc(VIDEO_SPECIAL)}
                />
            ) : (
                <img
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={mediaSrc}
                    alt="uploaded media"
                    onError={() => { setMediaType("video"); setMediaSrc(VIDEO_SPECIAL); }}
                />
            )}
        </div>
    );

}
export default StartVideo