package com.eseict.kiosk.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping(value = "", produces = "application/json;charset=UTF-8")
public class ViewController {

    @RequestMapping("/")
    public String kiosk(){
        return "index";
    }

    @RequestMapping("/create")
    public String create(){
        return "index";
    }

    @RequestMapping("/manage")
    public String manage(){
        return "index";
    }
}
