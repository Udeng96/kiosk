package com.eseict.kiosk.domain.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "forecast", schema = "social")
public class Forecast {

    @Id
    @Column(name = "reg_dtm")
    private String regDtm;

    @Column(name = "sky_cd")
    private String skyCd;

    @Column(name="update_dtm")
    private String updateDtm;

    @Column(name = "now_temp")
    private int nowTemp;

    @Column(name = "pty_cd")
    private String ptyCd;

    @Column(name = "pty_nm")
    private String ptyNm;

    @Column(name = "sky_nm")
    private String skyNm;

    @Column(name="pm10_grade")
    private String pm10Grade;

    @Column(name="pm25_grade")
    private String pm25Grade;
}
