import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://stephencomienda:073836@cluster0.b42eb5i.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}