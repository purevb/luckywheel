const express = require("express");
const router = express.Router();
const Wheel = require("../models/aa");

router.post("/wheel", async(req,res)=>{
try{
    const newWheel = new Wheel(req.body);
    await newWheel.save()
    .then((savedWheel)=>{
        console.log(savedWheel);
        res.status(200).json({msg:"Wheel saved"});
    }).catch((error)=>{
        console.log(error);
        res.status(500).json({msg:"unable to create new wheel"});
    })
}catch(error){
    console.log(error);
    res.status(500).json({msg :"couldnt save wheel"})
}
})

router.get("/wheel", async(req,res)=>{
    try{
        Wheel.find().then((wheels)=>{
            console.log(wheels);
            res.status(200).json({wheels:wheels});
        }).catch((error)=>{
            console.log(error);
            res.status(500).json({msg:"hadgalagdsngue"});
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"hadgalagdsngue"});
    }
})


router.get("/wheel/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        Wheel.findById(id)
        .then((wheel)=>{
            console.log(wheel);
            res.status(200).json({wheel:wheel});
        }).catch((error)=>{
            console.log(error);
            res.status(500).json({msg:"bhgubn"})
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"bhgubn"})
    }
})
module.exports=router;