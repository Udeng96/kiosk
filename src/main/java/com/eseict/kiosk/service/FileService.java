package com.eseict.kiosk.service;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.stream.Stream;

@Service
@Slf4j
public class FileService {

    private final String homePath;

    public FileService(@Value("${KIOSK_HOME}") String homePath) {
        this.homePath = homePath;
    }

    public void uploadFile(MultipartFile file) throws IOException {

        Path fileDir = Paths.get(homePath, "file");

        Files.createDirectories(fileDir);

        try (Stream<Path> stream = Files.list(fileDir)) {
            stream.forEach(path -> {
                try {
                    Files.deleteIfExists(path);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
        }

        file.transferTo(fileDir.resolve(file.getOriginalFilename()));
    }

    public Resource getDisplayFile() throws IOException {

        Path fileDir = Paths.get(homePath, "file");
        Path defaultDir = Paths.get(homePath, "default");

        if (Files.exists(fileDir)) {
            try (Stream<Path> stream = Files.list(fileDir)) {
                Optional<Path> uploadedFile = stream.findFirst();
                if (uploadedFile.isPresent()) {
                    return new FileSystemResource(uploadedFile.get());
                }
            }
        }

        Path defaultFile = defaultDir.resolve("default.mp4");
        return new FileSystemResource(defaultFile);
    }


    public void deleteAllFiles() throws IOException {

        Path fileDir = Paths.get(homePath, "file");

        if (!Files.exists(fileDir)) return;

        try (Stream<Path> stream = Files.list(fileDir)) {
            stream.forEach(path -> {
                try {
                    Files.deleteIfExists(path);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
        }
    }


}
