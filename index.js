import express from "express";
import routes from "./src/routes/crmRoutes";
const app = express();
const PORT = 3000;

routes(app);

app.get("/", (req, res) => {
  res.send("Connected server with Node and Express");
});

app.listen(PORT, () => {
  console.log(`Server successfully connected on port ${PORT}`);
});
