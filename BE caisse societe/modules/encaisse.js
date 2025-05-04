const mongoose = require('mongoose')

const encaisseSchema = mongoose.Schema({
    date: String,
    beneficier: String,
    modalite: String,
    Ncheque: String,
    bank: String,
    Ncompte: String,
    caisse: String,
    annee: String,
    montant: Number,
    objet: String,
    observation: String,
})

const encaisse = mongoose.model('encaisse', encaisseSchema)

module.exports = encaisse