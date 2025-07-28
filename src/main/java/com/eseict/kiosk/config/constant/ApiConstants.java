package com.eseict.kiosk.config.constant;

import com.eseict.common.base.SystemProperties;

import java.util.Arrays;
import java.util.List;

public class ApiConstants {
    public static final String HOME_PATH = SystemProperties.getProperty("KIOSK_HOME");
    public static final String IS_DEV = SystemProperties.getProperty("IS_DEV");

    public static final String KIOSK_IP_PORT = "http://172.16.8.42:22511";

    // 메시지 교환 방식
    public static class MSG_EXCH_PTRN {
        public static final String ONE_WAY = "1";
        public static final String ONE_WAY_ACK = "2";
        public static final String ACK = "3";

        private MSG_EXCH_PTRN() {
        }
    }

    public static List<String> FILE_IMAGE_EXTS = Arrays.asList("jpeg", "jpg", "png");
    public static List<String> FILE_IMAGE_TYPES = Arrays.asList("image/jpeg", "image/jpg", "image/png");
    public static List<String> FILE_VIDEO_EXTS = Arrays.asList("mov","mp4", "wmv", "flv");
    public static List<String> FILE_VIDEO_TYPES = Arrays.asList("video/quicktime","video/mp4", "video/x-ms-wmv", "video/flv");


    public static class DbSchema {
        public static final String FMS = "fms";
        public static final String IOC = "ioc";
        public static final String SOCIAL = "social";
        public static final String SCHE = "schedule";
        public static final String CONF = "conference";
        public static final String SMS = "sms";
        public static final String SCM = "scm";
        public static final String MCS = "mcs";
        public static final String OMS = "oms";
        public static final String DEPT = "dashboard";
        public static final String SMS_S = "MSG_TEST";
        public static final String BROADCAST = "ipbroadcast";
        public static final String SHARE = "share";

    }

    public static class Common {
        public static final String ENCODING = "UTF-8";
        public static final String API_PRODUCES = "application/json;charset=utf8";
        public static final String TIME_ZONE = "Asia/Seoul";
        public static final String STR_SPLIT = "_";
    }

    public static class IsDev {
        public static final String DEV = "true";
        public static final String N_DEV = "false";
    }

    public static class Result {
        public static final String SUCCESS_CODE = "SUCCESS";
        public static final String FAIL_CODE = "FAIL";
        public static final String SUCCESS_STATUS = "200";
        public static final String OMS_SUCCESS_CODE = "OK";
        public static final String SUCCESS_MESSAGE = "정상 처리되었습니다.";
        public static final String FAIL_MESSAGE = "불러온 데이터가 없거나 정상적인 호출이 되지 않았습니다.";
        public static final String FAIL_NO_AUTH = "권한이 없거나, 접속정보가 올바르지않습니다.";
    }

    public static class DATE {
        public static final String FORMAT_4 = "yyyy";
        public static final String FORMAT_6 = "yyyyMM";
        public static final String FORMAT_8 = "yyyyMMdd";
        public static final String FORMAT_10 = "yyyyMMddHH";
        public static final String FORMAT_12 = "yyyyMMddHHmm";
        public static final String FORMAT_14 = "yyyyMMddHHmmss";
        public static final String FORMAT_17 = "yyyyMMddHHmmssSSS";
        public static final String FORMAT_FRONT = "yyyy-MM-dd HH:mm:ss";
        public static final String MILLISECOND_ONE_FORMAT = "yyyy-MM-dd HH:mm:ss";
        public static final String MILLISECOND_FULL_FORMAT = "yyyy-MM-dd HH:mm:ss.SSS";
        public static final String YEAR_TO_MINUTE_FORMAT = "yyyy-MM-dd HH:mm";
        public static final String DTM_TXT_FORMAT_8 = "yyyy/MM/dd";
        public static final String HOUR_MINUTE_FORMAT = "HHmm";
        public static final String HOUR_FORMAT = "HH";
        public static final String MIN_FORMAT = "mm";
        public static final String SEC_FORMAT = "ss";
        public static final String MONTH_FORMAT = "MM";
        public static final String STAT_D = "MM-dd";
        public static final String STAT_M = "yyyy-MM";
        public static final String STAT_Y = "yyyy";
    }

    public static class DATE_TYPE {
        public static final String YEAR = "Y";
        public static final String MONTH = "M";
        public static final String DATE = "D";
        public static final String HOUR = "H";
        public static final String MINUTE = "M";
    }

    public static class FACILITY_STATUS {
        public static final String STATUS_NORMAL = "00";
        public static final String STATUS_ABNORMAL = "01";
        public static final String STATUS_PROCESS = "02";
        public static final String STATUS_NONE = "";
    }

    public static class OPER_STAT_TYPE {
        public static final String HOURLY = "hourly";
        public static final String DAILY = "daily";
        public static final String MONTHLY = "monthly";
    }

    public static class EVENT_NULL {
        public static final String PLCID_NULL = "ESEICTSSC";
    }

    public static class EVENT{
        public static final String EVENT_SITUATION = "001";
        public static final String EVENT_STATUS = "002";
        public static final String EVENT_CONFERENCE_END = "04";

        public static class EVENT_CAT{
            public static final String EVENT_BELL = "01";
            public static final String EVENT_FIRE = "02";
            public static final String EVENT_GAS = "03";
            public static final String EVENT_SETTOP = "04";
            public static final String EVENT_CCTV = "05";
        }
    }

}


