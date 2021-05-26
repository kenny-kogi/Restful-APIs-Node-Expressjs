import { addNewContact } from "../controllers/crmControllers";
const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        console.log(`Request Original Url: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
      (req, res) => {
        res.send("GET request successful");
      }
    )
    .post(addNewContact);

  app
    .route("/contact/:ContactiD")
    .put((req, res) => {
      res.send("PUT request successful");
    })
    .delete((req, res) => {
      res.send("DELETE request successful");
    });
};

export default routes;
