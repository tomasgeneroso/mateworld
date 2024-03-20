
import productsModel from "./productsSchema.js";

class Product{
    async getProduct(data) {
        try {
            let key=data[key]
            let response=await productsModel.find({key:Object.values(data)}) 
            if(response.length>0) return response
            return false
        } catch (error) {
            console.log('error haciendo tal cosas ',error)
        }   
    }
    
    async getAllProducts() {
        try {
            let response=await productsModel.find({})
            if(response.length>0) return {success:true,products:response}
            return {message:'Products not found', success:false}
        } catch (error) {
            console.log('error haciendo tal cosas ',error)
            return error
        }   
    }
    async addProduct(data) {
        try {
            let response=await productsModel.find({name:data.name})
            if(!response) {
                let product=new Product({
                    brand:req.body.brand,
                    name:req.body.name,
                    quantity:req.body.quantity,
                    description:req.body.description,
                    price:req.body.price,
                    stock:req.body.stock,
                    color:req.body.color,
                    material:req.body,
                    insulation:req.body.insulation,
                    fabricated:req.body.fabricated,
                })
                product.save().then(()=>{return console.log('Product added!')}).catch(e=>{return {error:e,success:false}})
            }
            return {message: 'Product added',success:true,productAdded:response};
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

export default new Product()