package com.example.todo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@SpringBootApplication
@RestController
public class TodoApplication {

	@RequestMapping("/home")
	String home() {
		return "Hello World!";
	}

	@RequestMapping("/todos")
        public String index() {
            return "{todo1:'new todo',todo2:'new todo 2'}";
        }


	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}

}

