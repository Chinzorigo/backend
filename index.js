// import express
import express from "express";

// import cors
import cors from "cors";

// import routes
import router from "./routes/routes";

// init express
const app = express();

// use express json
app.use(express.json());

//use cors
app.use(cors());

// use router
app.use(router);

// port
app.listen(5000, () => {
    console.log("server is running successfully!")
})