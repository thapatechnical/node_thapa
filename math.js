const add = (a, b) => {
  return a + b;
};

const subs = (a, b) => {
  return a - b;
};

const div = (a, b) => {
  return a / b;
};

const mult = (a, b) => {
  return a * b;
};

const PI = 3.214;

// module.exports.add = add;
// module.exports.mult = mult;

module.exports = { add, mult, subs, div, PI };

// obj.

// module.exports is a single object or value.
// When you reassign module.exports (e.g., module.exports = add), it completely replaces whatever was previously assigned.
// If you reassign it again (module.exports = mult), the previous value (add) is replaced with mult.
