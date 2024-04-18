"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
const mongoose = require("mongoose");
exports.BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: { type: String, require: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }, comments: { type: Array }
});
//# sourceMappingURL=blogs.schema.js.map