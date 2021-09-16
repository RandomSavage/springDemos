package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class HelloController {
  
  @GetMapping("/")
  public String index() {
    return "Greetings from Spring Boot!";
  }

  @GetMapping("/hello")
	public String hello(@RequestParam(value="name", defaultValue="world") String name) {
		return String.format("Hello %s!", name);
		// mvnw spring-boot:run 
		// http://localhost:8080/hello?name=billy
	}
}
