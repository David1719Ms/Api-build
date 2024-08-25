const Proveedores = require('../models/proveedores')


const getProv = async(req,res) => {
    const Prov = await Proveedores.find()

    res.json(Prov)
}

const postProv = async(req, res) => {
    
    let msg = 'Product Inserted'
    const body = req.body
    try {
        const provee = new Proveedores(body)
        await provee.save() 
    } catch (error) {
        msg=error
    }
    res.json({msg:msg})
}

const putProv = async (req,res) => {
    const {Name, Addres, Cellphone, Email} = req.body
    let msg = 'Proveedor Update'
    try {
        const result = await Proveedores.findOneAndUpdate(
            { Name: Name },
            { Addres: Addres, Cellphone: Cellphone, Email: Email },
            { new: true }
        );

        if (!result) {
            msg = 'No document found with that name';
        }
    } catch (error) {
        msg = error.message;
    }
    res.json({ msg: msg });
}

const deleteProv = async (req,res) => {
    let msg = 'Proveedor deleted'
    let id = req.params.id
    try{
        await Proveedores.findByIdAndDelete({_id:id})
    }catch (error){
        msg = 'Problems with the elimination'
    }
    res.json({msg:msg})

}

module.exports = {
    getProv,
    postProv,
    putProv,
    deleteProv
}

