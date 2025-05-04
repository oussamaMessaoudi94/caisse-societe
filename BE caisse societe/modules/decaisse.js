const mongoose = require('mongoose')

const decaisseSchema = mongoose.Schema({
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

const decaisse = mongoose.model('decaisse', decaisseSchema)

module.exports = decaisse