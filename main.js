var spawner = require("v3/spawner.js");
var ai_handler = require("v3/ai_handler.js");

spawner.tick();
ai_handler.tick();
console.log("end_frame");