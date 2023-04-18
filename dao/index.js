const Mongodao= require("./product")

let mongodao=undefined
const getDao=async()=>{
    if(!mongodao){
        mongodao=new Mongodao()
        await mongodao.connect()
    }
    return mongodao
}
module.exports=getDao
