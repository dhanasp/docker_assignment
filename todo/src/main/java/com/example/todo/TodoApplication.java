package com.example.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@SpringBootApplication
@RestController
public class TodoApplication {

    @RequestMapping("/home")
    String home() {
        return "Hello World!";
    }

    private String readTodos() throws IOException {
        String pwd = System.getProperty("user.dir");
        String pathToFile = String.format("%s/todos.json", pwd);
        return new String(Files.readAllBytes(Paths.get(pathToFile)));
    }

    @RequestMapping("/todos")
    public String getTodoContent() throws IOException {
        return readTodos();
    }

    public static void main(String[] args) {
        SpringApplication.run(TodoApplication.class, args);
    }

}

