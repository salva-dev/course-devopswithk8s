// Generate a random UUID string
const randomString = window.crypto.randomUUID();

// Function to log the current time and the random string
async function logRandomString() {
    await setInterval(() => {
        const currentTime = new Date().toISOString();
        console.log(`${currentTime}: ${randomString}`);
    }, 5000); // Logs every 5 seconds
}

// Call the function to start logging
await logRandomString();
