import mongoose from "mongoose";
import config from "config";

//get the connection string
const db = config.get('mongoURI');

//connect to MongoDB
const connectDatabase = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error.message);

        //Exit the failure code
        process.exit(1);
    }
};

export default connectDatabase;