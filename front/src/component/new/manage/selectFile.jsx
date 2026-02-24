import {useRef, useState} from "react";
import axios from "axios";
import {isDev} from "@/data/const/const.js";
import {useCommon} from "@/store/commonZustand.jsx";
import {useShallow} from "zustand/react/shallow";
import {useQueryClient} from "@tanstack/react-query";

const SelectFile = () => {
    const queryClient = useQueryClient();
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const {prevFile, setPrevFile} = useCommon(useShallow((state)=>({
        prevFile : state.prevFile,
        setPrevFile : state.actions.setPrevFile
    })))

    const fileUrl = (isDev
            ? "http://localhost:22511/kiosk"
            : "http://172.16.8.42:22511/kiosk"
    ) + "/file";

    const handleSelectFile = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "video/mp4"
        ];

        if (!allowedTypes.includes(file.type)) {
            alert("jpg, png, mp4 파일만 업로드 가능합니다.");
            return;
        }

        const MAX_SIZE = 1024 * 1024 * 1024; // 1GB

        if (file.size > MAX_SIZE) {
            alert("최대 파일 크기를 초과했습니다. 관리자에게 문의하여 주세요.");
            return;
        }

        setSelectedFile(file);
    };

    const handlePrev = () => {
        if(prevFile){
            setPrevFile(null);
        }else{
            setPrevFile(selectedFile);
        }
    }

    const handleUpload = async () => {

        if (!selectedFile) {
            alert("파일을 먼저 선택하세요.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            await axios.post(fileUrl, formData);

            alert("업로드 완료");
            setSelectedFile(null);
            localStorage.setItem("mediaUpdated", Date.now().toString());
            queryClient.invalidateQueries(["mediaFile"]);
        } catch (err) {
            alert("업로드 실패");
        }
    };

    const handleCancel = () => {
        setSelectedFile(null);
        setPrevFile(null);
    }

    const handleReset = async () => {
        const confirmed = window.confirm("되돌릴 수 없습니다. 기본 영상으로 변경하시겠습니까?");
        if (!confirmed) return;

        try {
            await axios.delete(fileUrl);
            alert("기본 영상으로 되돌렸습니다.");

            // 페이지 새로고침
            setPrevFile(null);
            localStorage.setItem("mediaUpdated", Date.now().toString());
             queryClient.invalidateQueries(["mediaFile"]);
        } catch (err) {
            alert("복구 실패");
        }
    };

    return (
        <div>
            {/* 파일 선택 버튼 */}
            <button className="select-btn" onClick={handleSelectFile}>
                파일 선택
                <span>jpg, png, mp4 파일만 업로드 가능합니다.</span>
            </button>

            {/* 선택된 파일명 표시 */}
            {selectedFile && (
                <div className={"select-file"} style={{marginTop: 10}}>
                    {selectedFile.name}
                </div>
            )}

            {/* 업로드 버튼 */}
            <div className={"btn_grp"}>
                <button className={`${prevFile ? "prev_btn active" : "prev_btn"}`} onClick={handlePrev} disabled={!selectedFile}>미리보기</button>
                <button
                    className="upload_btn"
                    onClick={handleUpload}
                    disabled={!selectedFile}
                    style={{marginTop: 10}}>업로드</button>

                {/* 숨겨진 파일 input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{display: "none"}}
                    accept=".jpg,.jpeg,.png,.mp4"
                    onChange={handleFileChange}
                />
                <button className={"cancel_btn"} onClick={handleCancel} disabled={!selectedFile}>취소</button>
            </div>
            <button className={"return_btn"} onClick={handleReset} disabled={selectedFile !== null}>
                기본 영상으로 되돌리기
            </button>
        </div>
    );

}

export default SelectFile