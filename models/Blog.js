const {Schema,model, Error}=require('mongoose')

const userSchema=new Schema({
title: {
    type: String,
    required: true,
},
body: {
    type: String,
    required: true, 
},
profileImage: {
    type: String,
    required: false,
}







},{timestamps: true})

