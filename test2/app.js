// Import EventEmitter class
const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// 1. Define an event listener (addListener)
// emitter.on("greet", () => {
//   console.log("Hello World");
// });

// 2. Trigger (emit) the "greet" event
// emitter.emit("greet");

//* You can also pass arguments while emitting.

// emitter.on("greet", (name, prof) => {
//   console.log(`Hello My name is ${name} & I am a ${prof}`);
// });

// emitter.emit("greet", "Thapa Technical", "Full Stack Dev");

//! but it's best idea to take a single argument as an object.
emitter.on("greet", (arg) => {
  console.log(`Hello My name is ${arg.name} & I am a ${arg.prof}`);
});

emitter.emit("greet", { name: "Thapa Technical", prof: "Full Stack Dev" });
