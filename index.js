import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

routes(app);

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Connected server with Node and Express");
});

app.listen(PORT, () => {
  console.log(`Server successfully connected on port ${PORT}`);
});
