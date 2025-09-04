const express=require("express");
const app=express();
const port=5000;
app.use(express.json());//middleware to parse json


app.get("/",(req,res)=>{
    res.json({message:"hello express is working"});
    res.send("hello express")
});
app.get("/about",(req,res)=>{
    res.send("hi im express");
});
app.post("/abc",(req,res)=>{
    res.json("succesful");
    console.log(req.body);
})


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
});
