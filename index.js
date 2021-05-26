import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

routes(app);

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => handleError(error));

console.log(mongoose.connection.readyState);

app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Connected server with Node and Express");
});

app.listen(PORT, () => {
  console.log(`Server successfully connected on port ${PORT}`);
});
