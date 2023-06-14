const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:Sports@ixd@cluster0.styvg5e.mongodb.net/ArenaDB?retryWrites=true&w=majority/Arena', 
{
    useNewUrlParser: true,
    useUnifiedTopology:true
});
mongoose.Promise=global.Promise;

module.exports = mongoose.connection;