const Chat=require("../schemas/mongoChat")
class MongoChat{
    async connect(){
        await connectToDb()
    }

getAllChats=async()=>{
    const chats=await Chat.find({})
    return chats
}
addSingleChat =async(chat)=>{
    const newChat=new Chat(chat)
    await newChat.save()
    return chat
}
getChatById=async(id)=>{
    const chat=await Chat.getById(id)
    return chat
}  

}



module.exports={MongoChat}