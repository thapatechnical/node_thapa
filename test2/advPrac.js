const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");

const emitter = new EventEmitter();
const filePath = path.join(__dirname, "eventCounts.json");

// Function to load event counts from a file
const loadEventCounts = () => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  }
  return {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
  };
};

// Function to save event counts to a file
const saveEventCounts = (counts) => {
  fs.writeFileSync(filePath, JSON.stringify(counts, null, 2), "utf8");
};

// Initialize event counts
const eventCounts = loadEventCounts();

// Event listeners
emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in!`);
  saveEventCounts(eventCounts);
});

emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} logged out!`);
  saveEventCounts(eventCounts);
});

emitter.on("user-purchase", (username, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${username} purchased ${item}!`);
  saveEventCounts(eventCounts);
});

emitter.on("profile-update", (username, field) => {
  eventCounts["profile-update"]++;
  console.log(`${username} updated their ${field}!`);
  saveEventCounts(eventCounts);
});

// Emit 'summary' event
emitter.on("summary", () => {
  console.log("\nEvent Summary:");
  for (const [event, count] of Object.entries(eventCounts)) {
    console.log(`${event}: ${count}`);
  }
});

// Emit some events
emitter.emit("user-login", "Thapa");
emitter.emit("user-purchase", "Thapa", "Laptop");
emitter.emit("profile-update", "Thapa", "email");
emitter.emit("user-logout", "Thapa");

// Show the summary
emitter.emit("summary");
