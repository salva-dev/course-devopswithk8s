package es.salvadev.devopswithk8s.project;

public class RandomStringGenerator {
    private static String randomString;

    public static void log() {
        // Generate a random string on startup
        randomString = generateRandomString();

        // Schedule a task to output the string every 5 seconds
        Runnable task = () -> {
            while (true) {
                System.out.println(Instant.now() + ": " + randomString);
                try {
                    Thread.sleep(5000);
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
