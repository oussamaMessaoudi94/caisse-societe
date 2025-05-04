const express = require('express')
const encaisse = require('../modules/encaisse')
const { default: mongoose } = require('mongoose')
const router = express.Router()




router.post('/encaisse/encaisse', (req, res)=>{
    const encaisseSchema = new encaisse({
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
    console.log('here', encaisseSchema);
    
    encaisseSchema.save().then(()=>{
        res.status(200).json({
            message : 'added'
        })
    })
})

router.get('/encaisse', (req, res)=>{
    encaisse.find().then((result)=>{
        res.status(200).json({
            find: result
        })
    })
})

router.get('/encaisse/:id', (req, res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
    }
    encaisse.findOne({_id: id}).then(
        (result)=>{
            res.status(200).json({
                findId: result
            }) 
        }
    ) 
})
 
router.put('/encaisse/:id', (req, res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
    }
    encaisse.updateOne({_id: id}, req.body).then(
        ()=>{
            res.status(200).json({
                message: 'update'
            }) 
        }
    ) 
})

router.delete('/encaisse/:id', (req, res)=>{
    encaisse.deleteOne({_id: req.params.id}).then(()=>{
        res.status(200).json({
            message : 'deleted'
        })
    })
})



module.exports = router