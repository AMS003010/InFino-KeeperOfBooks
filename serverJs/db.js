const mongoose = require('mongoose');

const connection = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect('mongodb+srv://ams:juiceBox@cluster1.wgncmcb.mongodb.net/?retryWrites=true&w=majority',connectionParams);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Not Connected to Databse",error);
    }
}
module.exports = connection;