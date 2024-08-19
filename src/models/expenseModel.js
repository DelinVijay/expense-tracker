const mongoose=require('mongoose');
const Schema=require('mongoose').Schema;



const expenseSchema=new Schema({
    "item":String,
    "price":Number
});

const expenseModel=mongoose.model("expenses",expenseSchema);

module.exports=expenseModel;