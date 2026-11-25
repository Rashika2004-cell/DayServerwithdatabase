const app=require('./src/app.js');

//kam rehta h database se connect krne ka

const mongoose= require('mongoose')
function connectDB(){
mongoose.connect("mongodb+srv://rashika:mongo123@cluster0.ias8m88.mongodb.net/NotesDatabase")

.then(()=>{
    console.log("Connected to DataBase");
})
}

connectDB();

app.listen(3000,()=>{
    console.log("Server is Running...");
})