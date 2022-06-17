const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    Email:{type:String,required:true,unique:true},
    Password:{type:String,required:true},
    FirstName:{type:String,required:true,unique:true},
    LastName:{type:String,required:true}
    
})

const productData= new Schema({
    Img:{type:String,required:true},
    Pname:{type:String,required:true},
    Price:{type:String,required:true},
    Features:{type:String,required:true},
    Product:{type:String,required:true}
})


mongoose.model('User',userSchema);
mongoose.model('Pinfo',productData);