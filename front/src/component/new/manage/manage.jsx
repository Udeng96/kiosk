import Header from "@/component/new/common/header.jsx";
import SelectPage from "@/component/new/manage/selectPage.jsx";
import {useRef} from "react";
const Manage = () => {

    const standbyListRef = useRef(null);

    return(
        <div className="wrap">
            <Header/>
            <main>
                <section className={`screen create_standby`}>
                    <div className="create_standby__frame">
                        <div className="create_standby__list" ref={standbyListRef}>
                            <SelectPage/>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Manage