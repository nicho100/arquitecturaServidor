const User=require("../schemas/mongoUser")
const connectToDb=require("../config/connectToDb")
class MongoUser{
    async connect(){
        await connectToDb()
    }
getAllUsers=async()=>{
    const users=await User.find({})
    return users
}
addSingleUser =async(user)=>{
    const newUser=new User(user)
    await newUser.save()
    return user
}
getUserById=async(id)=>{
    const user=await User.getById(id)
    return user
}
}


module.exports={MongoUser}