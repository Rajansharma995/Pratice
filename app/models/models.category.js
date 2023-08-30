const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type : String,
             required:[true,'Category Name is Required'],
             unique: true,
             maxLength :[30,'Name can be max of 30 Characters '],
             minLength :[2,'Name cannot be less than 2 characters']
        },
        status:{
            type:String,
            enum:['active','inactive'],
            default:'active'
        },
        },
        {timestamps:true}
        );
        module.exports=mongoose.model("Category",categorySchema);
