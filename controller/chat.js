const{getAllChats,getChatById,addSingleChat}=require("../dao/chat")

const getChats=async()=>{
    const chats=await getAllChats()
    return chats
}
            
const addChat=async(chat)=>{
    if (chat.email){
        const addedChat=await addSingleChat(chat)
        return addedChat
    }
        throw new Error("Invalid chat")
}
    //const delete= async(elementId)=>{
    //    let elementDelete= await this.model.deleteOne({_id:elementId})
    //    console.log(elementDelete)
    //}
const getById=async(id)=>{
    const chat= await getChatById(id)
    return chat
}
//const update= async(elementId,key,newValue)=>{
 //   const update = {};
 //   update.$set[key] = newValue

  //  let elementUpdate= await this.model.findByIdAndUpdate(elementId,update)
   // console.log(elementUpdate)
//}

module.exports={getChats,addChat,getById}