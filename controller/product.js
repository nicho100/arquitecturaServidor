const getDao = require("../dao")


const getProducts=async()=>{
    const dao=await getDao()
    const products=await dao.getAllProducts()
    return products
}
            
const addProduct=async(product)=>{
    const dao=await getDao()
    if (product.name){
        const addedProduct=await dao.addSingleProduct(product)
        return addedProduct
    }
        throw new Error("Invalid product")
}
    //const delete= async(elementId)=>{
    //    let elementDelete= await this.model.deleteOne({_id:elementId})
    //    console.log(elementDelete)
    //}
const getById=async(id)=>{
    const dao= await getDao()
    const product= await dao.getProductById(id)
    return product
}
//const update= async(elementId,key,newValue)=>{
 //   const update = {};
 //   update.$set[key] = newValue

  //  let elementUpdate= await this.model.findByIdAndUpdate(elementId,update)
   // console.log(elementUpdate)
//}

module.exports={getProducts,addProduct,getById}