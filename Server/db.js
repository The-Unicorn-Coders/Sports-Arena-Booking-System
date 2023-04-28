const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gamagepdw20:SportsArena5@arenacluster.zqtz2vv.mongodb.net/ArenaDB?retryWrites=true&w=majority/Arena', 
{
    useNewUrlParser: true,
    useUnifiedTopology:true
});
mongoose.Promise=global.Promise;

module.exports = mongoose.connection;