import {useEffect, useState} from "react";
import VIDEO_SPECIAL from "@/assets/video/special.mp4";
import {useCommon} from "@/store/commonZustand.jsx";
import {isDev} from "@/data/const/const.js";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const PrevFile = () => {

    const [mediaSrc, setMediaSrc] = useState(VIDEO_SPECIAL);
    const [mediaType, setMediaType] = useState("video");
    const prevFile = useCommon((state) => state.prevFile);
    const [prevSrc, setPrevSrc] = useState(null);
    const [prevType, setPrevType] = useState("video");

    const fetchFile = async () => {
        const url = (isDev
                ? "http://localhost:22511/kiosk"
                : "http://172.16.8.42:22511/kiosk"
        ) + "/file/media";

        const response = await axios.get(url, {
            responseType: "blob",
        });

        return response.data;
    };

    const {data: mediaBlob} = useQuery({
        queryKey: ["mediaFile"],
        queryFn: fetchFile,
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
        if (prevFile) {
            const objectUrl = URL.createObjectURL(prevFile);
            if (prevFile.type.startsWith("image/")) {
                setPrevType("image");
            } else if (prevFile.type.startsWith("video/")) {
                setPrevType("video");
            }

            setPrevSrc(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setPrevType("video");
        }
    }, [prevFile])


    return (
        <div className="intro-frame">
            {
                prevFile === null ?
                    <>
                        {mediaType === "video" ? (
                            <video
                                style={{width: "100%", height: "100%"}}
                                src={mediaSrc}
                                autoPlay
                                loop
                                muted
                            />
                        ) : (
                            <img
                                style={{width: "100%", height: "100%", objectFit: "cover"}}
                                src={mediaSrc}
                                alt="uploaded media"
                            />
                        )}
                    </>
                    :
                    <>
                        {prevType === "video" ? (
                            <video
                                style={{width: "100%", height: "100%"}}
                                src={prevSrc}
                                autoPlay
                                loop
                                muted
                            />
                        ) : (
                            <img
                                style={{width: "100%", height: "100%", objectFit: "cover"}}
                                src={prevSrc}
                                alt="uploaded media"
                            />
                        )}
                    </>

            }

        </div>
    )
}

export default PrevFile