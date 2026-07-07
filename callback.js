// Task 1: JavaScript Callback with While Loop


// Callback function to print current date and time
function printDateTime() {
    let now = new Date();
    console.log("Aakriti Kandel", now.toString());
}

// Function to do operation with while loop
function runOperation(callback, durationMs) {
    // Get current time in milliseconds
    let startTime = Date.now();
    let currentTime = startTime;

    // Copy time into another variable
    let copiedTime = currentTime;

    // Run while loop until duration is reached
    while (true) {
        // Update current time
        currentTime = Date.now();

        // If condition: check if time exceeded duration
        if (currentTime - startTime >= durationMs) {
            console.log("Time exceeded, exiting...");
            break; // exit loop
        }

        // If condition: check if it's time to print
        if (currentTime - copiedTime >= 1000) { // every 1 second
            callback(); // call the callback
            copiedTime = currentTime; // reset copied time
        }
    }
}

// Run for 5 seconds
runOperation(printDateTime, 5000);