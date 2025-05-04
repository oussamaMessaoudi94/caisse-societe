const express = require('express')
const decaisse = require('../modules/decaisse')
const { default: mongoose } = require('mongoose')
const router = express.Router()




router.post('/decaisse/decaisse', (req, res)=>{
    const decaisseSchema = new decaisse({
        date: req.body.date,
        beneficier: req.body.beneficier,
        modalite: req.body.modalite,
        Ncheque: req.body.Ncheque,
        bank: req.body.bank,
        Ncompte: req.body.Ncompte,
        caisse: req.body.caisse,
        annee: req.body.annee,
        montant: req.body.montant,
        objet: req.body.objet,
        observation: req.body.observation,
    })
    
    decaisseSchema.save().then(()=>{
        res.status(200).json({
            message : 'added'
        })
    })
})

router.get('/decaisse', (req, res)=>{
    decaisse.find().then((result)=>{
        res.status(200).json({
            find: result
        })
    })
})

router.get('/decaisse/:id', (req, res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
    }
    decaisse.findOne({_id: id}).then(
        (result)=>{
            res.status(200).json({
                findId: result
            }) 
        }
    ) 
})
 
router.put('/decaisse/:id', (req, res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
    }
    decaisse.updateOne({_id: id}, req.body).then(
        ()=>{
            res.status(200).json({
                message: 'update'
            }) 
        }
    ) 
})

router.delete('/decaisse/:id', (req, res)=>{
    decaisse.deleteOne({_id: req.params.id}).then(()=>{
        res.status(200).json({
            message : 'deleted'
        })
    })
})



module.exports = router