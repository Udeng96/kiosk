package com.eseict.kiosk.repository.jpa;

import com.eseict.kiosk.domain.vo.Forecast;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ForecastRepository extends JpaRepository<Forecast, String> {

    List<Forecast> findByRegDtm(String regDtm);

}
