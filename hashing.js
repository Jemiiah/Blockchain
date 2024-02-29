const crypto = require("crypto");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function hashPassword(password) {
    const hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest("hex");
}

rl.question("Enter your password: ", (userPassword) => {
    const hashedPassword = hashPassword(userPassword);
    console.log("Hashed Password:", hashedPassword);
    rl.close();
});
