package com.eseict.kiosk.service;

import com.eseict.kiosk.config.constant.ApiConstants;
import com.eseict.kiosk.domain.vo.Forecast;
import com.eseict.kiosk.repository.jpa.ForecastRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ApiService {

    private final ForecastRepository forecastRepository;

    public List<Forecast> getWeather() {
        String nowDtm = getNowLocalDateTime();
        return forecastRepository.findByRegDtm(nowDtm);
    }

    public String getNowLocalDateTime(){
        return LocalDate.now().format(DateTimeFormatter.ofPattern(ApiConstants.DATE.FORMAT_8));
    }
}
