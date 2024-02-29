
import cartsModel from "./billSchema.js";

class Cart{
    async getProduct(data) {
        try {
            let response=await productsModel.find({name:data.name})
            if(response.length>0) return response
            return false
        } catch (error) {
            console.log('error haciendo tal cosas ',error)
        }   
    }
    
    async showProduct() {
        try {
            let response=await productsModel.find({})
            if(response.length>0) return response
        } catch (error) {
            console.log('error haciendo tal cosas ',error)
            return error
        }   
    }
    async addProduct(data) {
        try {
            /*
            SI ES UN ARRAY AGREGAR PARA CADA U
            
            if(data.length>1){
                data.forEach(e=>{
                    e
                })
            }
             */
            let response=await productsModel.find({name:data.name})
            if(!response) {
                let product=new Product({
                    name:req.body.name,
                    quantity:req.body.quantity,
                    price:req.body.price,
                    stock:req.body.stock,
                    pais:req.body.pais,
                    description:req.body.description
                })
                product.save().then(()=>{return console.log('Product added!')}).catch(e=>{res.status(501).json({error:e,success:false})})
            }
            return response
        }catch(e){
            console.log("🚀 ~ file: productsModel.js:46 ~ Product ~ addProduct ~ e:", e)
            res.status(304).json({error:e,success:false})
        } 

    }
    async modifyProduct(data){
        try {
            let modProduct
            if (data.hasOwnProperty('name')) {
                modProduct= delete data.name;
            }   
            console.log('modProduct ',modProduct)
            /*
            SI ES UN ARRAY BUSCAR PA CADA UNO Y ACTUALIZAR 
            SI NO EXISTE AVISAR Y NO ACTUALIZAR O ACTUALIZAR SOLO LOS QUE ESTAN BIEN
            NOTA: SACAR EL NAME PARA CADA UNO
            if(data.length>1){
                data.forEach(e=>{
                    e
                })
            }
             */
            let change=await productsModel.findOneAndReplace({name:data.name},modProduct) 
            console.log("🚀 ~ file: productsModel.js:59 ~ Product ~ modifyProduct ~ change:", change)
        
            if(change) return change
            return false
        } catch (error) {
            console.log("🚀 ~ file: productsModel.js:64 ~ Product ~ modifyProduct ~ error:", error)
            
        }
    }
}

export default new Cart()