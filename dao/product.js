const Product=require("../schemas/mongoProducto")
const  mongoose  = require("mongoose")
const { urlMongo } = require("../config/enviorment")
class MongoProduct{
    async connect(){
        await mongoose.connect(urlMongo)
    }
 getAllProducts=async()=>{
    const products=await Product.find({})
    return products
}
 addSingleProduct =async(product)=>{
    const newProduct=new Product(product)
    await newProduct.save()
    return product
}
 getProductById=async(id)=>{
    const product=await Product.getById(id)
    return product
}

}

module.exports= MongoProduct