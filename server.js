const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { isRegExp } = require("util");
const compression = require("compression");
const enforce = require("express-sslify");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(compression());
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server is running on the port " + port);
});
app.get("/service-worker.js", function (req, res) {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "pln",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
/* TODO:
        1) in case of logout impossibility to make transfer 
        2) text notifications about errors.
        3) Add Contact Page.
        3) Add to top button.
*/
