package com.eseict.kiosk.controller;

import com.eseict.kiosk.domain.vo.Forecast;
import com.eseict.kiosk.service.ApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.eseict.kiosk.config.constant.ApiConstants.Common.API_PRODUCES;

@RestController
@RequestMapping(value = "/weather", produces = API_PRODUCES)
@Slf4j
@RequiredArgsConstructor
public class ApiController {


    private final ApiService apiService;

    @GetMapping("/info")
    public ResponseEntity<List<Forecast>> getWeather() {
        return ResponseEntity.ok(apiService.getWeather());
    }
}
