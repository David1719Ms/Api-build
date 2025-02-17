const {model,Schema} = require ('mongoose')

const ProvSchema = new Schema({
    Name : {
        type:String,
        required:[true, 'The name is required'],
        minlength:[2, 'Min 2 characters']
    },
    Addres : {
        type:String,
        required:[true, 'Addres is required']
    },
    Cellphone : {
        type:String,
        required:[true, 'Cellphone is required'],
    },
    Email : {
        type:String,
        required:[true, 'Email is required'],
    }
})

module.exports = model('Proveedores', ProvSchema, 'Proveedores')