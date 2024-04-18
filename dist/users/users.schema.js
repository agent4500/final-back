"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersSchema = void 0;
const mongoose = require("mongoose");
exports.usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
//# sourceMappingURL=users.schema.js.map