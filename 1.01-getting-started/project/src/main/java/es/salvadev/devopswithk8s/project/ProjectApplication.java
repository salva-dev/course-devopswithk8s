package es.salvadev.devopswithk8s.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import es.salvadev.devopswithk8s.project.*;

@SpringBootApplication
public class ProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
		RandomStringGenerator.log();
	}

}
