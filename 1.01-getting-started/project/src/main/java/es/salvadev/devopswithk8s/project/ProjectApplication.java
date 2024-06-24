package es.salvadev.devopswithk8s.project;

import java.time.Instant;
import java.util.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjectApplication {

	public static void main(String[] args) {
		String randomString = generateRandomString();

		SpringApplication.run(ProjectApplication.class, args);
	
		logEveryNumberOfSeconds(randomString, 5);
	}

	private static void logEveryNumberOfSeconds(String logMessage, int numberOfSeconds) {
 
        // Schedule a task to output the string every 5 seconds
        Runnable task = () -> {
            while (true) {
                System.out.println(Instant.now() + ": " + logMessage);
                try {
                    Thread.sleep(numberOfSeconds * 1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        };

        // Start the task in a separate thread
        Thread thread = new Thread(task);
        thread.start();
    }

	private static String generateRandomString() {
        return UUID.randomUUID().toString();
    }
}
