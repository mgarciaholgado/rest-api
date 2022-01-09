"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicis = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const bicisSchema = new mongoose_1.Schema({
    _marca: {
        type: String
    },
    _precio: {
        type: Number
    },
    _tipoBici: {
        type: String
    }
});
// La colecciรณn de la BD 
exports.Bicis = (0, mongoose_1.model)('bicis', bicisSchema);
