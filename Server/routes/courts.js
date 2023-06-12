const router = require("express").Router();
let Court = require("../models/courts");

router.post('/',async (req,res)=> {
    const name = req.body.name;
    const sports = req.body.sports;
    const time = req.body.time;
    console.log(Court);

    const newCourt = new Court({
        name:name,
        sports:sports,
        time:time
    });

    newCourt.save((err)=>{
        if(err){
            console.log('Error');
            res.status(500).send(err);
        }else{
            console.log('success');
            console.log(req);
        }
    });

});

router.route("/").get((req,res) =>{

    Court.find().then((court)=>{
        res.json(court)
    }).catch((err)=>{
        console.log(err)
    })

})


router.route("/update/:id").put(async(req, res)=>{
    let courtId = req.params.id;
    const {name, sports, time} = req.body;

    const updateCourt = {
        name,
        sports,
        time
    }

    const update = await Court.findByIdAndUpdate(courtId, updateCourt)
    .then(()=> {
        res.status(200).send({status: "Court updated", court:update})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error"});
    })
  
})

router.route("/delete/:id").delete(async (req, res)=> {
    let courtId = req.params.id;

    await Court.findByIdAndDelete(courtId)
    .then(()=> {
        res.status(200).send({status: "Court deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error" });
    })
})

// router.route("/get/:id").get(async(req, res)=> {
//     let courtId = req.params.id;
//     await Court.findById(courtId)
// }).then(()=> {
//     res.status(200).send({status: "Court fetched", court: court})
// }).catch(()=>{
//     console.log(err.message);
//     res.status(500).send({status: "Error" });
// })

module.exports = router;