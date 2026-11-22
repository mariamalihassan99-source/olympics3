import mongoose from 'mongoose'



// Schema
const zaidSchema = new mongoose.Schema({
    name:{
        type: String
    },
    zaidImage:{
        type: String
    }
})


// model
const Zaid = mongoose.model('Zaid',zaidSchema)

export default Zaid //export