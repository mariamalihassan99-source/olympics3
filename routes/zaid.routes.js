const Zaid = require('../models/Zaid')
const router = require('express').Router()




router.get('/', async (req,res)=>{
    const allZaids = await Zaid.find()
    res.status(200).json(allZaids)
})


router.post('/', async (req,res)=>{
    const createdZaid = await Zaid.create(req.body)
    res.status(201).json(createdZaid)

})


router.get('/:zaidId', async (req,res)=>{
    const foundZaid = await Zaid.findById(req.params.zaidId)
    res.status(200).jason(foundZaid)
})



router.delete('/:zaidId',async(req,res)=>{
    const deletedZaid = await Zaid.findByIdAndDelete(req.params.zaidId)
    res.status(200).json(deletedZaid)
})


router.put('/:zaidId', async (req,res)=>{
    const updatedZaid = await Zaid.findByIdAndUpdate(req.params.zaidId, req.body)
    res.status(200).json(updatedZaid)
})


