const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:/shoppingDB")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const project = mongoose.model("project",newSchema)

module.exports=project