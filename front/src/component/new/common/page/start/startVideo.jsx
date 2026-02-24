import VIDEO_SPECIAL from "@/assets/video/intro.mp4";
import {isDev} from "@/data/const/const.js";
import axios from "axios";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useEffect, useState} from "react";

const StartVideo = () => {

    const queryClient = useQueryClient();
    const [mediaSrc, setMediaSrc] = useState(VIDEO_SPECIAL);
    const [mediaType, setMediaType] = useState("video");

        const fileUrl = (isDev
                ? "http://localhost:22511/kiosk"
                : "http://172.16.8.42:22511/kiosk"
        ) + "/file/media";

        const fetchFile = async () => {
            const res = await axios.get(fileUrl, { responseType: "blob" });
            return res.data;
        };

    const {data: mediaBlob} = useQuery({
        queryKey: ["mediaFile"],
        queryFn: fetchFile,
        staleTime: Infinity,
        retry: false,   // 실패하면 기본영상 사용
    });

    useEffect(() => {
        if (!mediaBlob) return;

        const objectUrl = URL.createObjectURL(mediaBlob);

        // MIME 타입으로 구분
        if (mediaBlob.type.startsWith("image/")) {
            setMediaType("image");
        } else if (mediaBlob.type.startsWith("video/")) {
            setMediaType("video");
        }

        setMediaSrc(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [mediaBlob]);


    useEffect(() => {
        const handleStorage = (event) => {
            if (event.key === "mediaUpdated") {
                queryClient.refetchQueries({ queryKey: ["mediaFile"] });
            }
        };

        window.addEventListener("storage", handleStorage);

        return () => window.removeEventListener("storage", handleStorage);
    }, []);





    return (
        <div className="intro-frame">
            {mediaType === "video" ? (
                <video
                    style={{ width: "100%", height: "100%" }}
                    src={mediaSrc}
                    autoPlay
                    loop
                    muted
                />
            ) : (
                <img
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={mediaSrc}
                    alt="uploaded media"
                />
            )}
        </div>
    );

}
export default StartVideo