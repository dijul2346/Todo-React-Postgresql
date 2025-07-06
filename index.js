const express=require("express");
const app=express();
const jwt=require("jsonwebtoken")
const {PrismaClient}=require("@prisma/client");
const prisma=new PrismaClient()
const cors = require("cors");
app.use(cors());
require('dotenv').config();


app.use(express.json());
console.log("Server running")
app.post("/signup",function(req,res){
    const name=req.body.name
    const userName=req.body.userName;
    const password=req.body.password
    prisma.user.create({
        data:{
            name:name,
            userName:userName,
            password:password
        }
    }).then((user)=>{
        res.json(user);
    }).catch((err)=>{
        res.json({error:err})
    })
})

app.post("/signin",function(req,res){
    console.log("Reached")
    const name=req.body.name
    const userName=req.body.userName;
    const password=req.body.password
    const user=prisma.user.findUnique({
        where:{
            userName:userName,
        }
    }).then((user)=>{
        if(user && user.password===password){
            let userId=user.id
            const token=jwt.sign({userName,userId},process.env.JWT_KEY)
            res.send({token:token})
        }
        else{
            res.send("Invalid")
        }
    }).catch((err)=>{
        res.json({error:err})
    })
})


app.post("/todos",function(req,res){
    const token=req.headers.token;
    const title=req.body.title;
    const {userId,userName}=jwt.verify(token,"123random");
    const user=prisma.user.findUnique({
        where:{
            userName:userName,
        }
    }).then(function(user){
        if(user){
            prisma.todo.create({
            data: {
                title: title,
                userId: userId
            }
    }).then(function(response){
                res.send(response)
            })
        }
    })

})

app.get("/todos",function(req,res){
    const token=req.headers.token;
    const {userId,userName}=jwt.verify(token,"123random");
    const user=prisma.user.findUnique({
        where:{
            userName:userName,
        }
    }).then(function(user){
        if(user){
            prisma.todo.findMany({})
            .then(function(response){
                res.send(response)
            })
        }
    })

})

app.delete("/todo/:id",function(req,res){
    const token=req.headers.token;
    const todoId=Number(req.params.id);
    const {userId,userName}=jwt.verify(token,"123random");
    const user=prisma.user.findUnique({
        where:{
            userName:userName,
        }
    }).then(function(user){
        if(user){
            prisma.todo.delete({
                where:{
                    id:todoId
                }
            }).then(
                res.send("Done")
            )
        }
    })
})


app.listen(3000)