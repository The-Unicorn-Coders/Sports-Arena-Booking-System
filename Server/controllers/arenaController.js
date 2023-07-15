const Arena = require("../models/arenaModel");

const getAllArenas = async (req, res, next) =>{
  let arenas;

  try{
    arenas = await Arena.find();

  }catch(error){
    console.log(error);
  }

  if(!arenas){
    return res.status(404).json({ message: "No arenas found "})
  }
  return res.status(200).json({ arenas })
}

const addArena = async (req, res, next) =>{

  const { name, address, location ,imageUrl, sport } = req.body
  let arena;

  try{
    arena = new Arena({
      name,
      address,
      location,
      imageUrl,
      sport
    });

    await arena.save();
  }catch(err){
    console.log(err);
  }

  if(!arena){
    return res.status(500).json({ message: "Error"})
  }
  return res.status(201).json({ arena });
}

exports.getAllArenas = getAllArenas;
exports.addArena = addArena;