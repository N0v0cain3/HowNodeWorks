const crypto = require("crypto");
const start = Date.now();
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
	console.log("1: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
	console.log("2: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
	console.log("3: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
	console.log("4: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
	console.log("5: ", Date.now() - start);
});

// Node is not always single threaded , some of the functions like pbkdf2 uses multiple threads extensively outside
//of the Eventn loop, backed by C++ multi thread pool which consists of 4 threads.
