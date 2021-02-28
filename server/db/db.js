"use strict";
exports.__esModule = true;
exports.db = void 0;
//Testing the import on the backend. I tried require but gave me a TS error
var sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/amplify", {
    logging: false
});
