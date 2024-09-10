import crypto from 'crypto';

// Generate a random string
function generateRandomString() {
    return crypto.randomBytes(16).toString('hex');
}

// Store the random string
const randomString = generateRandomString();

// Log the string with timestamp every 5 seconds
setInterval(() => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${randomString}`);
}, 5000);
