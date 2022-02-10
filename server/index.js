import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true})); //set limits
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://adesingsm:blasted4428@cluster0.leprk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) //connect to mongo send error if failed
.then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
.catch((error) => console.log("error message: ", error.message));