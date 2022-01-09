import {Schema, model } from 'mongoose'
// Definimos el Schema
const bicisSchema = new Schema({
    _marca: {
        type: String  
    },
    _precio: {
        type: Number
    },
    _tipoBici: {
        type: String
    }
})

export type iBici = {
    _marca: string | null,
    _precio: number | null,
    _tipoBici: string | null,
    
  }

// La colecciรณn de la BD 
export const Bicis = model('bicis', bicisSchema)