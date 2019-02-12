package com.example.todo;

import org.json.JSONArray;
import org.json.JSONException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;

@SpringBootApplication
@RestController
public class TodoApplication {

    @RequestMapping("/home")
    String home() {
        return "Hello World!";
    }

    private String readTodos() throws IOException {
        return new String(Files.readAllBytes(getPath()));
    }

    @RequestMapping("/todo")
    public String getTodoContent() throws IOException {
        return readTodos();
    }

    @PostMapping(path = "/todo")
    public String saveTodo(@RequestBody Object todo) throws IOException, JSONException {
        JSONArray todoContent = new JSONArray(readTodos());
        todoContent.put(todo);
        Path filename = getPath();
        Files.write(filename, Collections.singleton(todoContent.toString()));
        return todo.toString();
    }

    private Path getPath() {
        return Paths.get(System.getProperty("user.dir") + "/todos.json");
    }

    public static void main(String[] args) {
        SpringApplication.run(TodoApplication.class, args);
    }


}

