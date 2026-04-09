import React from "react";
import ReactDOM from "react-dom/client";


// common css
import '@/assets/css/common/reset.css';
import '@/assets/css/common/modal.css';
import '@/assets/css/common/header.css';
import '@/assets/css/common/common.css';

//main css
import '@/assets/css/dashboard/main/main.css';
import '@/assets/css/dashboard/main/view.css';
import '@/assets/css/dashboard/main/bus.css';


import Router from "@/component/router.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import IdleWatcher from "@/component/new/common/Idle/idleWatcher.jsx";
import ServerWatcher from "@/component/new/common/serverWatcher.jsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
            <ServerWatcher/>
            <IdleWatcher
                timeout={60000} // 1분
            />
            <Router/>
    </QueryClientProvider>

)