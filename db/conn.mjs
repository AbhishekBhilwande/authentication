import mongoose from 'mongoose';

mongoose.connect("").then(() => {
    console.log("Database is connected");
}).catch((err) => {
    console.error("Database connection error:", err);
});
export default mongoose;
