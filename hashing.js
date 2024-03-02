// import the crypto module
const crypto = require("crypto");

//import readline module and create an interface to request userpassword
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function hashPassword(password) {
    // Generate a random salt
    const salt = crypto.randomBytes(16).toString('hex');
    // Hash the password with the salt using SHA-256
    const hash = crypto.createHash("sha256");
    hash.update(password + salt);
    const hashedPassword = hash.digest("hex");
    // Return both the hashed password and the salt
    return { hashedPassword, salt };
}

rl.question("Enter your password: ", (userPassword) => {
    const { hashedPassword, salt } = hashPassword(userPassword);
    console.log("Hashed Password:", hashedPassword);
    console.log("Salt:", salt); // Store this salt along with the hashed password
    rl.close();
});

