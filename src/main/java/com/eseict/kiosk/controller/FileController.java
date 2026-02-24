package com.eseict.kiosk.controller;

import com.eseict.kiosk.service.FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import static com.eseict.kiosk.config.constant.ApiConstants.Common.API_PRODUCES;

@RestController
@RequestMapping(value = "/file", produces = API_PRODUCES)
@Slf4j
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;

    @PostMapping(value = "", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Void> upload(@RequestParam("file") MultipartFile file) {
        try {
            fileService.uploadFile(file);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok().build();
    }

    @GetMapping("/media")
    public ResponseEntity<Resource> getMedia() throws IOException {

        Resource resource = fileService.getDisplayFile();
        Path path = resource.getFile().toPath();

        String filename = path.getFileName().toString().toLowerCase();

        String contentType;

        if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) {
            contentType = "image/jpeg";
        } else if (filename.endsWith(".png")) {
            contentType = "image/png";
        } else if (filename.endsWith(".mp4")) {
            contentType = "video/mp4";
        } else {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .body(resource);
    }

    @DeleteMapping(value = "")
    public void deleteAll() {
        try {
            fileService.deleteAllFiles();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
