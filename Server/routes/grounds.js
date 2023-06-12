const router = require("express").Router();
let Ground = require("../models/ground");

router.route("/ground").post((req,res)=> {
    const name = req.body.name;
    const address = req.body.address;
    const city = req.body.city;

    const newGround = new Ground({
        name,
        address,
        city
    })

    newGround.save().then(()=>{
        res.json("Ground Added")
    }).catch((err)=> {
        console.log(err);
    })

})

router.route("/").get((req,res) =>{

    Ground.find().then((ground)=>{
        res.json(ground)
    }).catch((err)=>{
        console.log(err)
    })

})


router.route("/update/:id").put(async(req, res)=>{
    let groundId = req.params.id;
    const {name, address, city} = req.body;

    const updateGround = {
        name,
        address,
        city
    }

    const update = await Ground.findByIdAndUpdate(groundId, updateGround)
    .then(()=> {
        res.status(200).send({status: "Ground updated", ground:update})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error"});
    })
  
})

router.route("/delete/:id").delete(async (req, res)=> {
    let groundId = req.params.id;

    await Ground.findByIdAndDelete(groundId)
    .then(()=> {
        res.status(200).send({status: "Ground deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error" });
    })
})

router.route("/get/:id").get(async(req, res)=> {
    let groundId = req.params.id;
    await Ground.findById(groundId)
}).then(()=> {
    res.status(200).send({status: "Ground fetched", ground: ground})
}).catch(()=>{
    console.log(err.message);
    res.status(500).send({status: "Error" });
})

module.exports = router;