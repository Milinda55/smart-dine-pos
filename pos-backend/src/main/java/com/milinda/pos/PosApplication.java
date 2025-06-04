package com.milinda.pos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class PosApplication {
	public static void main(String[] args) {
		SpringApplication.run(PosApplication.class, args);
	}

}
